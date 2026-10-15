<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Heading from '@/components/ui/Heading.vue'
import { useLanguage } from '@/composables/useLanguage'
import { MATCH_SCHEDULES, CRICKET_CLUBS, type MatchTimelineItem } from '@/data/sports'

const { locale } = useLanguage()

// View toggle: 'list' (default) or 'tree'
const activeView = ref<'tree' | 'list'>('list')

const selectedStage = ref<'all' | 'league' | 'playoffs'>('all')
const selectedClub = ref<string>('all')

// Group matches by tournament round for the tree
const round1Matches = computed(() =>
  MATCH_SCHEDULES.filter((m) => m.stageEn.includes('League')),
)
const semiFinalMatches = computed(() =>
  MATCH_SCHEDULES.filter((m) => m.stageEn.includes('Semi Final')),
)
const grandFinalMatch = computed(
  () =>
    MATCH_SCHEDULES.find((m) => m.stageEn.includes('Grand Final')) ||
    MATCH_SCHEDULES[MATCH_SCHEDULES.length - 1],
)

const filteredMatches = computed(() => {
  return MATCH_SCHEDULES.filter((match) => {
    const matchesStage =
      selectedStage.value === 'all'
        ? true
        : selectedStage.value === 'league'
          ? match.stageEn.includes('League')
          : !match.stageEn.includes('League')

    const matchesClub =
      selectedClub.value === 'all'
        ? true
        : match.teamA.shortName === selectedClub.value ||
          match.teamB.shortName === selectedClub.value

    return matchesStage && matchesClub
  })
})

const getClubSlug = (shortName: string): string => {
  const found = CRICKET_CLUBS.find((c) => c.shortName === shortName)
  return found ? found.slug : ''
}
</script>

