<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const applyTheme = (dark: boolean) => {
  isDark.value = dark
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleDarkMode = () => {
  const newDark = !isDark.value
  applyTheme(newDark)
  localStorage.setItem('theme', newDark ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    applyTheme(savedTheme === 'dark')
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark)
  }
})
</script>

<template>
  <button
    class="theme-toggle-btn"
    @click="toggleDarkMode"
    :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  >
    <!-- Sun Icon (shown in dark mode) -->
    <svg
      v-if="isDark"
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon sun-icon"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>

    <!-- Moon Icon (shown in light mode) -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon moon-icon"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  background: var(--color-soft);
  color: var(--color-ink);
  cursor: pointer;
  transition: all 180ms ease;
}

.theme-toggle-btn:hover {
  border-color: var(--color-brand);
  color: var(--color-brand);
  transform: scale(1.05);
}

.icon {
  transition: transform 200ms ease;
}

.theme-toggle-btn:hover .icon {
  transform: rotate(15deg);
}
</style>
