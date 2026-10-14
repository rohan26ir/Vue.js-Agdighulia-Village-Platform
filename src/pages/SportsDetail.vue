<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import { CRICKET_CLUBS } from '@/data/sports'

const route = useRoute()
const { locale } = useLanguage()

const club = computed(() => {
  const slug = route.params.slug as string
  return CRICKET_CLUBS.find((c) => c.slug === slug || c.id === slug)
})

const winPercentage = computed(() => {
  if (!club.value || club.value.stats.matches === 0) return 0
  return Math.round((club.value.stats.won / club.value.stats.matches) * 100)
})
</script>

<template>
  <div class="sports-detail-page min-h-screen bg-background text-foreground py-10 md:py-16">
    <div class="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
      
      <!-- Navigation Breadcrumbs -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <RouterLink
          to="/sports"
          class="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors group no-underline"
        >
          <span class="group-hover:-translate-x-1 transition-transform">&larr;</span>
          <span>{{ locale === 'bn' ? 'সকল স্পোর্টস ও ক্রিকেট ক্লাবে ফিরুন' : 'Back to Sports & Clubs' }}</span>
        </RouterLink>

        <RouterLink
          to="/sports/schedule"
          class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-muted hover:bg-[#FF3D00]/10 text-muted-foreground hover:text-[#FF3D00] text-xs font-bold transition-colors no-underline"
        >
          <span>📅</span>
          <span>{{ locale === 'bn' ? 'ম্যাচ শিডিউল দেখুন' : 'View Match Schedule' }}</span>
        </RouterLink>
      </div>

      <!-- Club Not Found State -->
      <div v-if="!club" class="text-center py-20 bg-card border border-border rounded-3xl p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-foreground mb-3">
          {{ locale === 'bn' ? 'ক্লাবটি পাওয়া যায়নি' : 'Sports Club Not Found' }}
        </h2>
        <p class="text-sm text-muted-foreground max-w-md mx-auto mb-6">
          {{ locale === 'bn'
            ? 'আপনার অনুরোধকৃত ক্রিকেট ক্লাবের কোনো তথ্য পাওয়া যায়নি।'
            : 'The cricket club details you requested could not be found.' }}
        </p>
        <RouterLink
          to="/sports"
          class="px-6 py-2.5 rounded-full bg-[#FF3D00] text-white font-bold text-xs hover:bg-[#E03600] transition-colors no-underline inline-block"
        >
          {{ locale === 'bn' ? 'ক্লাব তালিকা দেখুন' : 'View Clubs Directory' }}
        </RouterLink>
      </div>

      <!-- Main Club Detail View -->
      <div v-else class="flex flex-col gap-10">
        
        <!-- Hero Banner Header -->
        <div class="relative rounded-3xl overflow-hidden border border-border shadow-xl h-80 sm:h-96">
          <img
            :src="club.image"
            :alt="club.nameEn"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>

          <!-- Top Overlay Badges -->
          <div class="absolute top-6 left-6 right-6 flex items-center justify-between">
            <span class="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FF3D00] text-white shadow-md">
              {{ locale === 'bn' ? club.typeBn : club.typeEn }}
            </span>
            <span class="px-4 py-1.5 rounded-full text-xs font-extrabold bg-black/70 text-white backdrop-blur-md border border-white/20">
              Est. {{ club.established }}
            </span>
          </div>

          <!-- Bottom Title & Address Overlay -->
          <div class="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2.5 py-0.5 rounded-md bg-amber-400 text-black text-[11px] font-black uppercase tracking-wider">
                🏆 {{ club.stats.trophies }} {{ locale === 'bn' ? 'টি ট্রফি' : 'Trophies' }}
              </span>
              <span class="text-xs text-white/80 font-bold">
                {{ club.stats.matches }} {{ locale === 'bn' ? 'ম্যাচ খেলা হয়েছে' : 'Matches Played' }}
              </span>
            </div>
            <h1 class="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight drop-shadow-lg mb-2">
              {{ locale === 'bn' ? club.nameBn : club.nameEn }}
            </h1>
            <p class="text-xs sm:text-sm text-white/85 font-medium flex items-center gap-2">
              <svg class="w-4 h-4 text-[#FF3D00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{{ locale === 'bn' ? club.homeGroundBn : club.homeGroundEn }}</span>
            </p>
          </div>
        </div>

        <!-- 2-Column Details Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: About, Squad Lineup & Highlights (8 cols) -->
          <div class="lg:col-span-8 space-y-8">
            
            <!-- About Club Section -->
            <div class="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 class="text-xl font-extrabold text-foreground mb-4 flex items-center gap-2">
                <span>📖</span>
                <span>{{ locale === 'bn' ? 'ক্লাব পরিচিতি ও ইতিহাস' : 'About the Club & Legacy' }}</span>
              </h2>
              <p class="text-base text-muted-foreground leading-relaxed">
                {{ locale === 'bn' ? club.detailedDescBn : club.detailedDescEn }}
              </p>
            </div>

            <!-- Squad Lineup Section -->
            <div class="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <div class="flex items-center justify-between pb-4 mb-6 border-b border-border/70">
                <h2 class="text-xl font-extrabold text-foreground flex items-center gap-2">
                  <span>👥</span>
                  <span>{{ locale === 'bn' ? 'অফিসিয়াল স্কোয়াড ও খেলোয়াড় তালিকা' : 'Official Squad & Players' }}</span>
                </h2>
                <span class="text-xs font-bold text-muted-foreground px-2.5 py-1 rounded-full bg-muted">
                  {{ club.squad.length }} {{ locale === 'bn' ? 'খেলোয়াড়' : 'Players' }}
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div
                  v-for="player in club.squad"
                  :key="player.jerseyNo"
                  class="flex items-center gap-3.5 p-3.5 rounded-2xl bg-muted/40 border border-border/60 hover:border-[#FF3D00]/40 transition-colors"
                >
                  <div class="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center font-black text-sm text-[#FF3D00] shadow-xs shrink-0">
                    #{{ player.jerseyNo }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="text-sm font-bold text-foreground truncate">
                        {{ locale === 'bn' ? player.nameBn : player.nameEn }}
                      </span>
                      <span
                        v-if="player.isCaptain"
                        class="px-1.5 py-0.5 rounded text-[10px] font-black bg-amber-400 text-black leading-none"
                      >
                        C
                      </span>
                      <span
                        v-if="player.isViceCaptain"
                        class="px-1.5 py-0.5 rounded text-[10px] font-black bg-blue-500 text-white leading-none"
                      >
                        VC
                      </span>
                    </div>
                    <p class="text-xs text-muted-foreground truncate mt-0.5">
                      {{ locale === 'bn' ? player.roleBn : player.roleEn }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Trophies & Achievements Section -->
            <div class="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 class="text-xl font-extrabold text-foreground mb-6 flex items-center gap-2">
                <span>🏆</span>
                <span>{{ locale === 'bn' ? 'ক্লাবের গৌরবময় অর্জনসমূহ' : 'Trophies & Major Honors' }}</span>
              </h2>

              <div class="space-y-3">
                <div
                  v-for="(achievement, aIdx) in (locale === 'bn' ? club.achievementsBn : club.achievementsEn)"
                  :key="aIdx"
                  class="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-foreground"
                >
                  <div class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-base shrink-0">
                    🏅
                  </div>
                  <span class="text-sm font-bold">{{ achievement }}</span>
                </div>
              </div>
            </div>

            <!-- Facilities & Equipment Checklist -->
            <div class="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 class="text-xl font-extrabold text-foreground mb-6 flex items-center gap-2">
                <span>✨</span>
                <span>{{ locale === 'bn' ? 'প্রশিক্ষণ সুবিধা ও ইনফ্রাস্ট্রাকচার' : 'Facilities & Training Infrastructure' }}</span>
              </h2>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="(facility, fIdx) in (locale === 'bn' ? club.facilitiesBn : club.facilitiesEn)"
                  :key="fIdx"
                  class="flex items-center gap-2.5 p-3 rounded-2xl bg-muted/40 border border-border/50 text-foreground"
                >
                  <svg class="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span class="text-xs sm:text-sm font-semibold truncate">{{ facility }}</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: Sidebar Stats & Contacts (4 cols) -->
          <div class="lg:col-span-4 space-y-6">
            
            <!-- Performance Statistics Card -->
            <div class="bg-card border border-border rounded-3xl p-6 shadow-sm">
              <h3 class="text-base font-extrabold text-foreground mb-4 pb-3 border-b border-border flex items-center justify-between">
                <span>📊 {{ locale === 'bn' ? 'রেকর্ড ও পরিসংখ্যান' : 'Club Performance' }}</span>
                <span class="text-xs font-bold text-emerald-600">{{ winPercentage }}% {{ locale === 'bn' ? 'জয়' : 'Win Rate' }}</span>
              </h3>

              <div class="grid grid-cols-2 gap-3 mb-4">
                <div class="p-3 rounded-2xl bg-muted text-center">
                  <span class="block text-2xl font-black text-foreground">{{ club.stats.matches }}</span>
                  <span class="text-[11px] font-bold text-muted-foreground uppercase">{{ locale === 'bn' ? 'মোট ম্যাচ' : 'Matches' }}</span>
                </div>
                <div class="p-3 rounded-2xl bg-emerald-500/10 text-center">
                  <span class="block text-2xl font-black text-emerald-600">{{ club.stats.won }}</span>
                  <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">{{ locale === 'bn' ? 'জয়' : 'Won' }}</span>
                </div>
                <div class="p-3 rounded-2xl bg-rose-500/10 text-center">
                  <span class="block text-2xl font-black text-rose-600">{{ club.stats.lost }}</span>
                  <span class="text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase">{{ locale === 'bn' ? 'হার' : 'Lost' }}</span>
                </div>
                <div class="p-3 rounded-2xl bg-amber-500/10 text-center">
                  <span class="block text-2xl font-black text-amber-600">{{ club.stats.trophies }}</span>
                  <span class="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase">{{ locale === 'bn' ? 'ট্রফি' : 'Trophies' }}</span>
                </div>
              </div>
            </div>

            <!-- Leadership & Ground Card -->
            <div class="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
              <h3 class="text-base font-extrabold text-foreground pb-2 border-b border-border">
                📋 {{ locale === 'bn' ? 'দলীয় তথ্য' : 'Team Quick Facts' }}
              </h3>

              <div>
                <span class="text-xs font-bold text-muted-foreground block">{{ locale === 'bn' ? 'অধিনায়ক' : 'Team Captain' }}</span>
                <span class="text-sm font-extrabold text-foreground">{{ locale === 'bn' ? club.captainBn : club.captainEn }}</span>
              </div>

              <div>
                <span class="text-xs font-bold text-muted-foreground block">{{ locale === 'bn' ? 'প্রধান কোচ / মেন্টর' : 'Head Coach' }}</span>
                <span class="text-sm font-extrabold text-foreground">{{ locale === 'bn' ? club.coachBn : club.coachEn }}</span>
              </div>

              <div>
                <span class="text-xs font-bold text-muted-foreground block">{{ locale === 'bn' ? 'জার্সির রং' : 'Jersey Color' }}</span>
                <span class="text-sm font-extrabold text-foreground">{{ locale === 'bn' ? club.jerseyColorBn : club.jerseyColorEn }}</span>
              </div>

              <div>
                <span class="text-xs font-bold text-muted-foreground block">{{ locale === 'bn' ? 'হোম গ্রাউন্ড' : 'Home Venue' }}</span>
                <span class="text-sm font-semibold text-foreground">{{ locale === 'bn' ? club.homeGroundBn : club.homeGroundEn }}</span>
              </div>
            </div>

            <!-- Official Contact Card -->
            <div class="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
              <h3 class="text-base font-extrabold text-foreground pb-2 border-b border-border flex items-center gap-2">
                <span>📞</span>
                <span>{{ locale === 'bn' ? 'যোগাযোগ ও ট্রায়াল' : 'Club Contact & Trials' }}</span>
              </h3>

              <p class="text-xs text-muted-foreground leading-relaxed">
                {{ locale === 'bn'
                  ? 'নতুন খেলোয়াড় ট্রায়াল, স্পনসরশিপ ও প্রীতি ম্যাচের জন্য যোগাযোগ করুন:'
                  : 'For player registration, trials, sponsorships, or friendly match invitations:' }}
              </p>

              <div class="p-3.5 rounded-2xl bg-muted flex items-center justify-between">
                <div>
                  <span class="text-[11px] font-bold text-muted-foreground block">{{ locale === 'bn' ? 'হটলাইন নম্বর' : 'Club Helpline' }}</span>
                  <span class="text-sm font-black text-foreground">{{ club.phone }}</span>
                </div>
                <a
                  :href="`tel:${club.phone}`"
                  class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors no-underline inline-flex items-center gap-1.5 shadow-xs"
                >
                  <span>📞</span>
                  <span>{{ locale === 'bn' ? 'কল করুন' : 'Call' }}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>
