<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import notFound from '@/assets/image/not-found.webp'

const route = useRoute()
const router = useRouter()
const { t } = useLanguage()

const goBack = () => {
  if (typeof window !== 'undefined' && window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <div class="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-black text-white p-6 sm:p-12 md:p-20">
    <!-- Fullscreen Background Image -->
    <img
      :src="notFound"
      alt="404 Background"
      class="absolute inset-0 w-full h-full object-cover object-center select-none"
    />

    <!-- Dark Gradient Overlay for optimal text readability on the left -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/95 via-black/15 to-black/40 md:to-black/30 backdrop-blur-[1px]"></div>

    <!-- Ambient Glow Effect on Left -->
    <div class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF3D00]/20 blur-[170px] rounded-full pointer-events-none"></div>

    <!-- Direct Left-Aligned Content Layout -->
    <div class="relative z-10 max-w-2xl w-full text-left flex flex-col items-start space-y-6 md:space-y-8">
      
      <!-- 404 Badge -->
      <div>
        <span class="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#FF3D00]/25 text-white border border-[#FF3D00]/60 shadow-lg backdrop-blur-md animate-pulse">
          <span class="w-2.5 h-2.5 rounded-full bg-[#FF3D00]"></span>
          {{ t('notFound.badge') }}
        </span>
      </div>

      <!-- Main Heading -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
        <span class="text-[#FF3D00]">{{ t('notFound.title') }}</span>
      </h1>

      <!-- Subtitle Description in Crisp White -->
      <p class="text-base sm:text-lg md:text-xl text-white/95 max-w-xl leading-relaxed font-medium drop-shadow-lg">
        {{ t('notFound.desc') }}
      </p>

      <!-- Path Indicator -->
      <div v-if="route.fullPath" class="px-5 py-2.5 rounded-2xl bg-black/50 border border-white/20 text-xs sm:text-sm font-mono text-white flex items-center gap-2.5 max-w-md overflow-hidden backdrop-blur-md shadow-inner">
        <span class="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></span>
        <span class="truncate">Path: <code class="text-white font-bold">{{ route.fullPath }}</code></span>
      </div>

      <!-- Left-Aligned Action Buttons -->
      <div class="flex flex-wrap items-center justify-start gap-5 pt-2 w-full sm:w-auto">
        <RouterLink
          to="/"
          class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF3D00] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#FF3D00]/40 hover:bg-[#E03600] hover:shadow-2xl hover:shadow-[#FF3D00]/60 transition-all transform hover:-translate-y-1 no-underline w-full sm:w-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>{{ t('notFound.backHome') }}</span>
        </RouterLink>

        <button
          type="button"
          @click="goBack"
          class="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/15 text-white border border-white/30 font-extrabold text-sm sm:text-base hover:bg-white/25 hover:border-white/40 backdrop-blur-md shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer w-full sm:w-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5"></path>
            <path d="m12 19-7-7 7-7"></path>
          </svg>
          <span>{{ t('notFound.goBack') }}</span>
        </button>
      </div>

    </div>
  </div>
</template>




