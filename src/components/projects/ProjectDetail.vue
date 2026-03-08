<template>
  <Teleport to="body">
    <Transition name="slide-panel">
      <!-- Overlay wrapper -->
      <div v-if="visible && repo" class="pd-overlay" @click.self="emit('close')" @keydown.esc="emit('close')"
        tabindex="0" ref="overlayRef">
        <!-- Slide-in panel -->
        <div class="pd-panel" role="dialog" aria-modal="true" aria-labelledby="pd-title">
          <button class="pd-close" @click="emit('close')" aria-label="Close project details">
            [ CLOSE ]
          </button>

          <div class="pd-content">
            <!-- Header -->
            <div class="pd-header">
              <div class="pd-label">// REPOSITORY</div>
              <h2 id="pd-title" class="pd-title">{{ repo.name }}</h2>
              <p class="pd-desc">{{ repo.description || 'No description provided.' }}</p>

              <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="pd-github-btn">
                → VIEW ON GITHUB
              </a>
            </div>

            <!-- Meta Grid -->
            <div class="pd-meta-grid">
              <div class="pd-meta-cell">
                <div class="pd-meta-label">STARS</div>
                <div class="pd-meta-val">{{ repo.stargazers_count || 0 }}</div>
              </div>
              <div class="pd-meta-cell">
                <div class="pd-meta-label">FORKS</div>
                <div class="pd-meta-val">{{ repo.forks_count || 0 }}</div>
              </div>
              <div class="pd-meta-cell">
                <div class="pd-meta-label">WATCHERS</div>
                <div class="pd-meta-val">{{ repo.watchers_count || 0 }}</div>
              </div>
              <div class="pd-meta-cell">
                <div class="pd-meta-label">PRIMARY LANG</div>
                <div class="pd-meta-val" :style="{ color: getLangColor(repo.language) }">
                  {{ repo.language || 'N/A' }}
                </div>
              </div>
              <div class="pd-meta-cell">
                <div class="pd-meta-label">LICENSE</div>
                <div class="pd-meta-val">{{ repo.license?.name || 'None' }}</div>
              </div>
              <div class="pd-meta-cell">
                <div class="pd-meta-label">CREATED</div>
                <div class="pd-meta-val">{{ formatDate(repo.created_at) }}</div>
              </div>
              <div class="pd-meta-cell">
                <div class="pd-meta-label">UPDATED</div>
                <div class="pd-meta-val">{{ formatDate(repo.updated_at) }}</div>
              </div>
              <div class="pd-meta-cell" style="grid-column: span 3;">
                <div class="pd-meta-label">DEFAULT BRANCH</div>
                <div class="pd-meta-val">{{ repo.default_branch }}</div>
              </div>
            </div>

            <!-- Language Distribution -->
            <div class="pd-langs">
              <div class="pd-section-label">LANGUAGE DISTRIBUTION</div>

              <div v-if="langsLoading" class="loading-bar"></div>
              <div v-else-if="langsError" class="error-text">FAILED TO FETCH LANGUAGES</div>
              <div v-else-if="langs.length === 0" class="pd-empty-mono">NO LANGUAGE DATA</div>
              <div v-else>
                <div class="pd-lang-bar">
                  <div v-for="l in langs" :key="l.name" class="pd-lang-segment"
                    :style="{ width: l.percent + '%', backgroundColor: getLangColor(l.name) }"
                    :title="`${l.name}: ${l.percent}%`"></div>
                </div>
                <div class="pd-lang-legend">
                  <div v-for="l in langs" :key="l.name" class="pd-lang-item">
                    <span class="pd-lang-dot" :style="{ backgroundColor: getLangColor(l.name) }"></span>
                    <span>{{ l.name }} <span class="grey">{{ l.percent }}%</span></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Topics -->
            <div class="pd-topics" v-if="repo.topics && repo.topics.length">
              <div class="pd-section-label">TOPICS</div>
              <div class="pd-topics-list">
                <span v-for="topic in repo.topics" :key="topic" class="pd-topic">
                  {{ topic }}
                </span>
              </div>
            </div>

            <!-- README -->
            <div class="pd-readme">
              <div class="pd-section-label">README.MD</div>

              <div v-if="readmeLoading">
                <div class="loading-text" style="text-align:center; padding: 20px 0;">LOADING README...</div>
                <div class="loading-bar"></div>
              </div>
              <div v-else-if="readmeError" class="error-text">
                [ ERROR ] NO README FOUND OR FAILED TO FETCH
              </div>
              <div v-else class="readme-content" v-html="readmeHtml"></div>
            </div>

          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { marked } from 'marked'
import { getLangColor } from '../../utils/langColors'

