<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

const stats = computed(() => [
  {
    number: '5,000+',
    label: t('counter.stat1Label'),
    featured: false,
    icon: 'users',
  },
  {
    number: '120+',
    label: t('counter.stat2Label'),
    featured: true,
    icon: 'history',
  },
  {
    number: '15+',
    label: t('counter.stat3Label'),
    featured: false,
    icon: 'school',
  },
])
</script>

<template>
  <section class="bg-background text-foreground py-16 lg:py-24 flex justify-center w-full transition-colors duration-300">
    <div class="max-w-[90%] w-full mx-auto flex flex-col gap-8">
      
      <!-- Top Row: Left Image + Center Narrative & CTA + Right Image -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-16 lg:mb-20">
        
        <!-- Left Image Card -->
        <div class="w-full lg:w-[240px] 2xl:w-[450px] h-[240px] sm:h-[280px] lg:h-[300px] shrink-0 rounded-3xl overflow-hidden shadow-lg border border-border">
          <img
            src="/village-landscape.jpg"
            alt="Agdighulia Village Landscape"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <!-- Center Narrative Text & CTA Button -->
        <div class="flex-1 flex flex-col items-center justify-center text-center space-y-6 max-w-2xl px-2 sm:px-4 mx-auto">
          <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug sm:leading-tight tracking-tight text-foreground text-center">
            <span>{{ t('counter.heroText') }}</span>
          </h2>

          <RouterLink
            to="/about"
            class="inline-flex items-center gap-3 bg-card hover:bg-muted text-foreground border border-border px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all group font-semibold text-sm no-underline"
          >
            <span>{{ t('counter.readStory') }}</span>
            <span class="w-8 h-8 rounded-full bg-[#FF3D00] text-white flex items-center justify-center font-extrabold text-sm group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
              &rarr;
            </span>
          </RouterLink>
        </div>

        <!-- Right Image Card -->
        <div class="w-full lg:w-[240px] 2xl:w-[320px] h-[220px] sm:h-[260px] lg:h-[300px] shrink-0 rounded-3xl overflow-hidden shadow-lg border border-border hidden md:block">
          <img
            src="/village-people.jpg"
            alt="Agdighulia Community"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>

      <!-- Bottom Row: 3 Large Stat Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 ">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="rounded-3xl p-8 sm:p-10 min-h-[220px] sm:min-h-[260px] flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1"
          :class="[
            stat.featured
              ? 'bg-[#FF3D00] text-white shadow-xl shadow-[#FF3D00]/30 hover:shadow-2xl hover:shadow-[#FF3D00]/40'
              : 'bg-card text-card-foreground border border-border shadow-sm hover:shadow-md'
          ]"
        >
          <!-- Top Right Icon Badge -->
          <div
            class="absolute top-7 right-7 w-10 h-10 rounded-full flex items-center justify-center shadow-xs"
            :class="[
              stat.featured
                ? 'bg-white/20 backdrop-blur-md text-white'
                : 'bg-muted text-muted-foreground'
            ]"
          >
            <!-- Users Icon -->
            <svg v-if="stat.icon === 'users'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

            <!-- History Icon -->
            <svg v-else-if="stat.icon === 'history'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M12 7v5l4 2" />
            </svg>

            <!-- School Icon -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m4 6 8-4 8 4-8 4z" />
              <path d="m18 10 4 2v6" />
              <path d="M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
            </svg>
          </div>

          <!-- Number Stat -->
          <div class="mt-4 sm:mt-6">
            <h3
              class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2"
              :class="stat.featured ? 'text-white' : 'text-foreground'"
            >
              {{ stat.number }}
            </h3>
          </div>

          <!-- Label -->
          <div>
            <p
              class="text-xs sm:text-sm font-bold tracking-wider uppercase"
              :class="stat.featured ? 'text-white/90' : 'text-muted-foreground'"
            >
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>