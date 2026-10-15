<script setup lang="ts">
import { computed } from 'vue'
import Heading from '@/components/ui/Heading.vue'
import { useLanguage } from '@/composables/useLanguage'
import { MOSQUE_ITEMS, DAILY_PRAYER_TIMES } from '@/data/mosques'

const { locale } = useLanguage()

const centralMosque = computed(
  () => MOSQUE_ITEMS.find((item) => item.featured) || MOSQUE_ITEMS[0],
)
const neighborhoodMosques = computed(() =>
  MOSQUE_ITEMS.filter((item) => !item.featured),
)
</script>

<template>
  <div class="mosque-page min-h-screen bg-background text-foreground py-12 md:py-20">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Page Header -->
      <div class="py-6 sm:py-10 mb-6 sm:mb-10">
        <Heading
          as="h1"
          size="xl"
          badgeIcon="🕌"
          :badge="locale === 'bn' ? 'মসজিদ ও ইসলামিক ঐতিহ্য' : 'Mosques & Heritage'"
          :description="
            locale === 'bn'
              ? 'আগদিঘুলিয়ার প্রতিটি পাড়ায় অবস্থিত জামে মসজিদসমূহ, জামাতের সময়সূচি ও ধর্মীয় সমাজকল্যাণ কার্যক্রম।'
              : 'Sacred community mosques, daily prayer timings, and spiritual landmarks across Agdighulia.'
          "
        >
          <template #title>
            <template v-if="locale === 'bn'">
              ঈমান, শান্তি ও ঐক্যের
              <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
                পবিত্র
              </span>
              আল্লাহর
              <span class="text-[#FF3D00] font-extrabold">ঘর।</span>
            </template>
            <template v-else>
              Sacred sanctuaries of
              <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
                faith
              </span>
              and community
              <span class="text-[#FF3D00] font-extrabold">peace.</span>
            </template>
          </template>
        </Heading>
      </div>  

      <!-- Daily Prayer Times Card / Schedule Bar -->
      <div class="mb-12 bg-card border border-border/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xs">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-border/60 gap-2">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-emerald-600/10 text-emerald-600 flex items-center justify-center text-lg">
              ⏱️
            </div>
            <div>
              <h2 class="text-base sm:text-lg font-bold text-foreground leading-tight">
                {{ locale === 'bn' ? 'দৈনিক নামাজের সময়সূচি (জামাত)' : 'Daily Prayer Times (Jamaat)' }}
              </h2>
              <p class="text-xs text-muted-foreground">
                {{ locale === 'bn' ? 'আগদিঘুলিয়া কেন্দ্রীয় জামে মসজিদ অনুযায়ী' : 'According to Agdighulia Central Jame Mosque' }}
              </p>
            </div>
          </div>
          <div class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 self-start sm:self-auto">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{{ locale === 'bn' ? 'নিয়মিত জামাত অনুষ্ঠিত হয়' : 'Regular Daily Jamaat' }}</span>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div
            v-for="(prayer, pIdx) in DAILY_PRAYER_TIMES"
            :key="pIdx"
            class="p-3 sm:p-3.5 rounded-xl bg-muted/50 border border-border/50 hover:border-emerald-500/40 transition-colors flex flex-col items-center text-center"
          >
            <span class="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
              {{ locale === 'bn' ? prayer.nameBn : prayer.nameEn }}
            </span>
            <span class="text-base sm:text-lg font-black text-foreground">
              {{ prayer.iqamah }}
            </span>
            <span class="text-[10px] text-muted-foreground mt-0.5">
              {{ locale === 'bn' ? 'আজান: ' + prayer.azan : 'Azan: ' + prayer.azan }}
            </span>
          </div>
        </div>
      </div>

      <!-- Mosque Grid (Row 1: Full-Width Central Mosque + Row 2: 2 Neighborhood Mosques) -->
      <div class=" pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        
        <!-- Row 1: Full-Width Central Jame Mosque Card -->
        <div
          v-if="centralMosque"
          class="md:col-span-2 group relative bg-card border border-border/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row"
        >
          <!-- Left Cover Image (Desktop) with Floating Badges -->
          <div class="relative w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[280px] sm:min-h-[350px] bg-muted shrink-0 select-none">
            <div class="w-full h-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
              <img
                :src="centralMosque.image"
                :alt="centralMosque.nameEn"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <!-- Bottom-Right: Mosque Type Pill -->
            <div class="absolute bottom-3.5 right-4 bg-zinc-900/90 dark:bg-zinc-800/95 backdrop-blur-xs text-white text-xs font-bold px-3.5 py-1.5 rounded-md shadow-md z-10 flex items-center gap-1.5 border border-white/20 dark:border-zinc-700">
              <span class="text-emerald-400">🕌</span>
              <span>{{ locale === 'bn' ? centralMosque.typeBn : centralMosque.typeEn }}</span>
            </div>

            <!-- Overlapping Islamic Crescent / Dome Crest -->
            <div class="absolute -bottom-7 lg:bottom-4 left-6 w-14 h-14 bg-white dark:bg-zinc-800 rounded-xl p-1.5 shadow-xl border-2 border-white dark:border-zinc-700 flex items-center justify-center z-20">
              <div class="w-full h-full rounded-lg bg-emerald-700 flex items-center justify-center text-white shadow-xs p-1">
                <svg viewBox="0 0 24 24" class="w-8 h-8 fill-amber-300 stroke-none">
                  <path d="M12 2a10 10 0 1 0 10 10c0 .4-.03.8-.08 1.18a8.5 8.5 0 1 1-11.1-11.1C11.2 2.03 11.6 2 12 2z"/>
                  <polygon points="17 4 18.2 6.5 21 6.8 19 8.7 19.5 11.5 17 10.1 14.5 11.5 15 8.7 13 6.8 15.8 6.5" fill="#fef08a"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Right Content Body (Desktop) -->
          <div class="p-6 pt-10 sm:p-8 lg:p-10 flex-1 flex flex-col justify-center">
            
            <!-- Mosque Title -->
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground py-2 leading-tight">
              {{ locale === 'bn' ? centralMosque.nameBn : centralMosque.nameEn }}
            </h2>

            <!-- Location Address -->
            <p class="pb-1 text-sm text-muted-foreground flex items-center gap-1.5 mb-2">
              <svg class="w-4 h-4 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span class="truncate">{{ locale === 'bn' ? centralMosque.addressBn : centralMosque.addressEn }}</span>
            </p>

            <!-- Capacity & Architecture -->
            <p class="pb-2 text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
              {{ locale === 'bn' ? centralMosque.capacityBn : centralMosque.capacityEn }}
            </p>

            <!-- Imam & Khatib -->
            <p class="pb-3 text-xs sm:text-sm text-muted-foreground/90 font-medium mb-4">
              {{ locale === 'bn' ? centralMosque.imamBn : centralMosque.imamEn }}
            </p>

            <!-- Checkmark Facilities List (Multi-column) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2.5 gap-x-4 mb-6 text-sm font-medium">
              <div
                v-for="(facility, fIdx) in (locale === 'bn' ? centralMosque.facilitiesBn : centralMosque.facilitiesEn)"
                :key="fIdx"
                class="flex items-center gap-2 text-foreground/85 dark:text-zinc-300"
              >
                <svg class="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span class="truncate">{{ facility }}</span>
              </div>
            </div>

            <!-- Right Bottom Phone Call / Contact Button on Hover -->
            <a
              :href="`tel:${centralMosque.phone}`"
              :title="centralMosque.phone"
              :aria-label="centralMosque.phone"
              class="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 z-20 cursor-pointer"
            >
              <svg class="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>

          </div>
        </div>

        <!-- Row 2: 2 Neighborhood Mosque Cards Side-by-Side -->
        <div
          v-for="(mosque, mIdx) in neighborhoodMosques"
          :key="mosque.id"
          class="group relative bg-card border border-border/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <!-- Top Cover Image Area with Floating Badges -->
          <div class="relative w-full h-60 sm:h-72 bg-muted shrink-0 select-none">
            <div class="w-full h-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
              <img
                :src="mosque.image"
                :alt="mosque.nameEn"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <!-- Bottom-Right: Mosque Type Pill -->
            <div class="absolute bottom-3.5 right-4 bg-zinc-900/90 dark:bg-zinc-800/95 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md z-10 flex items-center gap-1.5 border border-white/20 dark:border-zinc-700">
              <span class="text-emerald-400">🕌</span>
              <span>{{ locale === 'bn' ? mosque.typeBn : mosque.typeEn }}</span>
            </div>

            <!-- Bottom-Left: Overlapping Logo Crest (z-20 & fully visible) -->
            <div class="absolute -bottom-7 left-6 w-14 h-14 bg-white dark:bg-zinc-800 rounded-xl p-1.5 shadow-xl border-2 border-white dark:border-zinc-700 flex items-center justify-center z-20">
              <!-- Crest 1: Green Islamic Star & Crescent for Uttarpara -->
              <div v-if="mIdx === 0" class="w-full h-full rounded-lg bg-teal-700 flex items-center justify-center text-white shadow-xs p-1">
                <svg viewBox="0 0 24 24" class="w-7 h-7 fill-amber-300 stroke-none">
                  <path d="M12 2a10 10 0 1 0 10 10c0 .4-.03.8-.08 1.18a8.5 8.5 0 1 1-11.1-11.1C11.2 2.03 11.6 2 12 2z"/>
                  <polygon points="17 4 18.2 6.5 21 6.8 19 8.7 19.5 11.5 17 10.1 14.5 11.5 15 8.7 13 6.8 15.8 6.5" fill="#fef08a"/>
                </svg>
              </div>

              <!-- Crest 2: Emerald Mosque Minaret Dome for Dakshinpara -->
              <div v-else-if="mIdx === 1" class="w-full h-full rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs p-1">
                <svg viewBox="0 0 24 24" class="w-7 h-7 fill-white stroke-none">
                  <path d="M12 2L10 6h4l-2-4zm-4 5h8v2H8V7zm-1 3h10l1 12H6l1-12zm2 3v7h2v-7H9zm4 0v7h2v-7h-2z"/>
                </svg>
              </div>

              <!-- Crest 3: Forest Green Book & Quran Emblem for Purba Para Madrasa -->
              <div v-else-if="mIdx === 2" class="w-full h-full rounded-lg bg-green-800 flex items-center justify-center text-white shadow-xs p-1">
                <svg viewBox="0 0 24 24" class="w-7 h-7 fill-amber-300 stroke-none">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                </svg>
              </div>

              <!-- Crest 4: Sky Blue Mosque Arch for Paschim Para -->
              <div v-else class="w-full h-full rounded-lg bg-sky-700 flex items-center justify-center text-white shadow-xs p-1">
                <svg viewBox="0 0 24 24" class="w-7 h-7 fill-white stroke-none">
                  <path d="M12 2.5a6 6 0 0 0-6 6V20h12V8.5a6 6 0 0 0-6-6zm0 2.5a3.5 3.5 0 0 1 3.5 3.5V17h-7V8.5A3.5 3.5 0 0 1 12 5z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-6 pt-10 sm:p-7 sm:pt-10 flex flex-col flex-1">
            
            <!-- Title -->
            <h2 class="text-xl sm:text-2xl font-bold text-foreground py-2 leading-tight">
              {{ locale === 'bn' ? mosque.nameBn : mosque.nameEn }}
            </h2>

            <!-- Address with Location Pin -->
            <p class="pb-1 text-sm text-muted-foreground flex items-center gap-1.5 mb-2">
              <svg class="w-4 h-4 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span class="truncate">{{ locale === 'bn' ? mosque.addressBn : mosque.addressEn }}</span>
            </p>

            <!-- Capacity Info -->
            <p class="pb-2 text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-1 truncate">
              {{ locale === 'bn' ? mosque.capacityBn : mosque.capacityEn }}
            </p>

            <!-- Imam Info -->
            <p class="pb-3 text-xs sm:text-sm text-muted-foreground/80 font-medium mb-4 truncate">
              {{ locale === 'bn' ? mosque.imamBn : mosque.imamEn }}
            </p>

            <!-- Checkmark Facilities List (2 Columns) -->
            <div class="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-7 text-sm font-medium">
              <div
                v-for="(facility, fIdx) in (locale === 'bn' ? mosque.facilitiesBn : mosque.facilitiesEn)"
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
              :href="`tel:${mosque.phone}`"
              :title="mosque.phone"
              :aria-label="mosque.phone"
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
