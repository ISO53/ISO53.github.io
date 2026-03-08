<template>
  <section id="projects" class="section">
    <div class="section-inner">
      <div class="section-number">05 —</div>
      <div class="section-label">// REPOSITORY ARCHIVE</div>
      <h2 class="section-title">PROJECTS</h2>
      <RedSlash label="FETCHING FROM GITHUB API" />

      <!-- Loading State -->
      <div v-show="loading" class="projects__status" style="opacity: 1;">
        <div class="loading-text">ACCESSING REPOSITORIES...</div>
        <div class="loading-bar"></div>
      </div>

      <!-- Error State -->
      <div v-show="error && !loading" class="projects__status" style="opacity: 1;">
        <div class="error-text">
          [ ERROR ] FAILED TO ESTABLISH API CONNECTION.<br />
          PLEASE CHECK NETWORK OR API STATUS.
        </div>
      </div>

      <div v-show="!loading && !error">
        <!-- Filter Bar -->
        <div class="projects__filters">
          <button v-for="filter in filters" :key="filter" class="projects__filter-btn"
            :class="{ active: currentFilter === filter }" @click="currentFilter = filter">
            {{ filter }}
          </button>
        </div>

        <!-- Grid -->
        <div class="projects__grid">
          <div v-for="(repo, index) in filteredRepos" :key="repo.id" class="projects__card-wrapper">
            <ProjectCard :repo="repo" :index="index" @open="openProject" />
          </div>
        </div>
      </div>
    </div>

    <!-- Detail Overlay (Teleported in child component) -->
    <ProjectDetail :repo="selectedRepo" :visible="detailVisible" @close="closeProject" />
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import RedSlash from '../RedSlash.vue'
import ProjectCard from '../projects/ProjectCard.vue'
import ProjectDetail from '../projects/ProjectDetail.vue'

const repos = ref([])
const loading = ref(true)
const error = ref(false)

const filters = ['ALL', 'JAVA', 'PYTHON', 'JAVASCRIPT', 'OTHER']
const currentFilter = ref('ALL')

const selectedRepo = ref(null)
const detailVisible = ref(false)

const openProject = (repo) => {
  selectedRepo.value = repo
  detailVisible.value = true
}

const closeProject = () => {
  detailVisible.value = false
  // Small delay before unsetting repo to allow slide-out animation to play
  setTimeout(() => {
    selectedRepo.value = null
  }, 350)
}

const filteredRepos = computed(() => {
  if (currentFilter.value === 'ALL') return repos.value

  return repos.value.filter(r => {
    const lang = r.language ? r.language.toUpperCase() : 'UNKNOWN'
    if (currentFilter.value === 'OTHER') {
      return !['JAVA', 'PYTHON', 'JAVASCRIPT'].includes(lang)
    }
    return lang === currentFilter.value
  })
})

const API_BASE_URL = 'https://iso53-github-io-serverless.vercel.app'

const fetchRepos = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/repos`)
    if (!res.ok) throw new Error('Network response was not ok')
    const data = await res.json()
    // Ensure sorted by stargazers_count desc (API already does this, but good to ensure)
    repos.value = data.sort((a, b) => b.stargazers_count - a.stargazers_count)
  } catch (err) {
    console.error('Error fetching repos:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchRepos()
})
</script>

<style scoped>
.projects__status {
  padding: var(--spacing-xl) 0;
  max-width: 400px;
  margin: 0 auto;
}

.projects__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.projects__filter-btn {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--color-grey-mid);
  background: var(--color-surface);
  border: var(--border-thin);
  padding: 8px 16px;
  cursor: crosshair;
  transition: none;
  /* brutalist */
}

.projects__filter-btn:hover {
  border-color: var(--color-red);
  color: var(--color-white);
}

.projects__filter-btn.active {
  background: var(--color-red);
  border-color: var(--color-red);
  color: var(--color-white);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0;
  border-top: var(--border-thin);
  border-left: var(--border-thin);
}

.projects__card-wrapper {
  margin-top: -1px;
  margin-left: -1px;
}
</style>