const props = defineProps({
  repo: {
    type: Object,
    default: null
  },
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const overlayRef = ref(null)

// API Data refs
const langs = ref([])
const langsLoading = ref(false)
const langsError = ref(false)

const readmeHtml = ref('')
const readmeLoading = ref(false)
const readmeError = ref(false)

// Formatting
const formatDate = (dateStr) => {
  if (!dateStr) return 'N/A'
  const d = new Date(dateStr)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// Watchers
watch(() => props.visible, async (newVal) => {
  if (newVal) {
    // Lock body scroll
    document.body.style.overflow = 'hidden'
    // Focus for escape key trapping
    await nextTick()
    if (overlayRef.value) overlayRef.value.focus()

    // Fetch data
    fetchLanguages()
    fetchReadme()
  } else {
    // Unlock body scroll
    document.body.style.overflow = ''

    // Reset state
    langs.value = []
    readmeHtml.value = ''
    langsError.value = false
    readmeError.value = false
  }
})

const fetchLanguages = async () => {
  if (!props.repo) return
  langsLoading.value = true
  langsError.value = false
  langs.value = []

  try {
    const res = await fetch(`/api/languages?repo_name=${props.repo.name}`)
    if (!res.ok) throw new Error('Failed to fetch languages')

    const data = await res.json()
    // data format: { "Java": 42301, "Python": 8200 }

    const totalBytes = Object.values(data).reduce((sum, val) => sum + val, 0)

    const formattedLangs = Object.entries(data).map(([name, bytes]) => {
      const percent = totalBytes > 0 ? ((bytes / totalBytes) * 100).toFixed(1) : 0
      return { name, bytes, percent: parseFloat(percent) }
    })

    // Sort by largest contribution
    langs.value = formattedLangs.sort((a, b) => b.bytes - a.bytes)

  } catch (err) {
    console.error('Languages fetch error:', err)
    langsError.value = true
  } finally {
    langsLoading.value = false
  }
}

const fetchReadme = async () => {
  if (!props.repo) return
  readmeLoading.value = true
  readmeError.value = false
  readmeHtml.value = ''

  try {
    const res = await fetch(`/api/readme?repo_name=${props.repo.name}`)
    if (!res.ok) throw new Error('Failed to fetch readme')

    const rawMarkdown = await res.text()
    readmeHtml.value = marked.parse(rawMarkdown, {
      gfm: true,
      breaks: true
    })
  } catch (err) {
    console.error('Readme fetch error:', err)
    readmeError.value = true
  } finally {
    readmeLoading.value = false
  }
}
</script>

<style scoped>
/* Overlay Wrapper */
.pd-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  /* right align panel */
  outline: none;
  /* remove focus ring */
}

/* Panel */
.pd-panel {
  width: 100%;
  max-width: 780px;
  height: 100vh;
  background: var(--color-surface);
  border-left: var(--border-red);
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* Transitions */
.slide-panel-enter-active,
.slide-panel-leave-active {
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-panel-enter-active .pd-panel,
.slide-panel-leave-active .pd-panel {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-panel-enter-from {
  opacity: 0;
}

.slide-panel-leave-to {
  opacity: 0;
}

.slide-panel-enter-from .pd-panel {
  transform: translateX(100%);
}

.slide-panel-leave-to .pd-panel {
  transform: translateX(100%);
}

/* Close Button */
.pd-close {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background: var(--color-bg);
  color: var(--color-red);
  border: var(--border-red-sm);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 2px;
  padding: 8px 16px;
  cursor: crosshair;
  z-index: 10;
  transition: none;
}

.pd-close:hover {
  background: var(--color-red);
  color: var(--color-white);
}

/* Content Area */
.pd-content {
  padding: var(--spacing-lg) var(--spacing-md);
  flex-grow: 1;
}

.pd-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-red);
  letter-spacing: 4px;
  margin-bottom: var(--spacing-xs);
}

.pd-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 4rem);
  line-height: 0.95;
  color: var(--color-white);
  margin-bottom: var(--spacing-sm);
  word-wrap: break-word;
}

.pd-desc {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-grey-light);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.pd-github-btn {
  display: block;
  width: 100%;
  text-align: center;
  background: var(--color-surface-alt);
  color: var(--color-white);
  border: var(--border-red);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  letter-spacing: 3px;
  padding: 16px;
  text-decoration: none;
  cursor: crosshair;
  margin-bottom: var(--spacing-lg);
}

.pd-github-btn:hover {
  background: var(--color-red);
}

/* Meta Grid */
.pd-meta-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--color-border);
  border: var(--border-thin);
  margin-bottom: var(--spacing-lg);
}

.pd-meta-cell {
  background: var(--color-surface);
  padding: var(--spacing-sm);
}

.pd-meta-label {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--color-grey-mid);
  letter-spacing: 2px;
  margin-bottom: 4px;
}

.pd-meta-val {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-white);
  word-break: break-all;
}

.pd-section-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-white);
  letter-spacing: 3px;
  border-bottom: var(--border-red);
  padding-bottom: 6px;
  margin-bottom: var(--spacing-sm);
}

/* Languages */
.pd-langs {
  margin-bottom: var(--spacing-lg);
}

.pd-lang-bar {
  display: flex;
  height: 8px;
  width: 100%;
  border-radius: 4px;
  /* subtle softening for the bar */
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
}

.pd-lang-segment {
  height: 100%;
}

.pd-lang-legend {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-white);
}

.pd-lang-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pd-lang-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.pd-empty-mono {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-grey-mid);
}

/* Topics */
.pd-topics {
  margin-bottom: var(--spacing-lg);
}

.pd-topics-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.pd-topic {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 4px 10px;
  border: 1px solid var(--color-red-dark);
  color: var(--color-red);
  text-transform: uppercase;
}

@media (max-width: 600px) {
  .pd-meta-grid {
    grid-template-columns: 1fr 1fr;
  }

  .pd-meta-cell:last-child {
    grid-column: span 2 !important;
  }

  .pd-content {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
}
</style>
