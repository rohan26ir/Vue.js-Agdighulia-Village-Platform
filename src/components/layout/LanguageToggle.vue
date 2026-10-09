<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'

const { locale, toggleLanguage } = useLanguage()
</script>

<template>
  <button
    class="lang-toggle-btn"
    @click="toggleLanguage"
    :title="locale === 'en' ? 'বাংলা ভাষায় পরিবর্তন করুন' : 'Switch to English'"
    :aria-label="locale === 'en' ? 'Switch to Bangla' : 'Switch to English'"
  >
    <span class="lang-badge" :class="{ 'is-active': locale === 'en' }">EN</span>
    <span class="lang-divider">/</span>
    <span class="lang-badge bn-text" :class="{ 'is-active': locale === 'bn' }">বাংলা</span>
  </button>
</template>

<style scoped>
.lang-toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  gap: 4px;
  padding: 0 12px;
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  background: var(--color-soft);
  color: var(--color-ink);
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 180ms ease;
  user-select: none;
}

.lang-toggle-btn:hover {
  border-color: var(--color-brand);
}

.lang-badge {
  color: var(--color-muted);
  transition: color 180ms ease, font-weight 180ms ease;
}

.lang-badge.is-active {
  color: var(--color-brand);
  font-weight: 700;
}

.bn-text {
  font-family: 'Hind Siliguri', 'Noto Serif Bengali', sans-serif;
  font-size: 13px;
}

.lang-divider {
  color: var(--color-border);
  font-weight: 400;
}
</style>
