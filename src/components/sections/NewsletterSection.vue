<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
const email = ref('')
const isSubmitted = ref(false)

const handleSubmit = () => {
  if (email.value) {
    isSubmitted.value = true
    setTimeout(() => {
      email.value = ''
      isSubmitted.value = false
    }, 4000)
  }
}
</script>

<template>
  <section class="bg-background pt-16 sm:pt-24 pb-12 sm:pb-16 flex justify-center w-full transition-colors duration-300">
    <div class="max-w-[90%] w-full mx-auto relative">
      
      <!-- Newsletter Main Banner Card -->
      <div class="relative bg-[#C3AE92] text-white rounded-[32px] sm:rounded-[40px] px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 shadow-2xl flex flex-col md:flex-row items-center justify-between min-h-[360px] sm:min-h-[400px]">
        
        <!-- Background Village Playground Image Layer -->
        <div class="absolute inset-0 rounded-[32px] sm:rounded-[40px] overflow-hidden z-0 pointer-events-none">
          <div
            class="w-full h-full bg-cover bg-center bg-no-repeat"
            style="background-image: linear-gradient(to right, rgba(195, 174, 146, 0.92) 0%, rgba(195, 174, 146, 0.65) 50%, rgba(195, 174, 146, 0.20) 100%), url('/village-playground-bg.jpg');"
          ></div>
        </div>

        <!-- Left Side Content Area -->
        <div class="w-full md:w-[60%] lg:w-[55%] z-10 flex flex-col items-start space-y-6 sm:space-y-8">
          
          <!-- White Pill Badge -->
          <span class="inline-block bg-white text-zinc-900 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm select-none">
            {{ t('newsletter.badge') }}
          </span>

          <!-- Main Headline -->
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.18] tracking-tight max-w-lg">
            {{ t('newsletter.title') }}
          </h2>

          <!-- Form Area -->
          <div class="w-full max-w-lg">
            <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <input
                v-model="email"
                type="email"
                :placeholder="t('newsletter.placeholder')"
                class="w-full sm:flex-1 px-6 py-3.5 rounded-full bg-white text-zinc-900 placeholder:text-zinc-400 font-medium text-sm border-none focus:outline-none focus:ring-2 focus:ring-white/50 shadow-md transition-all"
                required
              />
              <button
                type="submit"
                class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-zinc-900 font-bold text-sm hover:bg-zinc-100 active:scale-95 transition-all duration-200 shadow-md cursor-pointer whitespace-nowrap"
              >
                {{ t('newsletter.btn') }}
              </button>
            </form>

            <!-- Success Alert -->
            <div v-else class="bg-white/95 backdrop-blur-md text-zinc-900 px-6 py-3.5 rounded-full font-bold text-sm shadow-md inline-flex items-center gap-2 animate-fadeIn">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{{ t('newsletter.success') }}</span>
            </div>
          </div>

        </div>

        <!-- Right Side Mango Tree Image (Preserved, roots landing on background ground) -->
        <div class="hidden md:flex absolute right-2 sm:right-6 lg:right-16 bottom-0 h-[120%] sm:h-[130%] lg:h-[140%] pointer-events-none select-none z-20 items-end justify-end">
          <img
            src="../../assets/image/mango-tree.webp"
            alt="Agdighulia Mango Tree"
            class="h-full w-auto object-contain object-bottom filter drop-shadow-2xl"
          />
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>