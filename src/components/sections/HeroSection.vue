<template>
  <section class="hero" aria-label="Hero section">
    <div class="hero__bg-name">YUSUF İHSAN ŞİMŞEK</div>
    <div class="hero__content" style="position: relative; z-index: 10;">
      <div class="hero__name-block">
        <h1 class="hero__name">
          <span class="hero__name-line">YUSUF İHSAN</span>
          <span class="hero__name-line">ŞİMŞEK</span>
        </h1>
        <div class="hero__slash"></div>
      </div>

      <div class="hero__subtitle">
        <span class="hero__subtitle-text">{{ currentTitle }}</span>
        <span class="hero__cursor" aria-hidden="true">█</span>
      </div>
    </div>

    <div class="hero__location" aria-label="Location">[ İSTANBUL / TURKEY ]</div>
    <div class="hero__scroll" aria-label="Scroll down indicator">SCROLL ↓</div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const titles = ['COMPUTER ENGINEER', 'PENETRATION TESTER', 'BACKEND DEVELOPER']
const currentTitle = ref(titles[0])
let titleIndex = 0
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    titleIndex = (titleIndex + 1) % titles.length
    currentTitle.value = ''
    setTimeout(() => {
      currentTitle.value = titles[titleIndex]
    }, 80)
  }, 2500)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  padding-top: 15vh;
  overflow: hidden;
}

.hero__bg-name {
  position: absolute;
  top: 5vh;
  left: 5vw;
  font-family: var(--font-display);
  font-size: 20vw;
  color: var(--color-surface-alt);
  opacity: 0.3;
  line-height: 0.8;
  pointer-events: none;
  z-index: 0;
  white-space: nowrap;
}

.hero__content {
  text-align: left;
  width: 100%;
  max-width: 1400px;
}

.hero__name {
  font-family: var(--font-display);
  font-size: clamp(5rem, 14vw, 13rem);
  line-height: 0.88;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-sm);
}

.hero__name-line {
  display: block;
}

.hero__slash {
  width: 100%;
  height: 3px;
  background: var(--color-red);
  margin: var(--spacing-sm) 0;
}

.hero__subtitle {
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 2rem;
  margin-top: var(--spacing-sm);
}

.hero__subtitle-text {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: var(--color-red);
  letter-spacing: 3px;
  text-transform: uppercase;
}

.hero__cursor {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: var(--color-red);
  animation: blink 1s infinite;
}

.hero__location {
  position: absolute;
  bottom: var(--spacing-lg);
  left: var(--spacing-lg);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-grey-mid);
  letter-spacing: 3px;
  text-transform: uppercase;
}

.hero__scroll {
  position: absolute;
  bottom: var(--spacing-lg);
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-red);
  letter-spacing: 4px;
  text-transform: uppercase;
  animation: scrollBlink 2s infinite;
}

@media (max-width: 768px) {
  .hero__name {
    font-size: clamp(3.5rem, 16vw, 6rem);
  }

  .hero__location {
    left: var(--spacing-sm);
    bottom: var(--spacing-sm);
  }

  .hero__scroll {
    bottom: var(--spacing-sm);
  }
}
</style>
