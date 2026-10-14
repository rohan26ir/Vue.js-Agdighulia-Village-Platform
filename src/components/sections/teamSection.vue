<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

export interface TeamMember {
  name: string
  nameBn?: string
  role: string
  roleBn?: string
  image: string
  fallbackImage?: string
  socials: {
    website?: string
    linkedin?: string
    twitter?: string
  }
}

interface Props {
  badge?: string
  title?: string
  members?: TeamMember[]
}

const props = defineProps<Props>()

const { locale } = useLanguage()

const badgeText = computed(() => {
  if (props.badge) return props.badge
  return locale.value === 'bn' ? 'আমাদের দল' : 'Team'
})

const titleText = computed(() => {
  if (props.title) return props.title
  return locale.value === 'bn'
    ? 'আমাদের সফলতার পেছনের সৃজনশীল কারিগররা'
    : 'Meet the creative minds behind our success'
})

const defaultTeamData = computed<TeamMember[]>(() => [
  {
    name: locale.value === 'bn' ? 'লোগান ড্যাং' : 'Logan Dang',
    role: locale.value === 'bn' ? 'ওয়ার্ডপ্রেস ডেভেলপার' : 'WordPress Developer',
    image:
      'https://cdn.21st.dev/assets/localized/a15173e6535b3403cf75d3a251b152b66cb158540ae6fe0cef584477d25c296d.png',
    fallbackImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socials: {
      website: '#',
      linkedin: '#',
    },
  },
  {
    name: locale.value === 'bn' ? 'আনা বেলিচ' : 'Ana Belić',
    role: locale.value === 'bn' ? 'সোশ্যাল মিডিয়া স্পেশালিস্ট' : 'Social Media Specialist',
    image:
      'https://cdn.21st.dev/assets/localized/642c6a86e5fbd3b161614c1493159ed72ba9f28fd64bbd3dac1aaf902841acbb.png',
    fallbackImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    socials: {
      website: '#',
      linkedin: '#',
    },
  },
  {
    name: locale.value === 'bn' ? 'ব্রায়ান হেনলি' : 'Brian Hanley',
    role: locale.value === 'bn' ? 'প্রোডাক্ট ডিজাইনার' : 'Product Designer',
    image:
      'https://cdn.21st.dev/assets/localized/16f617e9aa4511f685dd437418d90bcb53817ed5031cd822d60db98848ad536f.png',
    fallbackImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    socials: {
      website: '#',
      linkedin: '#',
    },
  },
  {
    name: locale.value === 'bn' ? 'দার্কো স্তাঙ্কোভিচ' : 'Darko Stanković',
    role: locale.value === 'bn' ? 'ইউআই ডিজাইনার' : 'UI Designer',
    image:
      'https://cdn.21st.dev/assets/localized/90f8eb479a4a56a4da83ebf6be45a9ff73515b0af2cff481f665ea40189a8137.png',
    fallbackImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socials: {
      website: '#',
      linkedin: '#',
    },
  },
])

const displayMembers = computed(() => {
  if (props.members && props.members.length > 0) {
    return props.members.map((m) => ({
      ...m,
      name: locale.value === 'bn' && m.nameBn ? m.nameBn : m.name,
      role: locale.value === 'bn' && m.roleBn ? m.roleBn : m.role,
    }))
  }
  return defaultTeamData.value
})

const handleImageError = (event: Event, fallbackUrl?: string) => {
  if (!fallbackUrl) return
  const target = event.target as HTMLImageElement
  if (target && target.src !== fallbackUrl) {
    target.src = fallbackUrl
  }
}
</script>

<template>
  <section class="w-full bg-background text-foreground transition-colors duration-300 py-10 lg:py-10">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-12 md:gap-16">
      
      <!-- Section Header -->
      <div class="max-w-xl mx-auto flex flex-col items-center justify-center text-center gap-4">
        <!-- Team Badge -->
        <span
          class="inline-flex items-center px-3.5 py-1 rounded-full border border-border/80 bg-background text-xs font-normal text-muted-foreground shadow-2xs select-none"
        >
          <slot name="badge">
            {{ badgeText }}
          </slot>
        </span>

        <!-- Headline -->
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.18] text-center"
        >
          <slot name="title">
            {{ titleText }}
          </slot>
        </h2>

        <slot name="description" />
      </div>

      <!-- Team Members Grid (Clean, Flat, Borderless matching design) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-10 w-full">
        <div
          v-for="(member, index) in displayMembers"
          :key="index"
          class="group flex flex-col items-center justify-center text-center"
        >
          <!-- Portrait Graphic Image -->
          <div class="w-full flex items-center justify-center">
            <img
              :src="member.image"
              :alt="member.name"
              loading="lazy"
              class="w-full h-auto max-w-[280px] sm:max-w-none object-contain group-hover:grayscale transition-all duration-300 select-none"
              @error="handleImageError($event, member.fallbackImage)"
            />
          </div>

          <!-- Member Details -->
          <div class="pt-5 w-full flex flex-col items-center justify-center mt-5">
            <h3 class="text-xl sm:text-2xl font-medium text-foreground tracking-tight leading-snug">
              {{ member.name }}
            </h3>
            
            <p class="text-xs sm:text-sm font-normal text-muted-foreground mt-1">
              {{ member.role }}
            </p>

            <!-- Social Links -->
            <div class="flex items-center justify-center gap-2.5 mt-3">
              <!-- Website / Globe Icon -->
              <a
                v-if="member.socials.website"
                :href="member.socials.website"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${member.name}'s website`"
                class="p-1.5 text-foreground/75 hover:text-foreground transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-4 h-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </a>

              <!-- LinkedIn Icon -->
              <a
                v-if="member.socials.linkedin"
                :href="member.socials.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${member.name}'s LinkedIn`"
                class="p-1.5 text-foreground/75 hover:text-foreground transition-colors duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                >
                  <path
                    d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
