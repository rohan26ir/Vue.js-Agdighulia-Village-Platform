<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { watch } from 'vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

const route = useRoute()

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
  <div class="site-shell relative">
    <Navbar />

    <main id="main-content" class=" ">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
