<template>
  <div class="project-card" @click="emit('open', repo)">
    <div class="project-card__bg-wash"></div>

    <div class="project-card__top">
      <span class="project-card__index">FILE_{{ String(index + 1).padStart(3, '0') }}</span>
      <div class="project-card__lang">
        <span class="project-card__lang-dot" :style="{ backgroundColor: getLangColor(repo.language) }"
          aria-hidden="true"></span>
        <span class="project-card__lang-text">{{ repo.language || 'Mixed' }}</span>
      </div>
    </div>

    <h3 class="project-card__name">{{ repo.name }}</h3>

    <p class="project-card__desc">
      {{ repo.description || 'No description provided.' }}
    </p>

    <div class="project-card__topics" v-if="repo.topics && repo.topics.length">
      <span v-for="topic in repo.topics.slice(0, 3)" :key="topic" class="project-card__topic">
        {{ topic }}
      </span>
      <span class="project-card__topic" v-if="repo.topics.length > 3">+{{ repo.topics.length - 3 }}</span>
    </div>

    <div class="project-card__bottom">
      <div class="project-card__stats">
        <span>★ {{ repo.stargazers_count || 0 }}</span>
        <span>⑂ {{ repo.forks_count || 0 }}</span>
        <span>👁 {{ repo.watchers_count || 0 }}</span>
      </div>
      <div class="project-card__access">[ ACCESS ]</div>
    </div>
  </div>
</template>

<script setup>
import { getLangColor } from '../../utils/langColors'

defineProps({
  repo: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['open'])
</script>

<style scoped>
.project-card {
  display: block;
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: var(--border-thin);
  border-left: 4px solid var(--color-red);
  cursor: crosshair;
  position: relative;
  overflow: hidden;
  transition: none;
  /* brutalist */
  min-height: 220px;
}

.project-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(to bottom,
      transparent,
      transparent 2px,
      rgba(224, 0, 0, 0.03) 2px,
      rgba(224, 0, 0, 0.03) 4px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s;
}

.project-card:hover::after {
  opacity: 1;
}

/* Hover effects */
.project-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--color-red-dark);
  transform: translateX(-100%);
  transition: transform 0.2s ease;
  z-index: 2;
}

.project-card__bg-wash {
  position: absolute;
  inset: 0;
  background: var(--color-red-dim);
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 1;
  pointer-events: none;
}

.project-card:hover {
  border-color: var(--color-red);
}

.project-card:hover::before {
  transform: translateX(0);
}

.project-card:hover .project-card__bg-wash {
  opacity: 1;
}

.project-card:hover .project-card__name {
  color: var(--color-red);
}

.project-card:hover .project-card__access {
  opacity: 1;
}

/* Content (needs higher z-index than wash) */
.project-card__top,
.project-card__name,
.project-card__desc,
.project-card__topics,
.project-card__bottom {
  position: relative;
  z-index: 3;
}

.project-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.project-card__index {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 2px;
  color: var(--color-red-dark);
}

.project-card__lang {
  display: flex;
  align-items: center;
  gap: 6px;
}

.project-card__lang-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.project-card__lang-text {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--color-grey-light);
  text-transform: uppercase;
}

.project-card__name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--color-white);
  line-height: 1.1;
  margin-bottom: var(--spacing-xs);
  text-transform: uppercase;
  word-wrap: break-word;
}

.project-card__desc {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-grey-light);
  line-height: 1.5;
  margin-bottom: var(--spacing-sm);
  flex-grow: 1;

  /* 2-line clamp */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-card__topics {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: var(--spacing-sm);
}

.project-card__topic {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  padding: 2px 6px;
  border: 1px solid var(--color-border-mid);
  color: var(--color-grey-mid);
  text-transform: uppercase;
}

.project-card__bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
}

.project-card__stats {
  display: flex;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-grey-mid);
}

.project-card__access {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-red);
  letter-spacing: 2px;
  opacity: 0;
}
</style>
