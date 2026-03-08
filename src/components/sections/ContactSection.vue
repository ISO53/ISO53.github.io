<template>
  <section id="contact" class="section">
    <div class="section-inner">
      <div class="section-number">06 —</div>
      <div class="section-label">// COMM LINK</div>
      <h2 class="section-title">CONTACT.</h2>
      <RedSlash />

      <div class="contact__links">
        <a v-for="link in contactLinks" :key="link.platform" :href="link.url" target="_blank" rel="noopener noreferrer"
          class="contact__link">
          <span class="contact__platform">{{ link.platform }}</span>
          <span class="contact__arrow">→</span>
          <span class="contact__handle">{{ link.handle }}</span>
        </a>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__left">© {{ new Date().getFullYear() }} YUSUF İHSAN ŞİMŞEK</div>
      <div class="footer__right">ALL RIGHTS RESERVED</div>
    </footer>
  </section>
</template>

<script setup>
import RedSlash from '../RedSlash.vue'

const contactLinks = [
  { platform: 'GITHUB', handle: 'iso53', url: 'https://github.com/iso53' },
  { platform: 'LINKEDIN', handle: 'yusuf-ihsan-simsek', url: 'https://www.linkedin.com/in/yusuf-ihsan-simsek/' },
  { platform: 'EMAIL', handle: 'ihsansimsek5335@gmail.com', url: 'mailto:ihsansimsek5335@gmail.com' },
  { platform: 'STACKOVERFLOW', handle: 'iso53', url: 'https://stackoverflow.com/users/14803523/iso53' },
  { platform: 'LEETCODE', handle: 'ISO53', url: 'https://leetcode.com/ISO53/' },
  { platform: 'MONKEYTYPE', handle: 'predator5335', url: 'https://monkeytype.com/profile/predator5335' },
]
</script>

<style scoped>
.contact__links {
  display: flex;
  flex-direction: column;
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.contact__link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  border-bottom: var(--border-thin);
  text-decoration: none;
  border-left: 0px solid transparent;
  transition: none;
  /* brutalist snap */
  cursor: crosshair;
}

.contact__link:hover {
  border-left: 4px solid var(--color-red);
  padding-left: 16px;
  background: var(--color-surface);
}

.contact__platform {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--color-white);
  width: 350px;
  flex-shrink: 0;
}

.contact__link:hover .contact__platform {
  color: var(--color-red);
}

.contact__arrow {
  font-family: var(--font-mono);
  color: var(--color-red-dark);
  margin: 0 var(--spacing-md);
  font-size: 1.2rem;
}

.contact__link:hover .contact__arrow {
  color: var(--color-red);
}

.contact__handle {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: var(--color-grey-mid);
  transition: none;
  word-break: break-all;
}

.contact__link:hover .contact__handle {
  color: var(--color-white);
}

/* Footer */
.footer {
  width: 100%;
  border-top: var(--border-red);
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-surface);
  margin-top: var(--spacing-xl);
}

.footer__left,
.footer__right {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 4px;
  color: var(--color-grey-mid);
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .contact__link {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0;
  }

  .contact__link:hover {
    padding-left: 12px;
  }

  .contact__arrow {
    display: none;
  }

  .contact__platform {
    width: 100%;
    margin-bottom: 4px;
  }

  .footer {
    flex-direction: column;
    gap: 16px;
    text-align: center;
    padding: 24px 16px;
  }
}
</style>
