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
      :badge="t('history.badge')"
      :title="t('history.title')"
      :description="t('history.desc')"
    />
  </div>
</template>