<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <!-- 
    BACKGROUND IMAGE LOCATION:
    To change the background image later, replace '/hero-bg.jpg' below in the style attribute 
    or replace the 'public/hero-bg.jpg' file in your project folder!
  -->
  <section class="bg-background text-white  pb-6 flex justify-center w-full">
    <div class="max-w-[90%] w-full mx-auto">
      <div
        class="relative h-[55vh] lg:h-[80lvh] flex items-center justify-center text-center px-6 py-16 rounded-b-[16px] bg-cover bg-center bg-no-repeat overflow-hidden shadow-2xl"
        style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.70)), url('/hero-bg.jpg');"
      >
        <!-- Hero Center Content -->
        <div class="max-w-4xl w-full flex flex-col items-center gap-5 justify-center text-center mx-auto z-10">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold  tracking-tight leading-[1.15] mb-5 text-center mx-auto ">
            <span class="text-white drop-shadow-lg">
              {{ t('hero.title1') }}<br />
              {{ t('hero.title2') }}
            </span>
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-white font-medium max-w-2xl leading-relaxed mb-9 text-center mx-auto drop-shadow-md">
            {{ t('hero.desc') }}
          </p>

          <!-- Red Accent Center Pill Button -->
          <div class="flex items-center justify-center w-full mx-auto">
            <RouterLink
              to="/map"
              class="inline-flex items-center gap-3 bg-[#FF3D00] text-white pl-7 pr-3.5 py-3.5 rounded-full text-base font-bold no-underline shadow-xl shadow-[#FF3D00]/40 hover:bg-[#E03600] hover:-translate-y-0.5 hover:scale-[1.03] transition-all duration-200"
            >
              <span>{{ t('hero.btnExplore') }}</span>
              <span class="inline-grid w-9 h-9 place-items-center bg-white text-[#FF3D00] rounded-full text-lg font-extrabold shadow-sm" aria-hidden="true">&nearr;</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>