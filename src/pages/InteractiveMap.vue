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
      :badge="t('map.badge')"
      :title="t('map.title')"
      :description="t('map.desc')"
    />
  </div>
</template>
