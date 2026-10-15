<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Heading from '@/components/ui/Heading.vue'
import { useLanguage } from '@/composables/useLanguage'
import { INSTITUTES, type Institute } from '@/data/institutes'

const { locale } = useLanguage()

interface InstituteCardMeta {
  typeEn: string
  typeBn: string
//   rating: string
//   stars: number
  programsEn: string
  programsBn: string
  facilitiesEn: string[]
  facilitiesBn: string[]
}

const getInstituteMeta = (inst: Institute): InstituteCardMeta => {
  switch (inst.id) {
    case 'augdighuliya-primary-school':
      return {
        typeEn: 'Public',
        typeBn: 'সরকারি',
        programsEn: 'Class 1-5 • Primary • Co-education • Morning Shift',
        programsBn: '১ম - ৫ম শ্রেণি • প্রাথমিক • সহশিক্ষা • প্রাতঃকালীন',
        facilitiesEn: ['Playground', 'Stationary', 'Library', 'Hostel', 'Canteen'],
        facilitiesBn: ['খেলার মাঠ', 'স্টেশনারি', 'লাইব্রেরি', 'হোস্টেল', 'ক্যান্টিন'],
      }
    case 'm-borhan-high-school':
      return {
        typeEn: 'Private',
        typeBn: 'এমপিওভুক্ত',
        programsEn: 'Science • Arts • Business • SSC • Regular',
        programsBn: 'বিজ্ঞান • মানবিক • ব্যবসায় শিক্ষা • এসএসসি',
        facilitiesEn: ['Gym', 'Canteen', 'Stationary', 'Library', 'Playground', 'Hostel'],
        facilitiesBn: ['জিমনেসিয়াম', 'ক্যান্টিন', 'স্টেশনারি', 'লাইব্রেরি', 'খেলার মাঠ', 'হোস্টেল'],
      }
    case 'sadhona-school-college':
      return {
        typeEn: 'Private',
        typeBn: 'কলেজ শাখা',
        programsEn: 'HSC • Degree • Science • Arts • Commerce',
        programsBn: 'এইচএসসি • ডিগ্রি • বিজ্ঞান • কলা • বাণিজ্য',
        facilitiesEn: ['Auditorium', 'Science Lab', 'Library', 'Hostel', 'Playground', 'Canteen'],
        facilitiesBn: ['মিলনায়তন', 'বিজ্ঞানাগার', 'লাইব্রেরি', 'হোস্টেল', 'খেলার মাঠ', 'ক্যান্টিন'],
      }
    case 'sopnonir-kindergarten':
      return {
        typeEn: 'Private',
        typeBn: 'ব্যক্তিগত',
        programsEn: 'Play • Nursery • KG • Pre-School • Day Care',
        programsBn: 'প্লে • নার্সারি • কেজি • প্রি-স্কুল • শিশু যত্ন',
        facilitiesEn: ['Playground', 'Toy Room', 'Library', 'Activity Lab', 'Canteen'],
        facilitiesBn: ['খেলার মাঠ', 'খেলনা কর্নার', 'লাইব্রেরি', 'অ্যাক্টিভিটি ল্যাব', 'ক্যান্টিন'],
      }
    default:
      return {
        typeEn: 'Public',
        typeBn: 'প্রতিষ্ঠান',
        programsEn: 'Regular Curriculum • Co-education',
        programsBn: 'নিয়মিত পাঠ্যক্রম • সহশিক্ষা',
        facilitiesEn: ['Playground', 'Stationary', 'Library', 'Hostel', 'Canteen'],
        facilitiesBn: ['খেলার মাঠ', 'স্টেশনারি', 'লাইব্রেরি', 'হোস্টেল', 'ক্যান্টিন'],
      }
  }
}
</script>

