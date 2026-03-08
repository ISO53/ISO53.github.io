<template>
  <section id="about" class="section">
    <div class="section-inner">
      <div class="section-number">01 —</div>
      <div class="section-label">// PERSONAL FILE</div>
      <h2 class="section-title">ABOUT ME</h2>
      <RedSlash label="CLASSIFICATION: AUTHORIZED" />

      <div class="about__grid">
        <!-- Left: Abstract Tech Radar -->
        <div class="about__abstract" ref="photoRef" aria-label="Abstract radar graphic">
          <div class="abstract-circle"></div>
          <div class="abstract-circle ac-2"></div>
          <div class="abstract-line"></div>
          <div class="abstract-scan"></div>
          <div class="about__photo-label">YUSUF İHSAN ŞİMŞEK</div>
        </div>

        <!-- Right: Bio -->
        <div class="about__bio-col">
          <div class="about__watermark" aria-hidden="true">AUTHORIZED</div>
          <p class="about__bio" ref="bioRef">
            Hello. I'm Yusuf İhsan Şimşek — Computer Engineer, Penetration Tester, and Backend Developer based in
            İstanbul, Turkey.
            I have a genuine passion for building and breaking systems. I thrive on independent, challenging work and
            deliver exceptional results.
            I adapt rapidly to new technologies and go deep fast. Outside of work: basketball and photography.
          </p>
          <div class="about__tags" ref="tagsRef">
            <span class="about__tag">#BASKETBALL</span>
            <span class="about__tag">#PHOTOGRAPHY</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import RedSlash from '../RedSlash.vue'

const photoRef = ref(null)
const bioRef = ref(null)
const tagsRef = ref(null)
</script>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 3fr 5fr;
  gap: var(--spacing-lg);
  align-items: start;
}

/* Abstract Radar */
.about__abstract {
  border: var(--border-red);
  aspect-ratio: 3/4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  background: var(--color-surface);
  position: relative;
  overflow: hidden;
}

.abstract-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  aspect-ratio: 1/1;
  border: 1px dashed var(--color-red-dark);
  border-radius: 50%;
  opacity: 0.5;
  animation: spin 20s linear infinite;
}

.abstract-circle.ac-2 {
  width: 30%;
  border: 1px solid var(--color-red);
  animation: spin-reverse 10s linear infinite;
}

.abstract-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: var(--color-red-dark);
  opacity: 0.3;
}

.abstract-scan {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, var(--color-red-dim), transparent);
  height: 20%;
  animation: scan 4s ease-in-out infinite;
}

@keyframes spin {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes spin-reverse {
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes scan {
  0% {
    top: -20%;
  }

  50% {
    top: 100%;
  }

  100% {
    top: -20%;
  }
}

.about__photo-label {
  position: absolute;
  bottom: 10px;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 4px;
  color: var(--color-grey-mid);
  text-transform: uppercase;
  text-align: center;
  padding: 0 var(--spacing-sm);
}

/* Bio column */
.about__bio-col {
  position: relative;
  padding-top: var(--spacing-sm);
}

.about__watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-30deg);
  font-family: var(--font-display);
  font-size: clamp(4rem, 10vw, 9rem);
  color: var(--color-red);
  opacity: 0.03;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  z-index: 0;
}

.about__bio {
  font-family: var(--font-mono);
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--color-grey-light);
  position: relative;
  z-index: 1;
}

.about__tags {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.about__tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 2px;
  color: var(--color-grey-mid);
  border: 1px solid var(--color-border-mid);
  padding: 4px 12px;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
  }

  .about__abstract {
    aspect-ratio: 1/1;
    max-width: 280px;
    margin: 0 auto;
  }
}
</style>
