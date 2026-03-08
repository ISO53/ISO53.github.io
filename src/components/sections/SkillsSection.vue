<template>
  <section id="skills" class="section">
    <div class="section-inner">
      <div class="section-number">03 —</div>
      <div class="section-label">// TECHNICAL ARSENAL</div>
      <h2 class="section-title">SKILLS</h2>
      <RedSlash label="SYSTEM SCAN COMPLETE" />

      <div class="skills__clusters">
        <div v-for="cluster in skillClusters" :key="cluster.name" class="skills__cluster">
          <div class="skills__cluster-header">{{ cluster.name }}</div>
          <div class="skills__tags">
            <span v-for="skill in cluster.skills" :key="skill.name" class="skills__tag"
              :class="`skills__tag--${skill.level}`">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import RedSlash from '../RedSlash.vue'

const skillClusters = [
  {
    name: 'OFFENSIVE SECURITY & TOOLS',
    skills: [
      { name: 'Metasploit', level: 'expert' },
      { name: 'Nmap', level: 'expert' },
      { name: 'Burp Suite / ZAP', level: 'proficient' },
      { name: 'Gobuster / Dirsearch', level: 'expert' },
      { name: 'Ffuf / Sublist3r', level: 'proficient' },
      { name: 'Hashcat / John The Ripper', level: 'proficient' },
      { name: 'Hydra / SQLmap', level: 'proficient' },
      { name: 'LinPEAS / LinEnum', level: 'expert' },
      { name: 'XSStrike / XSScon', level: 'proficient' },
      { name: 'Wireshark / TCPDump', level: 'proficient' },
    ],
  },
  {
    name: 'WEB APPLICATION SECURITY',
    skills: [
      { name: 'OWASP Top 10', level: 'expert' },
      { name: 'SQL / NoSQL Injection', level: 'expert' },
      { name: 'XSS (Reflected/DOM)', level: 'expert' },
      { name: 'CSRF / CORS / SOP', level: 'proficient' },
      { name: 'SSTI / SSRF', level: 'proficient' },
      { name: 'Insecure Deserialization', level: 'proficient' },
      { name: 'Path Traversal', level: 'expert' },
      { name: 'LDAP / ORM Injection', level: 'proficient' },
    ],
  },
  {
    name: 'BACKEND ARCHITECTURE',
    skills: [
      { name: 'Java / Spring Boot', level: 'expert' },
      { name: 'Spring Security', level: 'expert' },
      { name: 'Hibernate / JPA', level: 'expert' },
      { name: 'Microservices', level: 'proficient' },
      { name: 'Multi-threading', level: 'expert' },
      { name: 'API Security / JWT', level: 'expert' },
      { name: 'RabbitMQ', level: 'expert' },
    ],
  },
  {
    name: 'DATA & MIDDLEWARE',
    skills: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'MongoDB', level: 'proficient' },
      { name: 'Redis', level: 'proficient' },
      { name: 'Elasticsearch', level: 'proficient' },
      { name: 'OracleSQL', level: 'familiar' },
      { name: 'Socket Programming', level: 'proficient' },
    ],
  },
  {
    name: 'INFRASTRUCTURE & NETWORKING',
    skills: [
      { name: 'Linux / Windows CLI', level: 'expert' },
      { name: 'TCP/IP / UDP / DNS', level: 'expert' },
      { name: 'Intranet Systems', level: 'expert' },
      { name: 'Rack Servers / Switches', level: 'proficient' },
      { name: 'NAS Storage', level: 'proficient' },
      { name: 'Packet Flow Analysis', level: 'proficient' },
      { name: 'Netcat / LFTP', level: 'proficient' },
    ],
  },
  {
    name: 'CORE TOOLS & LANGUAGES',
    skills: [
      { name: 'Docker / Git', level: 'expert' },
      { name: 'Maven / npm', level: 'expert' },
      { name: 'Vue.js / Angular', level: 'proficient' },
      { name: 'Electron.js / JavaFX', level: 'proficient' },
      { name: 'Vercel / AWS', level: 'proficient' },
      { name: 'Python / C', level: 'proficient' },
      { name: 'JavaScript / HTML / CSS', level: 'proficient' },
    ],
  },
]
</script>

<style scoped>
.skills__clusters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.skills__cluster {
  border: var(--border-thin);
  padding: var(--spacing-sm);
  background: var(--color-surface);
}

.skills__cluster-header {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 4px;
  color: var(--color-red);
  text-transform: uppercase;
  margin-bottom: var(--spacing-sm);
  padding-bottom: var(--spacing-xs);
  border-bottom: 1px solid var(--color-border);
}

.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.skills__tag {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 1px;
  padding: 6px 14px;
  text-transform: uppercase;
  cursor: crosshair;
  transition: none;
}

/* expert: red-dark background */
.skills__tag--expert {
  background: var(--color-red-dark);
  color: var(--color-white);
  border: 1px solid var(--color-red-dark);
}

.skills__tag--expert:hover {
  border-color: var(--color-red);
  background: var(--color-red);
}

/* proficient: mid border */
.skills__tag--proficient {
  background: transparent;
  color: var(--color-white);
  border: var(--border-mid);
}

.skills__tag--proficient:hover {
  border-color: var(--color-red);
  color: var(--color-white);
}

/* familiar: dark border, grey text */
.skills__tag--familiar {
  background: transparent;
  color: var(--color-grey-mid);
  border: 1px solid var(--color-grey-dark);
}

.skills__tag--familiar:hover {
  border-color: var(--color-red);
  color: var(--color-white);
}
</style>
