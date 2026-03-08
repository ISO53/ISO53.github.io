<template>
  <div class="red-slash" :class="{ 'has-label': label }">
    <span v-if="label" class="red-slash__label">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.red-slash {
  position: relative;
  width: 100%;
  height: 2px;
  background: var(--color-red);
  margin: var(--spacing-md) 0;
}

.red-slash__label {
  position: absolute;
  right: 0;
  top: -18px;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 3px;
  color: var(--color-red);
  text-transform: uppercase;
  white-space: nowrap;
}
</style>
