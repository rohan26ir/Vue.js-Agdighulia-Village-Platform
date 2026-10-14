<script setup lang="ts">
import Heading from '@/components/ui/Heading.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div class="page-section container section-space">
    <Heading
      as="h2"
      size="lg"
      :badge="t('gallery.badge')"
      :title="t('gallery.title')"
      :description="t('gallery.desc')"
    />
  </div>
</template>