<template>
  <div class="match-schedule-page min-h-screen bg-background text-foreground py-10 md:py-16">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <!-- Sports Sub-Navigation Tabs (Routing between Clubs and Match Schedule) -->
      <div class="flex items-center justify-center pt-3">
        <div class="inline-flex p-1.5 rounded-2xl bg-muted/70 border border-border/80 shadow-xs">
          <RouterLink
            to="/sports"
            class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-muted-foreground hover:text-foreground no-underline transition-all flex items-center gap-2"
          >
            <span>🏏</span>
            <span>{{ locale === 'bn' ? 'ক্রিকেট ক্লাবসমূহ' : 'Cricket Clubs' }}</span>
          </RouterLink>

          <RouterLink
            to="/sports/schedule"
            class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-[#FF3D00] text-white shadow-xs no-underline transition-all flex items-center gap-2"
          >
            <span>📅</span>
            <span>{{ locale === 'bn' ? 'ম্যাচ শিডিউল ও সূচি' : 'Match Schedule' }}</span>
          </RouterLink>
        </div>
      </div>

      <!-- Page Header (Centered Badge, Title, Description) -->
      <div class="py-6 sm:py-10 mb-4 sm:mb-8">
        <Heading
          as="h1"
          size="xl"
          badgeIcon="🏆"
          :badge="locale === 'bn' ? 'টুর্নামেন্ট ব্র্যাকেট ও সময়সূচি' : 'Tournament Bracket & Schedule'"
          :description="
            locale === 'bn'
              ? 'গ্রামের ৫টি রেজিস্টার্ড ক্রিকেট ক্লাবের মধ্যকার রোমাঞ্চকর টি-২০ নকআউট ট্রি ও টুর্নামেন্ট সূচি।'
              : 'Knockout tournament tree bracket, match fixtures, playing grounds, and timings.'
          "
        >
          <template #title>
            <template v-if="locale === 'bn'">
              আগদিঘুলিয়া প্রিমিয়ার লীগ
              <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
                (APL)
              </span>
              ২০২৬
              <span class="text-[#FF3D00] font-extrabold">সূচি।</span>
            </template>
            <template v-else>
              Agdighulia Premier League
              <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
                (APL)
              </span>
              2026
              <span class="text-[#FF3D00] font-extrabold">Fixtures.</span>
            </template>
          </template>
        </Heading>
      </div>
      

      <!-- Quick Tournament Stats Strip -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="p-4 rounded-2xl bg-card border border-border text-center shadow-xs">
          <span class="block text-2xl sm:text-3xl font-black text-foreground">05</span>
          <span class="text-xs font-bold text-muted-foreground uppercase">{{ locale === 'bn' ? 'অংশগ্রহণকারী দল' : 'Teams' }}</span>
        </div>
        <div class="p-4 rounded-2xl bg-card border border-border text-center shadow-xs">
          <span class="block text-2xl sm:text-3xl font-black text-[#FF3D00]">T20</span>
          <span class="text-xs font-bold text-muted-foreground uppercase">{{ locale === 'bn' ? 'ম্যাচ ফরম্যাট' : 'Format (20 Overs)' }}</span>
        </div>
        <div class="p-4 rounded-2xl bg-card border border-border text-center shadow-xs">
          <span class="block text-2xl sm:text-3xl font-black text-emerald-600">02</span>
          <span class="text-xs font-bold text-muted-foreground uppercase">{{ locale === 'bn' ? 'খেলার মাঠ / ভেন্যু' : 'Host Venues' }}</span>
        </div>
        <div class="p-4 rounded-2xl bg-card border border-border text-center shadow-xs">
          <span class="block text-2xl sm:text-3xl font-black text-amber-500">🏆 APL</span>
          <span class="text-xs font-bold text-muted-foreground uppercase">{{ locale === 'bn' ? 'চ্যাম্পিয়ন ট্রফি' : 'Champion Trophy' }}</span>
        </div>
      </div>

      <!-- View Switcher (Tree View vs List View) - Subheading Variant -->
      <div class="w-full pt-6 pb-2">
        <Heading
          as="h2"
          variant="subheading"
          :badgeIcon="activeView === 'tree' ? '🌳' : '📋'"
          :badge="activeView === 'tree' ? (locale === 'bn' ? 'ব্র্যাকেট ভিউ' : 'Bracket View') : (locale === 'bn' ? 'ফিক্সচার তালিকা' : 'Fixture List')"
          :description="
            activeView === 'tree'
              ? (locale === 'bn' ? 'গ্রুপ পর্ব থেকে ফাইনাল পর্যন্ত প্রতিটি ম্যাচের সংযোগ ট্রি ব্র্যাকেটে দেখুন।' : 'Visual bracket showing how teams progress from qualifiers to the championship.')
              : (locale === 'bn' ? 'তারিখ ও ভেন্যু অনুযায়ী সকল ম্যাচের বিস্তারিত কার্ড।' : 'Detailed cards filtered by date, stage, and teams.')
          "
          :title="
            activeView === 'tree'
              ? (locale === 'bn' ? 'টুর্নামেন্ট নকআউট ট্রি ব্র্যাকেট' : 'Tournament Knockout Tree Bracket')
              : (locale === 'bn' ? 'অফিসিয়াল ম্যাচ ফিক্সচার শিডিউল' : 'Official Match Schedule Fixtures')
          "
        >

          <template #actions>
            <div class="inline-flex p-1 rounded-2xl bg-muted border border-border/70 shrink-0">
              <button
                type="button"
                :class="[
                  'px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5',
                  activeView === 'list'
                    ? 'bg-[#FF3D00] text-white shadow-xs'
                    : 'text-foreground/75 hover:text-foreground hover:bg-card/50',
                ]"
                @click="activeView = 'list'"
              >
                <span>📋</span>
                <span>{{ locale === 'bn' ? 'তালিকা ভিউ' : 'List View' }}</span>
              </button>
              <button
                type="button"
                :class="[
                  'px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5',
                  activeView === 'tree'
                    ? 'bg-[#FF3D00] text-white shadow-xs'
                    : 'text-foreground/75 hover:text-foreground hover:bg-card/50',
                ]"
                @click="activeView = 'tree'"
              >
                <span>🌳</span>
                <span>{{ locale === 'bn' ? 'ট্রি ভিউ' : 'Tree Bracket' }}</span>
              </button>
            </div>
          </template>
        </Heading>
      </div>

      <!-- ========================================== -->
      <!-- VIEW 1: PYRAMID TOURNAMENT TREE (FINAL -> SEMIS -> QUALIFIERS) -->
      <!-- ========================================== -->
      <div v-if="activeView === 'tree'" class="space-y-10 sm:space-y-12  flex flex-col justify-center items-center py-10">
        
       

        <!-- ========================================== -->
        <!-- ROW 1: GRAND FINAL & CHAMPION GLORY -->
        <!-- ========================================== -->
        <div class="space-y-6">
          

          <!-- Grand Final Featured Card + Champion Banner -->
          <div class="max-w-2xl mx-auto">
            <div
              v-if="grandFinalMatch"
              class="relative group bg-gradient-to-br from-card via-card to-amber-500/10 border-2 border-amber-500 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300"
            >
              <!-- Card Top Header (Centered) -->
              <div class="flex flex-col items-center justify-center pb-4 mb-4 border-b border-border/70 text-center">
                <div class="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 border border-amber-500/30 flex items-center justify-center text-2xl mb-2 shadow-xs">
                  👑
                </div>
                <span class="text-xs sm:text-sm font-black text-amber-500 uppercase tracking-wider block">
                  {{ locale === 'bn' ? 'গ্র্যান্ড ফাইনাল ২০২৬' : 'APL Grand Final 2026' }}
                </span>
                <span class="text-[11px] text-muted-foreground font-semibold mt-0.5">
                  {{ locale === 'bn' ? 'ম্যাচ নং #০৫ • শিরোপা লড়াই' : 'Match #05 Decider' }}
                </span>
                <span class="mt-2.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/35 font-black text-xs uppercase tracking-wider shadow-2xs">
                  🏆 ৳১,০০,০০০ স্বর্ণ ট্রফি
                </span>
              </div>

              <!-- Finalist 1 -->
              <div class="flex items-center justify-between py-3 px-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 my-2">
                <div class="flex items-center gap-3 truncate">
                  <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                    {{ grandFinalMatch.teamA.shortName }}
                  </div>
                  <div>
                    <span class="text-xs sm:text-base font-black text-foreground block truncate">
                      {{ locale === 'bn' ? grandFinalMatch.teamA.nameBn : grandFinalMatch.teamA.nameEn }}
                    </span>
                    <span class="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase">
                      {{ locale === 'bn' ? '১ম সেমিফাইনাল থেকে বিজয়ী' : 'Winner of Semi Final 1' }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Championship VS Banner -->
              <div class="flex items-center justify-center my-2 relative z-10">
                <span class="px-4 py-1.5 rounded-full bg-card border-2 border-amber-500 text-xs font-black text-amber-500 shadow-sm uppercase tracking-wide">
                  🏆 CHAMPIONSHIP MATCH • {{ grandFinalMatch.overs }}
                </span>
              </div>

              <!-- Finalist 2 -->
              <div class="flex items-center justify-between py-3 px-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 my-2">
                <div class="flex items-center gap-3 truncate">
                  <div class="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                    {{ grandFinalMatch.teamB.shortName }}
                  </div>
                  <div>
                    <span class="text-xs sm:text-base font-black text-foreground block truncate">
                      {{ locale === 'bn' ? grandFinalMatch.teamB.nameBn : grandFinalMatch.teamB.nameEn }}
                    </span>
                    <span class="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase">
                      {{ locale === 'bn' ? '২য় সেমিফাইনাল থেকে বিজয়ী' : 'Winner of Semi Final 2' }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Match Venue and Date Timing (Centered) -->
              <div class="pt-4 mt-3 border-t border-border/70 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-center">
                <div class="flex items-center gap-1.5 text-foreground font-bold">
                  <span>📅</span>
                  <span>{{ locale === 'bn' ? grandFinalMatch.dateBn : grandFinalMatch.dateEn }}</span>
                </div>
                <span class="text-border hidden sm:inline">•</span>
                <div class="flex items-center gap-1.5 text-[#FF3D00] font-black">
                  <span>⏰</span>
                  <span>{{ locale === 'bn' ? grandFinalMatch.timeBn : grandFinalMatch.timeEn }}</span>
                </div>
                <span class="text-border hidden sm:inline">•</span>
                <div class="flex items-center gap-1.5 text-muted-foreground font-medium">
                  <span>📍</span>
                  <span>{{ locale === 'bn' ? grandFinalMatch.venueBn : grandFinalMatch.venueEn }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ========================================== -->
        <!-- TREE CONNECTOR: FINAL BRANCHING DOWN TO SEMIS -->
        <!-- ========================================== -->
        <div class="relative py-2 flex flex-col items-center max-w-4xl mx-auto">
          <!-- Upper Stem from Grand Final -->
          <div class="w-0.5 h-6 bg-gradient-to-b from-amber-500 to-border"></div>
          
          <!-- Horizontal Branching Bar into Left (SF1) and Right (SF2) -->
          <div class="w-full hidden md:flex items-center justify-between relative px-20">
            <div class="w-1/2 h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-2xl"></div>
            <div class="w-1/2 h-8 border-t-2 border-r-2 border-blue-500/50 rounded-tr-2xl"></div>
          </div>

          <!-- Central Branch Pill -->
          <div class="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-card border-2 border-blue-500/40 text-xs font-black text-foreground shadow-xs -mt-2 md:-mt-4 relative z-10 text-center">
            <span class="text-blue-500 font-bold">↑</span>
            <span>{{ locale === 'bn' ? 'দুই সেমিফাইনাল বিজয়ী উঠেছে ফাইনালে' : 'Semi-Final Victors Converge to Final' }}</span>
            <span class="text-blue-500 font-bold">↑</span>
          </div>

          <!-- Lower Stems pointing to Semis -->
          <div class="w-0.5 h-5 bg-gradient-to-b from-border to-blue-500 md:hidden"></div>
        </div>

        <!-- ========================================== -->
        <!-- ROW 2: SEMI-FINALS (2 MATCHES) -->
        <!-- ========================================== -->
        <div class="space-y-6">
          

          <!-- 2 Semi-Final Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              v-for="(match, sIdx) in semiFinalMatches"
              :key="match.id"
              class="relative group bg-gradient-to-br from-card via-card to-blue-500/5 border-2 border-blue-500/35 hover:border-blue-500 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <!-- Card Top Header -->
              <div>
                <div class="flex items-center justify-between pb-3 mb-3 border-b border-border/60 text-xs font-bold text-muted-foreground">
                  <span class="px-2.5 py-1 rounded-lg bg-blue-500/15 text-blue-600 dark:text-blue-400 font-black flex items-center gap-1.5">
                    <span>⚡</span>
                    <span>{{ locale === 'bn' ? match.stageBn : match.stageEn }}</span>
                  </span>
                  <span>📅 {{ locale === 'bn' ? match.dateBn.split(',')[0] : match.dateEn.split(',')[0] }}</span>
                </div>

                <!-- Team A -->
                <div class="flex items-center justify-between py-2.5 px-3 rounded-2xl bg-muted/50 my-2">
                  <div class="flex items-center gap-2.5 truncate">
                    <div :class="['w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-black shrink-0 shadow-xs', match.teamA.color]">
                      {{ match.teamA.shortName }}
                    </div>
                    <span class="text-xs sm:text-sm font-black text-foreground truncate">
                      {{ locale === 'bn' ? match.teamA.nameBn : match.teamA.nameEn }}
                    </span>
                  </div>
                </div>

                <!-- VS Badge -->
                <div class="flex items-center justify-center my-0.5 relative z-10">
                  <span class="px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25 text-[10px] font-black uppercase shadow-2xs">
                    KNOCKOUT • {{ match.overs }}
                  </span>
                </div>

                <!-- Team B -->
                <div class="flex items-center justify-between py-2.5 px-3 rounded-2xl bg-muted/50 my-2">
                  <div class="flex items-center gap-2.5 truncate">
                    <div :class="['w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-black shrink-0 shadow-xs', match.teamB.color]">
                      {{ match.teamB.shortName }}
                    </div>
                    <span class="text-xs sm:text-sm font-black text-foreground truncate">
                      {{ locale === 'bn' ? match.teamB.nameBn : match.teamB.nameEn }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Footer (Centered) -->
              <div class="pt-3.5 mt-3 border-t border-border/50 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground text-center">
                <span class="truncate">📍 {{ locale === 'bn' ? match.venueBn : match.venueEn }}</span>
                <span class="text-border hidden sm:inline">•</span>
                <span class="text-blue-600 dark:text-blue-400 font-black">⏰ {{ locale === 'bn' ? match.timeBn : match.timeEn }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ========================================== -->
        <!-- TREE CONNECTOR: SEMIS BRANCHING DOWN TO GROUP STAGE -->
        <!-- ========================================== -->
        <div class="relative py-2 flex flex-col items-center max-w-4xl mx-auto">
          <!-- Horizontal merging line from SF1 & SF2 into center -->
          <div class="w-full hidden md:flex items-center justify-center relative px-20">
            <div class="w-3/4 h-8 border-b-2 border-x-2 border-border/80 rounded-b-2xl"></div>
          </div>
          
          <div class="w-0.5 h-4 bg-border"></div>

          <!-- Central Qualification Pill -->
          <div class="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-card border-2 border-emerald-500/40 text-xs font-black text-foreground shadow-xs my-1 relative z-10 text-center">
            <span class="text-emerald-500 font-bold">↑</span>
            <span>{{ locale === 'bn' ? 'গ্রুপ পর্বের পয়েন্ট টেবিলের শীর্ষ ৪ দল উঠেছে সেমিতে' : 'Top 4 from Group Stage Qualified for Semis' }}</span>
            <span class="text-emerald-500 font-bold">↑</span>
          </div>

          <!-- Downward stem into Group Stage -->
          <div class="w-0.5 h-5 bg-gradient-to-b from-border to-emerald-500"></div>
        </div>

        <!-- ========================================== -->
        <!-- ROW 3: QUALIFIERS / GROUP STAGE (3 MATCHES) -->
        <!-- ========================================== -->
        <div class="space-y-6">
          

          <!-- 3 Qualifier Cards Grid (Constrained to max-w-5xl and centered) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div
              v-for="(match, mIdx) in round1Matches"
              :key="match.id"
              class="relative group bg-card border border-border/80 hover:border-emerald-500/60 rounded-3xl p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <!-- Card Top Header -->
              <div>
                <div class="flex items-center justify-between pb-3 mb-3 border-b border-border/60 text-xs font-bold text-muted-foreground">
                  <span class="px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-black">
                    #{{ mIdx + 1 }} {{ locale === 'bn' ? match.stageBn : match.stageEn }}
                  </span>
                  <span>📅 {{ locale === 'bn' ? match.dateBn.split(',')[0] : match.dateEn.split(',')[0] }}</span>
                </div>

                <!-- Team A Row -->
                <div class="flex items-center justify-between py-2.5 px-3 rounded-2xl bg-muted/40 hover:bg-muted/70 transition-colors my-1.5">
                  <div class="flex items-center gap-2.5 truncate">
                    <div :class="['w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-black shrink-0 shadow-xs', match.teamA.color]">
                      {{ match.teamA.shortName }}
                    </div>
                    <span class="text-xs sm:text-sm font-bold text-foreground truncate">
                      {{ locale === 'bn' ? match.teamA.nameBn : match.teamA.nameEn }}
                    </span>
                  </div>
                  <RouterLink
                    v-if="getClubSlug(match.teamA.shortName)"
                    :to="`/sports/${getClubSlug(match.teamA.shortName)}`"
                    class="text-xs text-[#FF3D00] hover:underline font-black shrink-0 ml-2"
                    :title="match.teamA.nameEn"
                  >
                    &nearr;
                  </RouterLink>
                </div>

                <!-- Center VS Divider -->
                <div class="flex items-center justify-center my-0.5 relative z-10">
                  <span class="px-3 py-0.5 rounded-full bg-card border border-border text-[10px] font-black text-muted-foreground uppercase shadow-2xs">
                    VS • {{ match.overs }}
                  </span>
                </div>

                <!-- Team B Row -->
                <div class="flex items-center justify-between py-2.5 px-3 rounded-2xl bg-muted/40 hover:bg-muted/70 transition-colors my-1.5">
                  <div class="flex items-center gap-2.5 truncate">
                    <div :class="['w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-black shrink-0 shadow-xs', match.teamB.color]">
                      {{ match.teamB.shortName }}
                    </div>
                    <span class="text-xs sm:text-sm font-bold text-foreground truncate">
                      {{ locale === 'bn' ? match.teamB.nameBn : match.teamB.nameEn }}
                    </span>
                  </div>
                  <RouterLink
                    v-if="getClubSlug(match.teamB.shortName)"
                    :to="`/sports/${getClubSlug(match.teamB.shortName)}`"
                    class="text-xs text-[#FF3D00] hover:underline font-black shrink-0 ml-2"
                    :title="match.teamB.nameEn"
                  >
                    &nearr;
                  </RouterLink>
                </div>
              </div>

              <!-- Match Card Footer (Centered) -->
              <div class="pt-3 mt-3 border-t border-border/50 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground text-center">
                <span class="truncate">📍 {{ locale === 'bn' ? match.venueBn.split(' ')[0] : match.venueEn.split(' ')[0] }}</span>
                <span class="text-border hidden sm:inline">•</span>
                <span class="text-[#FF3D00] font-black">⏰ {{ locale === 'bn' ? match.timeBn : match.timeEn }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- ========================================== -->
      <!-- VIEW 2: LIST / FILTERED CARDS VIEW -->
      <!-- ========================================== -->
      <div v-else class="space-y-6">
        
        <!-- Filters Strip -->
        <div class="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
          
          <!-- Stage Filter Buttons -->
          <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <button
              type="button"
              :class="[
                'px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap',
                selectedStage === 'all'
                  ? 'bg-[#FF3D00] text-white shadow-xs'
                  : 'bg-muted text-foreground/80 hover:text-foreground hover:bg-muted/80 border border-border/50',
              ]"
              @click="selectedStage = 'all'"
            >
              {{ locale === 'bn' ? 'সকল ম্যাচ' : 'All Matches' }}
            </button>
            <button
              type="button"
              :class="[
                'px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap',
                selectedStage === 'league'
                  ? 'bg-[#FF3D00] text-white shadow-xs'
                  : 'bg-muted text-foreground/80 hover:text-foreground hover:bg-muted/80 border border-border/50',
              ]"
              @click="selectedStage = 'league'"
            >
              {{ locale === 'bn' ? 'লীগ পর্ব' : 'League Matches' }}
            </button>
            <button
              type="button"
              :class="[
                'px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap',
                selectedStage === 'playoffs'
                  ? 'bg-[#FF3D00] text-white shadow-xs'
                  : 'bg-muted text-foreground/80 hover:text-foreground hover:bg-muted/80 border border-border/50',
              ]"
              @click="selectedStage = 'playoffs'"
            >
              {{ locale === 'bn' ? 'সেমিফাইনাল ও ফাইনাল' : 'Playoffs & Final' }}
            </button>
          </div>

          <!-- Filter By Specific Team -->
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-muted-foreground whitespace-nowrap">
              {{ locale === 'bn' ? 'দল বাছাই:' : 'Filter Team:' }}
            </span>
            <select
              v-model="selectedClub"
              class="px-3.5 py-2 rounded-xl bg-card border border-border text-foreground text-xs font-bold cursor-pointer outline-none focus:border-[#FF3D00] shadow-xs"
            >
              <option value="all">{{ locale === 'bn' ? 'সকল দল' : 'All Teams' }}</option>
              <option v-for="c in CRICKET_CLUBS" :key="c.id" :value="c.shortName">
                {{ locale === 'bn' ? c.nameBn : c.nameEn }} ({{ c.shortName }})
              </option>
            </select>
          </div>

        </div>

        <!-- Match Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(match, mIdx) in filteredMatches"
            :key="match.id"
            class="bg-card border border-border/80 hover:border-[#FF3D00]/50 rounded-2xl sm:rounded-3xl p-6 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <!-- Match Header -->
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-border/60 gap-2 flex-wrap">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-md bg-[#FF3D00]/10 text-[#FF3D00] text-[11px] font-black uppercase tracking-wider">
                    {{ locale === 'bn' ? match.stageBn : match.stageEn }}
                  </span>
                  <span class="text-xs text-muted-foreground font-semibold">
                    {{ match.overs }}
                  </span>
                </div>
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{{ locale === 'bn' ? 'আসন্ন ম্যাচ' : 'Upcoming' }}</span>
                </div>
              </div>

              <!-- Versus Match Card -->
              <div class="bg-muted/40 rounded-2xl p-4 my-2 border border-border/50">
                <div class="grid grid-cols-7 items-center gap-2">
                  
                  <!-- Team A -->
                  <div class="col-span-3 flex flex-col items-center text-center gap-2">
                    <div
                      :class="[
                        'w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-black shadow-md',
                        match.teamA.color
                      ]"
                    >
                      {{ match.teamA.shortName }}
                    </div>
                    <span class="text-sm font-bold text-foreground leading-tight">
                      {{ locale === 'bn' ? match.teamA.nameBn : match.teamA.nameEn }}
                    </span>
                    <RouterLink
                      v-if="getClubSlug(match.teamA.shortName)"
                      :to="`/sports/${getClubSlug(match.teamA.shortName)}`"
                      class="text-[10px] font-bold text-[#FF3D00] hover:underline"
                    >
                      {{ locale === 'bn' ? 'স্কোয়াড দেখুন &rarr;' : 'View Squad &rarr;' }}
                    </RouterLink>
                  </div>

                  <!-- VS Badge -->
                  <div class="col-span-1 flex flex-col items-center justify-center">
                    <div class="w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center text-[10px] font-black text-muted-foreground shadow-xs">
                      VS
                    </div>
                  </div>

                  <!-- Team B -->
                  <div class="col-span-3 flex flex-col items-center text-center gap-2">
                    <div
                      :class="[
                        'w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-black shadow-md',
                        match.teamB.color
                      ]"
                    >
                      {{ match.teamB.shortName }}
                    </div>
                    <span class="text-sm font-bold text-foreground leading-tight">
                      {{ locale === 'bn' ? match.teamB.nameBn : match.teamB.nameEn }}
                    </span>
                    <RouterLink
                      v-if="getClubSlug(match.teamB.shortName)"
                      :to="`/sports/${getClubSlug(match.teamB.shortName)}`"
                      class="text-[10px] font-bold text-[#FF3D00] hover:underline"
                    >
                      {{ locale === 'bn' ? 'স্কোয়াড দেখুন &rarr;' : 'View Squad &rarr;' }}
                    </RouterLink>
                  </div>

                </div>
              </div>
            </div>

            <!-- Match Timing & Venue Footer -->
            <div class="mt-4 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-muted-foreground gap-2">
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#FF3D00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span class="font-bold text-foreground">{{ locale === 'bn' ? match.dateBn : match.dateEn }}</span>
                <span>•</span>
                <span class="text-[#FF3D00] font-black">{{ locale === 'bn' ? match.timeBn : match.timeEn }}</span>
              </div>

              <div class="flex items-center gap-1.5 truncate">
                <svg class="w-3.5 h-3.5 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span class="truncate">{{ locale === 'bn' ? match.venueBn : match.venueEn }}</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Bottom Banner Linking Back to Clubs Directory -->
      <div class="p-8 rounded-3xl bg-card border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 class="text-xl font-black text-foreground mb-1">
            {{ locale === 'bn' ? 'টুর্নামেন্টে অংশগ্রহণকারী সকল ক্লাব সম্পর্কে জানতে চান?' : 'Want to know more about the competing clubs?' }}
          </h3>
          <p class="text-xs sm:text-sm text-muted-foreground">
            {{ locale === 'bn'
              ? 'ক্লাবের প্রতিষ্ঠা, অর্জন, খেলোয়াড় ও হোম গ্রাউন্ডের বিস্তারিত তথ্য দেখুন।'
              : 'Explore club profiles, player lineups, trophies, and home ground locations.' }}
          </p>
        </div>
        <RouterLink
          to="/sports"
          class="px-6 py-3 rounded-full bg-[#FF3D00] hover:bg-[#E03600] text-white text-xs font-bold no-underline transition-colors shrink-0 shadow-sm"
        >
          {{ locale === 'bn' ? 'ক্রিকেট ক্লাবসমূহ দেখুন &rarr;' : 'Explore All Clubs &rarr;' }}
        </RouterLink>
      </div>

    </div>
  </div>
</template>
