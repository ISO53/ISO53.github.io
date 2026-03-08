<template>
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="navbar__left">
      <span class="navbar__name">YUSUF İHSAN ŞİMŞEK</span>
      <span class="live-indicator" aria-hidden="true">● LIVE</span>
    </div>

    <button class="navbar__menu-toggle" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen"
      aria-label="Toggle navigation menu">
      [ {{ menuOpen ? 'CLOSE' : 'MENU' }} ]
    </button>

    <div class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
      <a v-for="link in navLinks" :key="link.id" :href="`#${link.id}`" class="navbar__link" @click="menuOpen = false"
        :aria-label="`Navigate to ${link.label} section`">{{ link.label }}</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const navLinks = [
  { id: 'about', label: 'ABOUT' },
  { id: 'pentest', label: 'PENTEST' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-lg);
  height: 56px;
  background: var(--color-bg);
  border-bottom: var(--border-red);
}

.navbar__left {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.navbar__name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  letter-spacing: 4px;
  color: var(--color-white);
  white-space: nowrap;
}

.live-indicator {
  font-family: var(--font-mono);
  font-size: 0.55rem;
  color: var(--color-red);
  letter-spacing: 3px;
  margin-left: 16px;
  animation: blink 1.4s step-start infinite;
}

.navbar__links {
  display: flex;
  gap: var(--spacing-md);
}

.navbar__link {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: var(--color-grey-light);
  text-decoration: none;
  text-transform: uppercase;
  transition: none;
  cursor: crosshair;
}

.navbar__link:hover {
  color: var(--color-red);
}

.navbar__menu-toggle {
  display: none;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--color-red);
  background: none;
  border: var(--border-red-sm);
  padding: 6px 12px;
  cursor: crosshair;
  transition: none;
}

.navbar__menu-toggle:hover {
  background: var(--color-red);
  color: var(--color-white);
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 var(--spacing-sm);
    flex-wrap: wrap;
    height: auto;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .navbar__name {
    font-size: 0.95rem;
    letter-spacing: 2px;
  }

  .navbar__menu-toggle {
    display: block;
  }

  .navbar__links {
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0;
    border-top: var(--border-thin);
    margin-top: 12px;
    padding-top: 8px;
  }

  .navbar__links--open {
    display: flex;
  }

  .navbar__link {
    padding: 10px 0;
    border-bottom: var(--border-thin);
  }
}
</style>
