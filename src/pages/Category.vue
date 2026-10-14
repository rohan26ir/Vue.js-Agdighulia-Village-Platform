<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Heading from '@/components/ui/Heading.vue'
import { useLanguage } from '@/composables/useLanguage'

const route = useRoute()
const { t } = useLanguage()

const categoryType = computed(() => {
  const path = route.path.toLowerCase()
  if (path.includes('institute')) return 'institute'
  if (path.includes('hospital')) return 'hospital'
  if (path.includes('sports')) return 'sports'
  return 'institute'
})

const categoryDetails = computed(() => {
  switch (categoryType.value) {
    case 'institute':
      return {
        badge: t('nav.institute'),
        title: 'Educational Institutions in Agdighulia',
        desc: 'Discover primary schools, high schools, madrasas, and learning centers serving our village community.',
        icon: '🎓',
        items: [
          { title: 'Agdighulia Government Primary School', desc: 'Established in 1968, nurturing young minds in our village.' },
          { title: 'Agdighulia High School & College', desc: 'Providing secondary and higher secondary education for local youth.' },
          { title: 'Village Community Madrasa & Library', desc: 'Religious education and community resource library for all age groups.' }
        ]
      }
    case 'hospital':
      return {
        badge: t('nav.hospital'),
        title: 'Healthcare & Medical Centers',
        desc: 'Access emergency contact numbers, health clinics, and medical care services in and around Agdighulia.',
        icon: '🏥',
        items: [
          { title: 'Agdighulia Union Family Welfare Center', desc: 'Providing primary health checks, maternal care, and immunization.' },
          { title: 'Nagorpur Upazila Health Complex', desc: 'Central upazila hospital for emergency care and specialized doctors.' },
          { title: 'Community Pharmacy & Telemedicine', desc: 'Local medicine shop offering 24/7 basic healthcare assistance.' }
        ]
      }
    case 'sports':
      return {
        badge: t('nav.sports'),
        title: 'Sports & Recreational Activities',
        desc: 'Explore village football grounds, cricket clubs, annual tournaments, and youth sports events.',
        icon: '⚽',
        items: [
          { title: 'Agdighulia Central Sports Ground', desc: 'Main playground for football matches, sports day, and cultural fairs.' },
          { title: 'Agdighulia Youth Cricket Club', desc: 'Organizing seasonal village tournaments and youth training.' },
          { title: 'Traditional Boat Race & Ha-Du-Du', desc: 'Annual traditional sports celebrations during festive seasons.' }
        ]
      }
  }
})
</script>

<template>
  <div class="bg-background text-foreground min-h-screen py-16 lg:py-24">
    <div class="max-w-[90%] lg:max-w-5xl mx-auto px-4">
      
      <!-- Page Header -->
      <Heading
        as="h1"
        size="lg"
        badgeVariant="subtle"
        :badge="categoryDetails.badge"
        :badgeIcon="categoryDetails.icon"
        :title="categoryDetails.title"
        :description="categoryDetails.desc"
        class="mb-16"
      />

      <!-- Items Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, idx) in categoryDetails.items"
          :key="idx"
          class="bg-card text-card-foreground border border-border p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="w-12 h-12 rounded-2xl bg-[#FF3D00]/10 text-[#FF3D00] flex items-center justify-center font-bold text-xl mb-6">
              0{{ idx + 1 }}
            </div>
            <h3 class="text-xl font-bold mb-3 text-foreground">{{ item.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ item.desc }}</p>
          </div>
          <div class="mt-8 pt-4 border-t border-border flex items-center text-xs font-bold text-[#FF3D00]">
            <span>Agdighulia Community</span>
            <span class="ml-auto">&rarr;</span>
          </div>
        </div>
      </div>

      <!-- Back Link -->
      <div class="mt-16 text-center">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 bg-muted text-foreground px-6 py-3 rounded-full text-sm font-bold no-underline hover:bg-border transition-colors"
        >
          &larr; {{ t('about.backHome') }}
        </RouterLink>
      </div>

    </div>
  </div>
</template>
