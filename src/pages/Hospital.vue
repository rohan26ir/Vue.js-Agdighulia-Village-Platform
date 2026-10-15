<script setup lang="ts">
import { computed } from 'vue'
import Heading from '@/components/ui/Heading.vue'
import { useLanguage } from '@/composables/useLanguage'
import { HEALTHCARE_ITEMS } from '@/data/healthcare'

const { locale } = useLanguage()

const hospital = computed(() => HEALTHCARE_ITEMS.find((item) => item.category === 'Hospital') || HEALTHCARE_ITEMS[0])
const pharmacies = computed(() => HEALTHCARE_ITEMS.filter((item) => item.category === 'Pharmacy'))
</script>

<template>
  <div class="hospital-page min-h-screen bg-background text-foreground py-12 md:py-20">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Page Header -->
      <div class="py-6 sm:py-10 mb-6 sm:mb-10">
        <Heading
          as="h1"
          size="xl"
          badgeIcon="🏥"
          :badge="locale === 'bn' ? 'চিকিৎসা ও স্বাস্থ্যসেবা' : 'Healthcare & Clinics'"
          :description="
            locale === 'bn'
              ? 'আগদিঘুলিয়ার প্রতিটি মানুষের স্বাস্থ্য সুরক্ষা ও জরুরি চিকিৎসার প্রয়োজনে সেবা প্রদানকারী হাসপাতাল, ক্লিনিক ও ফার্মেসীসমূহ।'
              : 'Essential healthcare centers, medical clinics, and 24/7 pharmacies serving the families and people of Agdighulia.'
          "
        >
          <template #title>
            <template v-if="locale === 'bn'">
              সুস্থ ও সুন্দর জীবনের জন্য
              <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
                আস্থার
              </span>
              চিকিৎসা
              <span class="text-[#FF3D00] font-extrabold">সেবা।</span>
            </template>
            <template v-else>
              Caring for the health and
              <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
                wellbeing
              </span>
              of every
              <span class="text-[#FF3D00] font-extrabold">villager.</span>
            </template>
          </template>
        </Heading>
      </div>
      

      <!-- Healthcare Grid (1 Full Width Hospital + 2 Pharmacies in 2nd row) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        
        <!-- Row 1: Full-Width Hospital Card -->
        <div
          v-if="hospital"
          class="md:col-span-2 group relative bg-card border border-border/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row"
        >
          <!-- Left Cover Image (Desktop) with Floating Badges -->
          <div class="relative w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[280px] sm:min-h-[340px] bg-muted shrink-0 select-none">
            <div class="w-full h-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
              <img
                :src="hospital.image"
                :alt="hospital.nameEn"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <!-- Bottom-Right: Hospital Type Pill -->
            <div class="absolute bottom-3.5 right-4 bg-zinc-900/90 dark:bg-zinc-800/95 backdrop-blur-xs text-white text-xs font-bold px-3.5 py-1.5 rounded-md shadow-md z-10 flex items-center gap-1 border border-white/20 dark:border-zinc-700">
              <span>{{ locale === 'bn' ? hospital.typeBn : hospital.typeEn }}</span>
            </div>

            <!-- Overlapping Red Cross Shield Crest -->
            <div class="absolute -bottom-7 lg:bottom-4 left-6 w-14 h-14 bg-white dark:bg-zinc-800 rounded-xl p-1.5 shadow-xl border-2 border-white dark:border-zinc-700 flex items-center justify-center z-20">
              <div class="w-full h-full rounded-lg bg-red-600 flex items-center justify-center text-white shadow-xs p-1">
                <svg viewBox="0 0 24 24" class="w-8 h-8 fill-white" stroke="none">
                  <path d="M19 10.5h-5.5V5a1.5 1.5 0 0 0-3 0v5.5H5a1.5 1.5 0 0 0 0 3h5.5V19a1.5 1.5 0 0 0 3 0v-5.5H19a1.5 1.5 0 0 0 0-3z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Right Content Body (Desktop) -->
          <div class="p-6 pt-10 sm:p-8 lg:p-10 flex-1 flex flex-col justify-center">
            
            <!-- Hospital Title -->
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground py-2 leading-tight">
              {{ locale === 'bn' ? hospital.nameBn : hospital.nameEn }}
            </h2>

            <!-- Location Address -->
            <p class="pb-1 text-sm text-muted-foreground flex items-center gap-1.5 mb-3">
              <svg class="w-4 h-4 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span class="truncate">{{ locale === 'bn' ? hospital.addressBn : hospital.addressEn }}</span>
            </p>

            <!-- Services String -->
            <p class="pb-4 text-xs sm:text-sm text-muted-foreground/80 font-medium mb-5">
              {{ locale === 'bn' ? hospital.servicesBn : hospital.servicesEn }}
            </p>

            <!-- Checkmark Facilities List (Multi-column) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2.5 gap-x-4 mb-6 text-sm font-medium">
              <div
                v-for="(facility, fIdx) in (locale === 'bn' ? hospital.facilitiesBn : hospital.facilitiesEn)"
                :key="fIdx"
                class="flex items-center gap-2 text-foreground/85 dark:text-zinc-300"
              >
                <svg class="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span class="truncate">{{ facility }}</span>
              </div>
            </div>

            <!-- Right Bottom Phone Call Button on Hover -->
            <a
              :href="`tel:${hospital.phone}`"
              :title="hospital.phone"
              :aria-label="hospital.phone"
              class="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 z-20 cursor-pointer"
            >
              <svg class="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>

          </div>
        </div>

        <!-- Row 2: 2 Pharmacy Cards Side-by-Side -->
        <div
          v-for="(pharmacy, pIdx) in pharmacies"
          :key="pharmacy.id"
          class="group relative bg-card border border-border/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <!-- Top Cover Image Area with Floating Badges -->
          <div class="relative w-full h-60 sm:h-72 bg-muted shrink-0 select-none">
            <!-- Image with its own overflow-hidden -->
            <div class="w-full h-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
              <img
                :src="pharmacy.image"
                :alt="pharmacy.nameEn"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <!-- Bottom-Right: Pharmacy Type Pill -->
            <div class="absolute bottom-3.5 right-4 bg-zinc-900/90 dark:bg-zinc-800/95 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md z-10 flex items-center gap-1 border border-white/20 dark:border-zinc-700">
              <span>{{ locale === 'bn' ? pharmacy.typeBn : pharmacy.typeEn }}</span>
            </div>

            <!-- Bottom-Left: Overlapping Logo Crest (z-20 & fully visible) -->
            <div class="absolute -bottom-7 left-6 w-14 h-14 bg-white dark:bg-zinc-800 rounded-xl p-1.5 shadow-xl border-2 border-white dark:border-zinc-700 flex items-center justify-center z-20">
              <!-- Crest for Pharmacy 1: Green Pharmacy Cross -->
              <div v-if="pIdx === 0" class="w-full h-full rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs p-1">
                <svg viewBox="0 0 24 24" class="w-8 h-8 fill-white" stroke="none">
                  <path d="M19 10.5h-5.5V5a1.5 1.5 0 0 0-3 0v5.5H5a1.5 1.5 0 0 0 0 3h5.5V19a1.5 1.5 0 0 0 3 0v-5.5H19a1.5 1.5 0 0 0 0-3z"/>
                </svg>
              </div>

              <!-- Crest for Pharmacy 2: Sky Blue Pharmacy Dispensary Emblem -->
              <div v-else class="w-full h-full rounded-lg bg-sky-600 flex items-center justify-center text-white shadow-xs p-1">
                <svg viewBox="0 0 24 24" class="w-7 h-7 fill-white" stroke="none">
                  <path d="M4.5 10.5C3.67 10.5 3 11.17 3 12s.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-15zM12 3a1.5 1.5 0 0 0-1.5 1.5V9h3V4.5A1.5 1.5 0 0 0 12 3zm0 12v4.5a1.5 1.5 0 0 0 3 0V15h-3z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-6 pt-10 sm:p-7 sm:pt-10 flex flex-col flex-1">
            
            <!-- Title -->
            <h2 class="text-xl sm:text-2xl font-bold text-foreground py-3 leading-tight">
              {{ locale === 'bn' ? pharmacy.nameBn : pharmacy.nameEn }}
            </h2>

            <!-- Address with Location Pin -->
            <p class="pb-1 text-sm text-muted-foreground flex items-center gap-1.5 mb-3">
              <svg class="w-4 h-4 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span class="truncate">{{ locale === 'bn' ? pharmacy.addressBn : pharmacy.addressEn }}</span>
            </p>

            <!-- Services String -->
            <p class="pb-4 text-xs sm:text-sm text-muted-foreground/80 font-medium mb-5 truncate">
              {{ locale === 'bn' ? pharmacy.servicesBn : pharmacy.servicesEn }}
            </p>

            <!-- Checkmark Facilities List (2 Columns) -->
            <div class="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-7 text-sm font-medium">
              <div
                v-for="(facility, fIdx) in (locale === 'bn' ? pharmacy.facilitiesBn : pharmacy.facilitiesEn)"
                :key="fIdx"
                class="flex items-center gap-2 text-foreground/85 dark:text-zinc-300"
              >
                <svg class="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span class="truncate">{{ facility }}</span>
              </div>
            </div>

            <!-- Right Bottom Phone Call Button on Hover -->
            <a
              :href="`tel:${pharmacy.phone}`"
              :title="pharmacy.phone"
              :aria-label="pharmacy.phone"
              class="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 z-20 cursor-pointer"
            >
              <svg class="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>