<template>
  <div class="institute-page min-h-screen bg-background text-foreground py-12 md:py-20">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Page Header -->
      <div class="py-6 sm:py-10 mb-6 sm:mb-10">
        <Heading
          as="h1"
          size="xl"
          maxWidth="5xl"
          badgeIcon="🎓"
          :badge="locale === 'bn' ? 'শিক্ষা ও বিদ্যাপিঠ' : 'Education & Institutes'"
          :description="
            locale === 'bn'
              ? 'আগদিঘুলিয়ার আগামী প্রজন্মকে আলোকিত করতে পরিচালিত প্রাথমিক, মাধ্যমিক ও শিক্ষা প্রতিষ্ঠানসমূহ।'
              : 'Explore the schools, madrasas, and learning centers inspiring students in Agdighulia.'
          "
        >
          <template #title>
            <template v-if="locale === 'bn'">
              জ্ঞানের আলো আর
              <br class="hidden sm:inline" />
              <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
                শিক্ষায়
              </span>
              গড়ে ওঠা আমাদের
              <span class="text-[#FF3D00] font-extrabold">ভবিষ্যৎ।</span>
            </template>
            <template v-else>
              Empowering minds through
              <br class="hidden sm:inline" />
              <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
                education
              </span>
              and lifelong
              <span class="text-[#FF3D00] font-extrabold">learning.</span>
            </template>
          </template>
        </Heading>
      </div>

      <!-- 2-Column Card Grid (Matching Reference Image Design) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        
        <div
          v-for="(inst, index) in INSTITUTES"
          :key="inst.id"
          class="group relative bg-card border border-border/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <!-- Top Cover Image Area with Floating Badges -->
          <div class="relative w-full h-60 sm:h-72 bg-muted shrink-0 select-none">
            <!-- Image with its own overflow-hidden -->
            <div class="w-full h-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
              <img
                :src="inst.image"
                :alt="inst.nameEn"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <!-- Bottom-Right: Public / Private Pill (Moved from content body) -->
            <div class="absolute bottom-3.5 right-4 bg-zinc-900/90 dark:bg-zinc-800/95 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md z-10 flex items-center gap-1 border border-white/20 dark:border-zinc-700">
              <span>{{ locale === 'bn' ? getInstituteMeta(inst).typeBn : getInstituteMeta(inst).typeEn }}</span>
            </div>

            <!-- Bottom-Left: Overlapping Logo Crest (z-20 & fully visible) -->
            <div class="absolute -bottom-7 left-6 w-14 h-14 bg-white dark:bg-zinc-800 rounded-xl p-1.5 shadow-xl border-2 border-white dark:border-zinc-700 flex items-center justify-center z-20">
              <!-- Crest 1: Oxford/Cambridge style shield for Primary School -->
              <div v-if="index === 0" class="w-full h-full rounded-lg bg-red-700 flex items-center justify-center text-white shadow-xs p-1">
                <svg viewBox="0 0 24 24" class="w-8 h-8 fill-amber-300 stroke-red-950" stroke-width="0.8">
                  <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z"/>
                  <path d="M7 10h10M12 6v8" stroke="white" stroke-width="1.5"/>
                </svg>
              </div>

              <!-- Crest 2: Circular seal for High School -->
              <div v-else-if="index === 1" class="w-full h-full rounded-full border-2 border-zinc-700 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center p-0.5">
                <span class="text-[9px] font-black tracking-tighter text-zinc-800 dark:text-zinc-100">MBHS</span>
                <span class="text-[6.5px] text-zinc-500 font-bold uppercase tracking-widest -mt-0.5">EST.72</span>
              </div>

              <!-- Crest 3: College shield for Sadhona College -->
              <div v-else-if="index === 2" class="w-full h-full rounded-lg bg-indigo-700 flex items-center justify-center text-white shadow-xs p-1">
                <svg viewBox="0 0 24 24" class="w-8 h-8 fill-amber-300 stroke-indigo-950" stroke-width="0.8">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/>
                  <path d="M8 11l4 4 4-4" stroke="white" stroke-width="1.5" fill="none"/>
                </svg>
              </div>

              <!-- Crest 4: Cheerful emblem for Sopnonir Kindergarten -->
              <div v-else class="w-full h-full rounded-lg bg-amber-500 flex flex-col items-center justify-center text-white shadow-xs p-1">
                <span class="text-[10px] font-black leading-none">SKG</span>
                <span class="text-[7px] font-bold text-amber-100">KIDS</span>
              </div>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-6 pt-10 sm:p-7 sm:pt-10 flex flex-col flex-1">
            
            

            <!-- Title -->
            <h2 class="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors py-3 leading-tight ">
              <RouterLink :to="`/institute/${inst.slug}`">
                {{ locale === 'bn' ? inst.nameBn : inst.nameEn }}
              </RouterLink>
            </h2>

            <!-- Address with Location Pin -->
            <p class="pb-1 text-sm text-muted-foreground flex items-center gap-1.5 mb-3">
              <svg class="w-4 h-4 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span class="truncate">{{ locale === 'bn' ? inst.addressBn : inst.addressEn }}</span>
            </p>

            <!-- Programs / Disciplines String (e.g. MBBS • Engineer • BBA • BCA • BSC) -->
            <p class="pb-4 text-xs sm:text-sm text-muted-foreground/80 font-medium mb-5 truncate">
              {{ locale === 'bn' ? getInstituteMeta(inst).programsBn : getInstituteMeta(inst).programsEn }}
            </p>

            <!-- Checkmark Facilities List (2 Columns) -->
            <div class="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-7 text-sm font-medium">
              <div
                v-for="(facility, fIdx) in (locale === 'bn' ? getInstituteMeta(inst).facilitiesBn : getInstituteMeta(inst).facilitiesEn)"
                :key="fIdx"
                class="flex items-center gap-2 text-foreground/85 dark:text-zinc-300"
              >
                <svg class="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span class="truncate">{{ facility }}</span>
              </div>
            </div>

            <!-- Right Bottom Link Icon (Reveals on Hover, White Icon) -->
            <RouterLink
              :to="`/institute/${inst.slug}`"
              :title="locale === 'bn' ? 'বিস্তারিত দেখুন' : 'View details'"
              :aria-label="locale === 'bn' ? 'বিস্তারিত দেখুন' : 'View details'"
              class="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 z-20 cursor-pointer"
            >
              <svg class="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </RouterLink>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>