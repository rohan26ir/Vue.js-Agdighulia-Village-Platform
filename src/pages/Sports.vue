<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Heading from '@/components/ui/Heading.vue'
import { useLanguage } from '@/composables/useLanguage'
import { CRICKET_CLUBS } from '@/data/sports'

const { locale } = useLanguage()

const featuredClub = computed(() => CRICKET_CLUBS[0])
const otherClubs = computed(() => CRICKET_CLUBS.slice(1))
</script>

<template>
  <div class="sports-page min-h-screen bg-background text-foreground py-12 md:py-20">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <!-- Sports Sub-Navigation Tabs (Routing between Clubs and Match Schedule) -->
      <div class="flex items-center justify-center pb-10 ">
        <div class="inline-flex p-1.5 rounded-2xl bg-muted/70 border border-border/80 shadow-xs">
          <RouterLink
            to="/sports"
            class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-[#FF3D00] text-white shadow-xs no-underline transition-all flex items-center gap-2"
          >
            <span>🏏</span>
            <span>{{ locale === 'bn' ? 'ক্রিকেট ক্লাবসমূহ' : 'Cricket Clubs' }}</span>
          </RouterLink>

          <RouterLink
            to="/sports/schedule"
            class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-muted-foreground hover:text-foreground no-underline transition-all flex items-center gap-2"
          >
            <span>📅</span>
            <span>{{ locale === 'bn' ? 'ম্যাচ শিডিউল ও সূচি' : 'Match Schedule' }}</span>
          </RouterLink>
        </div>
      </div>

      <!-- Page Header -->
      <div class="py-6 sm:py-10 mb-4 sm:mb-8">
        <Heading
          as="h1"
          size="xl"
          badgeIcon="🏏"
          :badge="locale === 'bn' ? 'খেলাধুলা ও ক্রিকেট' : 'Sports & Cricket Clubs'"
          :description="
            locale === 'bn'
              ? 'আগদিঘুলিয়ার শীর্ষ রেজিস্টার্ড ক্রিকেট ক্লাব, টুর্নামেন্ট সূচি এবং স্থানীয় প্রতিভাবান খেলোয়াড়দের বিস্তারিত তথ্য।'
              : 'Premier cricket clubs, tournament schedules, and talented local athletes shaping our sporting culture.'
          "
        >
          <template #title>
            <template v-if="locale === 'bn'">
              মাঠের উন্মাদনা আর
              <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
                ঐক্যের
              </span>
              বিজয়ী
              <span class="text-[#FF3D00] font-extrabold">গৌরব।</span>
            </template>
            <template v-else>
              Passion on the pitch,
              <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
                pride
              </span>
              for our
              <span class="text-[#FF3D00] font-extrabold">village.</span>
            </template>
          </template>
        </Heading>
      </div>

      <!-- Tournament & Match Schedule Route Promo Card -->
      <div class="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-gradient-to-r from-card via-card to-[#FF3D00]/5 p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="space-y-2 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3D00]/10 text-[#FF3D00] text-xs font-black uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-[#FF3D00] animate-ping"></span>
            <span>{{ locale === 'bn' ? 'অফিসিয়াল টুর্নামেন্ট সূচি' : 'Official Tournament Schedule' }}</span>
          </div>
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground">
            {{ locale === 'bn' ? 'আগদিঘুলিয়া প্রিমিয়ার লীগ (APL) ২০২৬ ম্যাচ শিডিউল' : 'Agdighulia Premier League (APL) 2026 Fixtures' }}
          </h2>
          <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {{ locale === 'bn'
              ? '৫টি ক্রিকেট ক্লাবের লীগ পর্ব, সেমিফাইনাল ও ফাইনাল ম্যাচের তারিখ, ভেন্যু ও সময়সূচি আলাদা পেজে বিস্তারিত সাজানো রয়েছে।'
              : 'Detailed schedule, match times, venue grounds, and head-to-head fixtures across all tournament rounds.' }}
          </p>
        </div>
        <RouterLink
          to="/sports/schedule"
          class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF3D00] hover:bg-[#E03600] text-white text-xs sm:text-sm font-black transition-all shadow-md hover:shadow-lg no-underline shrink-0 group"
        >
          <span>📅 {{ locale === 'bn' ? 'ম্যাচ শিডিউল পেজে যান' : 'View Match Schedule' }}</span>
          <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </RouterLink>
      </div>

      <!-- Clubs Section Title -->
      <div class="pt-6">
        <div class="mb-8 sm:mb-12 w-full">
          <Heading
            as="h2"
            variant="subheading"
            badgeIcon="🏆"
            :badge="locale === 'bn' ? 'আমাদের দলসমূহ' : 'Participating Clubs'"
            :title="locale === 'bn' ? 'আগদিঘুলিয়ার রেজিস্টার্ড ক্রিকেট ক্লাবসমূহ' : 'Registered Cricket Clubs of Agdighulia'"
            :description="
              locale === 'bn'
                ? 'খেলোয়াড়দের তালিকা, পরিসংখ্যান ও বিস্তারিত দেখতে ক্লাবে ক্লিক করুন।'
                : 'Click on any club to view squad roster, stats, captain details, and honors.'
            "
          />
        </div>

        <!-- Cricket Clubs Grid (Row 1: Full-Width Featured Club + Remaining Clubs 2x2) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          <!-- Row 1: Full-Width Featured Club (Agdighulia Warriors) -->
          <div
            v-if="featuredClub"
            class="md:col-span-2 group relative bg-card border border-border/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row"
          >
            <!-- Left Cover Image (Desktop) with Floating Badges -->
            <div class="relative w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[280px] sm:min-h-[350px] bg-muted shrink-0 select-none">
              <div class="w-full h-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
                <img
                  :src="featuredClub.image"
                  :alt="featuredClub.nameEn"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <!-- Bottom-Right: Club Type Pill -->
              <div class="absolute bottom-3.5 right-4 bg-zinc-900/90 dark:bg-zinc-800/95 backdrop-blur-xs text-white text-xs font-bold px-3.5 py-1.5 rounded-md shadow-md z-10 flex items-center gap-1.5 border border-white/20 dark:border-zinc-700">
                <span class="text-amber-400">🏏</span>
                <span>{{ locale === 'bn' ? featuredClub.typeBn : featuredClub.typeEn }}</span>
              </div>

              <!-- Overlapping Shield Crest (z-20) -->
              <div class="absolute -bottom-7 lg:bottom-4 left-6 w-14 h-14 bg-white dark:bg-zinc-800 rounded-xl p-1.5 shadow-xl border-2 border-white dark:border-zinc-700 flex items-center justify-center z-20">
                <div class="w-full h-full rounded-lg bg-emerald-700 flex flex-col items-center justify-center text-white shadow-xs p-1">
                  <span class="text-[10px] font-black leading-tight text-amber-300">{{ featuredClub.shortName }}</span>
                  <span class="text-[6.5px] font-bold tracking-widest text-emerald-200 uppercase">CHAMP</span>
                </div>
              </div>
            </div>

            <!-- Right Content Body (Desktop) -->
            <div class="p-6 pt-10 sm:p-8 lg:p-10 flex-1 flex flex-col justify-center">
              
              <!-- Trophy / Stats Strip -->
              <div class="flex items-center gap-3 mb-2 flex-wrap text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span class="px-2.5 py-1 rounded-md bg-emerald-500/10 flex items-center gap-1">
                  🏆 {{ locale === 'bn' ? 'ট্রফি: ' + featuredClub.stats.trophies + ' টি' : featuredClub.stats.trophies + ' Trophies' }}
                </span>
                <span class="px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                  ⚔️ {{ locale === 'bn' ? 'ম্যাচ জয়: ' + featuredClub.stats.won + '/' + featuredClub.stats.matches : 'Won: ' + featuredClub.stats.won + '/' + featuredClub.stats.matches }}
                </span>
                <span class="text-muted-foreground">Est. {{ featuredClub.established }}</span>
              </div>

              <!-- Club Title -->
              <h3 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground py-1 leading-tight">
                <RouterLink :to="`/sports/${featuredClub.slug}`" class="text-foreground hover:text-[#FF3D00] transition-colors no-underline">
                  {{ locale === 'bn' ? featuredClub.nameBn : featuredClub.nameEn }}
                </RouterLink>
              </h3>

              <!-- Ground Address -->
              <p class="pb-1 text-sm text-muted-foreground flex items-center gap-1.5 mb-2">
                <svg class="w-4 h-4 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span class="truncate">{{ locale === 'bn' ? featuredClub.homeGroundBn : featuredClub.homeGroundEn }}</span>
              </p>

              <!-- Captain & Coach -->
              <p class="pb-3 text-xs sm:text-sm text-muted-foreground/90 font-medium mb-3">
                <span class="font-bold text-foreground">{{ locale === 'bn' ? 'অধিনায়ক: ' : 'Captain: ' }}</span>
                <span>{{ locale === 'bn' ? featuredClub.captainBn : featuredClub.captainEn }}</span>
                <span class="mx-2 text-muted-foreground/40">•</span>
                <span class="font-bold text-foreground">{{ locale === 'bn' ? 'কোচ: ' : 'Coach: ' }}</span>
                <span>{{ locale === 'bn' ? featuredClub.coachBn : featuredClub.coachEn }}</span>
              </p>

              <!-- Checkmark Facilities List (Multi-column) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2.5 gap-x-4 mb-6 text-sm font-medium">
                <div
                  v-for="(facility, fIdx) in (locale === 'bn' ? featuredClub.facilitiesBn : featuredClub.facilitiesEn)"
                  :key="fIdx"
                  class="flex items-center gap-2 text-foreground/90"
                >
                  <svg class="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span class="truncate">{{ facility }}</span>
                </div>
              </div>

              <!-- Right Bottom Link Button on Hover -->
              <RouterLink
                :to="`/sports/${featuredClub.slug}`"
                :title="locale === 'bn' ? 'স্কোয়াড ও বিস্তারিত দেখুন' : 'View club squad and details'"
                class="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#FF3D00] hover:bg-[#E03600] text-white flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 z-20 cursor-pointer"
              >
                <svg class="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </RouterLink>

            </div>
          </div>

          <!-- Other Cricket Clubs (2x2 Grid) -->
          <div
            v-for="(club, cIdx) in otherClubs"
            :key="club.id"
            class="group relative bg-card border border-border/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <!-- Top Cover Image Area with Floating Badges -->
            <div class="relative w-full h-60 sm:h-72 bg-muted shrink-0 select-none">
              <div class="w-full h-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                <img
                  :src="club.image"
                  :alt="club.nameEn"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <!-- Bottom-Right: Club Type Pill -->
              <div class="absolute bottom-3.5 right-4 bg-zinc-900/90 dark:bg-zinc-800/95 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md z-10 flex items-center gap-1.5 border border-white/20 dark:border-zinc-700">
                <span class="text-amber-400">🏏</span>
                <span>{{ locale === 'bn' ? club.typeBn : club.typeEn }}</span>
              </div>

              <!-- Bottom-Left: Overlapping Logo Crest (z-20 & fully visible) -->
              <div class="absolute -bottom-7 left-6 w-14 h-14 bg-white dark:bg-zinc-800 rounded-xl p-1.5 shadow-xl border-2 border-white dark:border-zinc-700 flex items-center justify-center z-20">
                <div
                  :class="[
                    'w-full h-full rounded-lg flex flex-col items-center justify-center text-white shadow-xs p-1',
                    club.badgeColor
                  ]"
                >
                  <span class="text-[10px] font-black leading-tight text-white">{{ club.shortName }}</span>
                  <span class="text-[6.5px] font-bold tracking-widest text-white/80 uppercase">CLUB</span>
                </div>
              </div>
            </div>

            <!-- Card Content Body -->
            <div class="p-6 pt-10 sm:p-7 sm:pt-10 flex flex-col flex-1">
              
              <!-- Stats Chips -->
              <div class="flex items-center gap-2 mb-2 text-xs font-bold text-muted-foreground flex-wrap">
                <span class="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  🏆 {{ locale === 'bn' ? club.stats.trophies + ' টি ট্রফি' : club.stats.trophies + ' Cups' }}
                </span>
                <span class="px-2 py-0.5 rounded-md bg-muted">
                  {{ locale === 'bn' ? 'জয়: ' + club.stats.won + ' ম্যাচ' : 'Won: ' + club.stats.won }}
                </span>
                <span class="text-[11px]">Est. {{ club.established }}</span>
              </div>

              <!-- Title -->
              <h3 class="text-xl sm:text-2xl font-bold text-foreground py-2 leading-tight">
                <RouterLink :to="`/sports/${club.slug}`" class="text-foreground hover:text-[#FF3D00] transition-colors no-underline">
                  {{ locale === 'bn' ? club.nameBn : club.nameEn }}
                </RouterLink>
              </h3>

              <!-- Ground Address with Location Pin -->
              <p class="pb-1 text-sm text-muted-foreground flex items-center gap-1.5 mb-2">
                <svg class="w-4 h-4 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span class="truncate">{{ locale === 'bn' ? club.homeGroundBn : club.homeGroundEn }}</span>
              </p>

              <!-- Captain & Coach -->
              <p class="pb-3 text-xs sm:text-sm text-muted-foreground/80 font-medium mb-4 truncate">
                <span class="font-bold text-foreground">{{ locale === 'bn' ? 'অধিনায়ক: ' : 'Captain: ' }}</span>
                <span>{{ locale === 'bn' ? club.captainBn : club.captainEn }}</span>
              </p>

              <!-- Checkmark Facilities List (2 Columns) -->
              <div class="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-7 text-sm font-medium">
                <div
                  v-for="(facility, fIdx) in (locale === 'bn' ? club.facilitiesBn.slice(0, 4) : club.facilitiesEn.slice(0, 4))"
                  :key="fIdx"
                  class="flex items-center gap-2 text-foreground/90"
                >
                  <svg class="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span class="truncate">{{ facility }}</span>
                </div>
              </div>

              <!-- Right Bottom Link Button on Hover -->
              <RouterLink
                :to="`/sports/${club.slug}`"
                :title="locale === 'bn' ? 'বিস্তারিত দেখুন' : 'View details'"
                class="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#FF3D00] hover:bg-[#E03600] text-white flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 z-20 cursor-pointer"
              >
                <svg class="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </RouterLink>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
