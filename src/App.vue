<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

const route = useRoute()

const layoutComponent = computed(() => {
  if (route.meta?.layout === 'blank' || route.meta?.layout === 'empty' || route.meta?.hideNavbarFooter) {
    return BlankLayout
  }
  return DefaultLayout
})

const DEFAULT_DESCRIPTION =
  'A digital home for the people, culture, news, and shared future of Agdighulia Village.'
const DEFAULT_KEYWORDS =
  'Agdighulia, Agdighulia Village, community, rural heritage, village culture, local news, events'

watch(
  () => route.meta,
  (meta) => {
    // Dynamic Title
    const title = meta?.title
    document.title = typeof title === 'string' ? `${title} | Agdighulia` : 'Agdighulia Village'

    // Dynamic Meta Description
    const description = typeof meta?.description === 'string' ? meta.description : DEFAULT_DESCRIPTION
    let descMeta = document.querySelector('meta[name="description"]')
    if (!descMeta) {
      descMeta = document.createElement('meta')
      descMeta.setAttribute('name', 'description')
      document.head.appendChild(descMeta)
    }
    descMeta.setAttribute('content', description)

    // Dynamic Meta Keywords
    const keywords = typeof meta?.keywords === 'string' ? meta.keywords : DEFAULT_KEYWORDS
    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta')
      keywordsMeta.setAttribute('name', 'keywords')
      document.head.appendChild(keywordsMeta)
    }
    keywordsMeta.setAttribute('content', keywords)
  },
  { immediate: true, deep: true },
)
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>
