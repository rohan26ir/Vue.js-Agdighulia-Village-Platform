<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import { INSTITUTES } from '@/data/institutes'

const route = useRoute()
const { locale } = useLanguage()

const institute = computed(() => {
  const slug = route.params.slug as string
  return INSTITUTES.find((i) => i.slug === slug || i.id === slug)
})
</script>

<template>
  <div class="institute-detail-page min-h-screen bg-background text-foreground py-10 md:py-16">
    <div class="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
      
      

      <!-- Institute Not Found Alert -->
      <div v-if="!institute" class="text-center py-20 bg-card border border-border rounded-3xl p-8">
        <h2 class="text-2xl font-bold text-foreground mb-3">
          {{ locale === 'bn' ? 'প্রতিষ্ঠানটি পাওয়া যায়নি' : 'Institute Not Found' }}
        </h2>
        <p class="text-sm text-muted-foreground max-w-md mx-auto mb-6">
          {{ locale === 'bn'
            ? 'আপনার অনুরোধকৃত প্রতিষ্ঠানের কোনো তথ্য পাওয়া যায়নি।'
            : 'The educational institute you requested could not be found.' }}
        </p>
        <RouterLink
          to="/institute"
          class="px-6 py-2.5 rounded-full bg-[#FF3D00] text-white font-bold text-xs hover:bg-[#E03600] transition-colors no-underline"
        >
          {{ locale === 'bn' ? 'তালিকা দেখুন' : 'View Institutes List' }}
        </RouterLink>
      </div>

      <!-- Main Detail View Container -->
      <div v-else class="flex flex-col gap-10">
        
        <!-- Hero Banner Header -->
        <div class="relative rounded-3xl overflow-hidden border border-border shadow-xl h-80 sm:h-96">
          <img
            :src="institute.image"
            :alt="institute.nameEn"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>

          <!-- Top Overlay Badges -->
          <div class="absolute top-6 left-6 right-6 flex items-center justify-between">
            <span class="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FF3D00] text-white shadow-md">
              {{ locale === 'bn' ? institute.categoryBn : institute.category }}
            </span>
            <span class="px-4 py-1.5 rounded-full text-xs font-extrabold bg-black/70 text-white backdrop-blur-md border border-white/20">
              Est. {{ institute.established }}
            </span>
          </div>

          <!-- Bottom Title & Address Overlay -->
          <div class="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
            <h1 class="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight drop-shadow-lg mb-2">
              {{ locale === 'bn' ? institute.nameBn : institute.nameEn }}
            </h1>
            <p class="text-xs sm:text-sm text-white/80 font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#FF3D00] shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{{ locale === 'bn' ? institute.addressBn : institute.addressEn }}</span>
            </p>
          </div>
        </div>

        <!-- 2-Column Details Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: Overview, Features & Academic Programs -->
          <div class="lg:col-span-8 space-y-8">
            
            <!-- About Section -->
            <div class="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 class="text-xl font-extrabold text-foreground mb-4 flex items-center gap-2">
                <span>📖</span>
                <span>{{ locale === 'bn' ? 'প্রতিষ্ঠান পরিচিতি' : 'About the Institute' }}</span>
              </h2>
              <p class="text-base text-muted-foreground leading-relaxed">
                {{ locale === 'bn' ? institute.detailedDescBn : institute.detailedDescEn }}
              </p>
            </div>

            <!-- Facilities & Key Features Checklist -->
            <div class="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 class="text-xl font-extrabold text-foreground mb-6 flex items-center gap-2">
                <span>✨</span>
                <span>{{ locale === 'bn' ? 'সুযোগ-সুবিধাসমূহ' : 'Facilities & Key Highlights' }}</span>
              </h2>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  v-for="(feat, idx) in (locale === 'bn' ? institute.featuresBn : institute.featuresEn)"
                  :key="idx"
                  class="flex items-center gap-3 p-3.5 rounded-2xl bg-muted/60 border border-border/60 text-sm font-semibold text-foreground"
                >
                  <span class="w-7 h-7 rounded-xl bg-[#FF3D00]/15 text-[#FF3D00] flex items-center justify-center font-black text-xs shrink-0">✓</span>
                  <span>{{ feat }}</span>
                </div>
              </div>
            </div>

            <!-- Academic Offerings -->
            <div class="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 class="text-xl font-extrabold text-foreground mb-4 flex items-center gap-2">
                <span>🎓</span>
                <span>{{ locale === 'bn' ? 'পাঠদান পর্যায়' : 'Academic Programs Offered' }}</span>
              </h2>
              <div class="p-4 rounded-2xl bg-muted/50 border border-border flex items-center gap-4">
                <span class="w-10 h-10 rounded-2xl bg-[#FF3D00] text-white font-bold flex items-center justify-center text-lg shrink-0">📚</span>
                <div>
                  <span class="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {{ locale === 'bn' ? 'শ্রেণীসমূহ' : 'Offered Grades' }}
                  </span>
                  <span class="text-base font-bold text-foreground">
                    {{ locale === 'bn' ? institute.gradesBn : institute.gradesEn }}
                  </span>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: Quick Stats, Headmaster & Contact Box -->
          <div class="lg:col-span-4 space-y-6">
            
            <!-- Quick Info Box -->
            <div class="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-5">
              <h3 class="text-base font-extrabold text-foreground border-b border-border/60 pb-3">
                {{ locale === 'bn' ? 'সংক্ষিপ্ত তথ্য' : 'Quick Facts' }}
              </h3>

              <!-- Principal / Headmaster -->
              <div class="flex items-start gap-3">
                <span class="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-base shrink-0">👔</span>
                <div>
                  <span class="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {{ locale === 'bn' ? 'প্রধান শিক্ষক / অধ্যক্ষ' : 'Headmaster / Principal' }}
                  </span>
                  <span class="text-sm font-bold text-foreground">
                    {{ locale === 'bn' ? institute.headmasterBn : institute.headmasterEn }}
                  </span>
                </div>
              </div>

              <!-- Students Count -->
              <div class="flex items-start gap-3">
                <span class="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-base shrink-0">👨‍🎓</span>
                <div>
                  <span class="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {{ locale === 'bn' ? 'মোট শিক্ষার্থী' : 'Total Students' }}
                  </span>
                  <span class="text-sm font-bold text-foreground">
                    {{ institute.studentsCount }}
                  </span>
                </div>
              </div>

              <!-- Teachers Count -->
              <div class="flex items-start gap-3">
                <span class="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-base shrink-0">👩‍🏫</span>
                <div>
                  <span class="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {{ locale === 'bn' ? 'শিক্ষকমণ্ডলী' : 'Faculty Members' }}
                  </span>
                  <span class="text-sm font-bold text-foreground">
                    {{ institute.teachersCount }} Teachers
                  </span>
                </div>
              </div>

              <!-- Established -->
              <div class="flex items-start gap-3">
                <span class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-base shrink-0">🏛️</span>
                <div>
                  <span class="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {{ locale === 'bn' ? 'প্রতিষ্ঠাকাল' : 'Established Year' }}
                  </span>
                  <span class="text-sm font-bold text-foreground">
                    {{ institute.established }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Direct Contact Box -->
            <div class="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
              <h3 class="text-base font-extrabold text-foreground border-b border-border/60 pb-3">
                {{ locale === 'bn' ? 'যোগাযোগ' : 'Get In Touch' }}
              </h3>

              <div class="flex flex-col gap-2">
                <a
                :href="`tel:${institute.phone}`"
                class="mb-4 flex items-center gap-3 p-3 rounded-2xl bg-muted/50 hover:bg-[#FF3D00] hover:text-white transition-colors no-underline text-foreground text-xs font-bold group"
              >
                <span class="w-8 h-8 rounded-xl bg-[#FF3D00]/10 text-[#FF3D00] group-hover:bg-white group-hover:text-[#FF3D00] flex items-center justify-center text-sm shrink-0">📞</span>
                <span class="truncate">{{ institute.phone }}</span>
              </a>

              <a
                :href="`mailto:${institute.email}`"
                class="flex items-center gap-3 p-3 rounded-2xl bg-muted/50 hover:bg-[#FF3D00] hover:text-white transition-colors no-underline text-foreground text-xs font-bold group"
              >
                <span class="w-8 h-8 rounded-xl bg-[#FF3D00]/10 text-[#FF3D00] group-hover:bg-white group-hover:text-[#FF3D00] flex items-center justify-center text-sm shrink-0">✉️</span>
                <span class="truncate">{{ institute.email }}</span>
              </a>
              </div>
            </div>

            <!-- View on Interactive Map CTA -->
            <div class="py-8 flex flex-col gap-2 bg-gradient-to-br from-[#FF3D00] to-[#E03600] text-white rounded-3xl p-6 shadow-lg text-center space-y-3">
              <!-- <span class="text-3xl block">🗺️</span> -->
              <h4 class="text-lg font-extrabold">
                {{ locale === 'bn' ? 'মানচিত্রে দেখুন' : 'Locate on Village Map' }}
              </h4>
              <p class="text-xs text-white/90 leading-relaxed">
                {{ locale === 'bn' ? 'ইন্টারেক্টিভ ম্যাপে এই স্কুলের অবস্থান ও সীমানা দেখুন।' : 'Find exact landmarks and coordinates on our interactive map.' }}
              </p>
              <RouterLink
                to="/map"
                class="inline-block w-full py-3 rounded-2xl bg-white text-black font-extrabold text-xs shadow-md hover:bg-zinc-100 transition-colors no-underline"
              >
                <span class="text-black">{{ locale === 'bn' ? 'ম্যাপ খুলুন' : 'Open Village Map' }}</span>
              </RouterLink>
            </div>

          </div>

        </div>

      </div>


      <!-- Back Button & Breadcrumbs -->
      <div class="mb-6 flex items-center justify-between">
        <RouterLink
          to="/institute"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-black dark:text-white hover:text-foreground hover:border-[#FF3D00] text-xs font-bold transition-all no-underline shadow-xs"
        >
          <span class="text-black">&larr;</span>
          <span class="text-black">{{ locale === 'bn' ? 'সকল প্রতিষ্ঠানে ফিরে যান' : 'Back to All Institutes' }}</span>
        </RouterLink>
      </div>

    </div>
  </div>
</template>
