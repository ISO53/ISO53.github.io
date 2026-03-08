<template>
  <div class="app-wrapper">
    <div class="cursor-dot" :style="{ left: dot.x + 'px', top: dot.y + 'px' }"></div>
    <NavBar />

    <main>
      <HeroSection />
      <AboutSection />
      <PentestSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import PentestSection from './components/sections/PentestSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

const dot = ref({ x: -10, y: -10 })
const updateDotPos = (e) => {
  dot.value = { x: e.clientX, y: e.clientY }
}

onMounted(() => {
  window.addEventListener('mousemove', updateDotPos)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateDotPos)
})
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>
