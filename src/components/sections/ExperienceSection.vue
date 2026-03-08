<template>
  <section id="experience" class="section">
    <div class="section-inner">
      <div class="section-number">04 —</div>
      <div class="section-label">// SERVICE RECORD</div>
      <h2 class="section-title">EXPERIENCE</h2>
      <RedSlash label="DOSSIER ENTRIES" />

      <div class="experience__timeline">
        <div class="experience__line"></div>

        <div v-for="(job, index) in experiences" :key="index" class="experience__entry">
          <div class="experience__dot"></div>
          <div class="experience__card">
            <div class="experience__card-header">
              <h3 class="experience__company">{{ job.company }}</h3>
              <div class="experience__date">{{ job.date }}</div>
            </div>
            <div class="experience__role">{{ job.role }}</div>
            <ul class="experience__desc">
              <li v-for="(point, pIndex) in job.description" :key="pIndex">
                <span class="experience__bullet">→ </span>{{ point }}
              </li>
            </ul>
            <div class="experience__type">[ {{ job.type }} ]</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import RedSlash from '../RedSlash.vue'

// Placeholder entries to be updated by the user later
const experiences = [
  {
    company: 'Kyrenia Military Hospital',
    date: 'NOV 2024 — NOV 2025',
    role: 'Artillery Lieutenant',
    type: 'MILITARY / IT SEC',
    description: [
      'Maintained and secured the hospital\'s core IT infrastructure, configuring rack-mounted servers, routers, and managed switches.',
      'Administered NAS and application servers with focus on access control and system hardening.',
      'Supported the Hospital Information Management System through operational troubleshooting and security review.',
      'Integrated endpoint devices while enforcing secure configuration standards and reducing attack surface.'
    ]
  },
  {
    company: 'Mobilvery',
    date: 'DEC 2023 — JUL 2024',
    role: 'Software System Architect',
    type: 'FULL-TIME',
    description: [
      'Architected and developed the Mobilvery web platform with a focus on secure API design and hardened backend logic.',
      'Led implementation of authentication, authorization, and input validation aligned with OWASP principles.',
      'Designed system architecture and database structures with secure data handling and least-privilege access models.',
      'Strengthened platform resilience against common web application vulnerabilities.'
    ]
  },
  {
    company: 'Deka Technology',
    date: 'AUG 2023 — SEP 2023',
    role: 'Backend Developer',
    type: 'FULL-TIME / CONTRACT',
    description: [
      'Developed a multithreaded DNS log analyzer using Java, RabbitMQ, and Elasticsearch.',
      'Processed and indexed 10,000+ log entries per minute for real-time DNS monitoring and basic anomaly detection.',
      'Implemented fault-tolerant persistence and state recovery mechanisms to maintain log integrity.',
      'Structured logs to enable easier identification of suspicious domains and unusual traffic patterns.'
    ]
  },
  {
    company: 'PIA (People in Action)',
    date: 'JUN 2022 — JUL 2022',
    role: 'Backend Developer Intern',
    type: 'INTERNSHIP',
    description: [
      'Completed a selective bootcamp-to-internship program, leading a small team during the bootcamp phase.',
      'Built and optimized microservice-based applications using Java Spring Boot, Hibernate, PostgreSQL, and MongoDB.',
      'Strengthened full-stack development skills by contributing to frontend features using HTML, CSS, and JavaScript.'
    ]
  }
]
</script>

<style scoped>
.experience__timeline {
  position: relative;
  margin-top: var(--spacing-lg);
  padding-left: 20px;
}

.experience__line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-red);
}

.experience__entry {
  position: relative;
  margin-bottom: var(--spacing-lg);
}

.experience__entry:last-child {
  margin-bottom: 0;
}

.experience__dot {
  position: absolute;
  left: -24px;
  /* -20px padding - 2px half width + 2px offset */
  top: 8px;
  width: 6px;
  height: 6px;
  background: var(--color-red);
}

.experience__card {
  position: relative;
  border: var(--border-thin);
  border-left: 4px solid var(--color-red);
  padding: var(--spacing-md);
  background: var(--color-surface);
}

.experience__card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: 4px;
}

.experience__company {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--color-white);
  letter-spacing: 1px;
}

.experience__date {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-red);
  letter-spacing: 2px;
}

.experience__role {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--color-white);
  margin-bottom: var(--spacing-sm);
  letter-spacing: 1px;
}

.experience__desc {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--color-grey-light);
  line-height: 1.6;
}

.experience__desc li {
  margin-bottom: 6px;
  display: flex;
}

.experience__bullet {
  color: var(--color-red);
  margin-right: 8px;
  font-weight: bold;
}

.experience__type {
  position: absolute;
  bottom: var(--spacing-sm);
  right: var(--spacing-sm);
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--color-red);
  letter-spacing: 2px;
}
</style>
