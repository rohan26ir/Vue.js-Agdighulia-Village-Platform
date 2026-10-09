<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div class="page-section container section-space">
    <div class="section-heading">
      <p class="eyebrow eyebrow-accent">{{ t('gallery.badge') }}</p>
      <h2>{{ t('gallery.title') }}</h2>
      <p style="margin-top: 16px; color: var(--color-muted);">
        {{ t('gallery.desc') }}
      </p>
    </div>
  </div>
</template>