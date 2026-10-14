<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { MATCH_SCHEDULES, type MatchTimelineItem } from '@/data/sports'

const { locale } = useLanguage()

const selectedFilter = ref<'all' | 'league' | 'playoffs'>('all')

const filteredMatches = computed(() => {
  if (selectedFilter.value === 'league') {
    return MATCH_SCHEDULES.filter((m) => m.stageEn.includes('League'))
  }
  if (selectedFilter.value === 'playoffs') {
    return MATCH_SCHEDULES.filter((m) => !m.stageEn.includes('League'))
  }
  return MATCH_SCHEDULES
})
</script>

<template>
  <div class="match-timeline-component bg-card border border-border/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
    
    <!-- Header Section with Filter Pills -->
    <div class="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-border/70 gap-4">
      <div>
        <div class="flex items-center gap-2 mb-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-[#FF3D00] animate-ping"></span>
          <span class="text-xs font-bold uppercase tracking-wider text-[#FF3D00]">
            {{ locale === 'bn' ? 'ম্যাচ শিডিউল ও টুর্নামেন্ট টাইমলাইন' : 'Match Schedule & Tournament Timeline' }}
          </span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
          {{ locale === 'bn' ? '🏏 আগদিঘুলিয়া প্রিমিয়ার লীগ (APL) ২০২৬' : '🏏 Agdighulia Premier League (APL) 2026' }}
        </h2>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">
          {{ locale === 'bn' ? 'সকল ক্রিকেট ম্যাচ, ভেন্যু ও সময়সূচি একনজরে' : 'Upcoming T20 fixtures, venue grounds, and match timings' }}
        </p>
      </div>

      <!-- Filters -->
      <div class="flex items-center gap-2 bg-muted p-1.5 rounded-2xl self-start md:self-auto">
        <button
          type="button"
          :class="[
            'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer',
            selectedFilter === 'all'
              ? 'bg-[#FF3D00] text-white shadow-xs'
              : 'text-muted-foreground hover:text-foreground',
          ]"
          @click="selectedFilter = 'all'"
        >
          {{ locale === 'bn' ? 'সকল ম্যাচ' : 'All Fixtures' }}
        </button>
        <button
          type="button"
          :class="[
            'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer',
            selectedFilter === 'league'
              ? 'bg-[#FF3D00] text-white shadow-xs'
              : 'text-muted-foreground hover:text-foreground',
          ]"
          @click="selectedFilter = 'league'"
        >
          {{ locale === 'bn' ? 'লীগ পর্ব' : 'League Matches' }}
        </button>
        <button
          type="button"
          :class="[
            'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer',
            selectedFilter === 'playoffs'
              ? 'bg-[#FF3D00] text-white shadow-xs'
              : 'text-muted-foreground hover:text-foreground',
          ]"
          @click="selectedFilter = 'playoffs'"
        >
          {{ locale === 'bn' ? 'সেমি ও ফাইনাল' : 'Playoffs & Final' }}
        </button>
      </div>
    </div>

    <!-- Timeline Container -->
    <div class="relative">
      
      <!-- Center Connecting Line (Desktop) -->
      <div class="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 z-0"></div>

      <!-- Left Connecting Line (Mobile & Tablet) -->
      <div class="lg:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-border z-0"></div>

      <!-- Timeline Items -->
      <div class="space-y-8 sm:space-y-10 relative z-10">
        <div
          v-for="(match, idx) in filteredMatches"
          :key="match.id"
          class="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12"
          :class="[
            idx % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
          ]"
        >
          
          <!-- Timeline Node / Circle Marker -->
          <div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-[#FF3D00] text-[#FF3D00] items-center justify-center font-black text-xs shadow-md z-20">
            0{{ idx + 1 }}
          </div>

          <!-- Mobile Timeline Bullet Marker -->
          <div class="lg:hidden self-start flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-card border-2 border-[#FF3D00] text-[#FF3D00] flex items-center justify-center font-black text-xs shadow-md shrink-0">
              0{{ idx + 1 }}
            </div>
            <div class="text-xs font-bold text-[#FF3D00]">
              {{ locale === 'bn' ? match.stageBn : match.stageEn }}
            </div>
          </div>

          <!-- Match Card (Half-width on desktop) -->
          <div class="w-full lg:w-[calc(50%-2.5rem)] ml-12 lg:ml-0">
            <div class="bg-muted/40 hover:bg-muted/70 border border-border/80 hover:border-[#FF3D00]/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-md">
              
              <!-- Match Header Info: Date, Stage, Overs -->
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-border/60 flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-md bg-[#FF3D00]/10 text-[#FF3D00] text-[11px] font-black uppercase tracking-wider">
                    {{ locale === 'bn' ? match.stageBn : match.stageEn }}
                  </span>
                  <span class="text-xs text-muted-foreground font-semibold">
                    {{ match.overs }}
                  </span>
                </div>
                <div class="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <svg class="w-3.5 h-3.5 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{{ locale === 'bn' ? match.dateBn : match.dateEn }}</span>
                </div>
              </div>

              <!-- Versus Matchup Section -->
              <div class="grid grid-cols-7 items-center gap-2 my-2 py-3 bg-background/80 dark:bg-card/90 rounded-xl px-4 border border-border/50">
                
                <!-- Team A -->
                <div class="col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
                  <div class="flex items-center gap-2">
                    <div
                      :class="[
                        'w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black shadow-xs shrink-0',
                        match.teamA.color
                      ]"
                    >
                      {{ match.teamA.shortName }}
                    </div>
                    <span class="text-sm font-bold text-foreground leading-snug">
                      {{ locale === 'bn' ? match.teamA.nameBn : match.teamA.nameEn }}
                    </span>
                  </div>
                </div>

                <!-- VS Badge -->
                <div class="col-span-1 flex flex-col items-center justify-center">
                  <div class="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center text-[10px] font-black text-muted-foreground shadow-xs">
                    VS
                  </div>
                  <span class="text-[9px] text-[#FF3D00] font-bold mt-1">
                    {{ locale === 'bn' ? match.timeBn : match.timeEn }}
                  </span>
                </div>

                <!-- Team B -->
                <div class="col-span-3 flex flex-col items-center sm:items-end text-center sm:text-right gap-1">
                  <div class="flex items-center gap-2 justify-end">
                    <span class="text-sm font-bold text-foreground leading-snug order-2 sm:order-1">
                      {{ locale === 'bn' ? match.teamB.nameBn : match.teamB.nameEn }}
                    </span>
                    <div
                      :class="[
                        'w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black shadow-xs shrink-0 order-1 sm:order-2',
                        match.teamB.color
                      ]"
                    >
                      {{ match.teamB.shortName }}
                    </div>
                  </div>
                </div>

              </div>

              <!-- Venue Details -->
              <div class="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                <div class="flex items-center gap-1.5 truncate">
                  <svg class="w-3.5 h-3.5 text-[#FF3D00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span class="truncate">{{ locale === 'bn' ? match.venueBn : match.venueEn }}</span>
                </div>
                <div class="shrink-0 flex items-center gap-1 text-[#FF3D00] font-bold">
                  <span>{{ locale === 'bn' ? 'আসন্ন ম্যাচ' : 'Upcoming' }}</span>
                </div>
              </div>

            </div>
          </div>

          <!-- Blank spacer for alternating desktop timeline -->
          <div class="hidden lg:block lg:w-[calc(50%-2.5rem)]"></div>

        </div>
      </div>

    </div>

  </div>
</template>
