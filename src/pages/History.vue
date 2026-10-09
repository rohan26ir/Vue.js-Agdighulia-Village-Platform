<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div class="page-section container section-space">
    <div class="section-heading">
      <p class="eyebrow eyebrow-accent">{{ t('history.badge') }}</p>
      <h2>{{ t('history.title') }}</h2>
      <p style="margin-top: 16px; color: var(--color-muted);">
        {{ t('history.desc') }}
      </p>
    </div>
  </div>
</template>