<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

interface Props {
  badgeText?: string
  titleLine1?: string
  titleLine2?: string
  description?: string
  bgImage?: string
}

const props = withDefaults(defineProps<Props>(), {
  badgeText: '',
  titleLine1: '',
  titleLine2: '',
  description: '',
  bgImage: '/newsletter-mission-bg.jpg',
})

const { locale } = useLanguage()

// Interactive Newsletter subscribe modal state
const isModalOpen = ref(false)
const emailInput = ref('')
const isSubmitting = ref(false)
const isSubscribed = ref(false)

const handleSubscribe = async () => {
  if (!emailInput.value) return
  isSubmitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 600))
  isSubmitting.value = false
  isSubscribed.value = true
  emailInput.value = ''
  setTimeout(() => {
    isSubscribed.value = false
    isModalOpen.value = false
  }, 2500)
}

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'instagram',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: 'youtube',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'facebook',
  },
  {
    name: 'Twitter',
    url: 'https://x.com',
    icon: 'twitter',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com',
    icon: 'linkedin',
  },
]

// Duplicated for seamless infinite looping scroll without layout change
const loopSocialLinks = computed(() => [
  ...socialLinks,
  ...socialLinks,
  ...socialLinks,
  ...socialLinks,
  ...socialLinks,
  ...socialLinks,
])
</script>

<template>
  <section class="bg-background text-white pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 flex justify-center w-full transition-colors duration-300">
    <div class="max-w-[90%] w-full mx-auto">
      
      <!-- Card Container using Project's Radius, Border & Shadow Schema -->
      <div class="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-border shadow-xl bg-card">
        
        <!-- Top Hero Banner with Village Children Photo -->
        <div
          class="relative w-full min-h-[440px] sm:min-h-[500px] md:min-h-[540px] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-cover bg-center"
          :style="{
            backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.45) 45%, rgba(15, 23, 42, 0.65) 75%, rgba(15, 23, 42, 0.88) 100%), url('${bgImage}')`,
          }"
        >
          <!-- Center Content with Generous Vertical Gap -->
          <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-white">
            
            <!-- Newsletter Pill Badge (White text, White bullet) -->
            <button
              type="button"
              @click="isModalOpen = true"
              class="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#FF3D00] text-white text-xs sm:text-sm font-bold tracking-tight shadow-lg shadow-[#FF3D00]/30 hover:bg-[#E03600] active:scale-95 transition-all duration-200 cursor-pointer mb-8 sm:mb-10"
              title="Click to subscribe to newsletter"
            >
              <span class="w-2 h-2 rounded-full bg-white inline-block animate-pulse" />
              <span class="text-white">{{ badgeText || (locale === 'bn' ? 'নিউজলেটার' : 'Newsletter') }}</span>
            </button>

            <!-- Main Headline (Pure White text) -->
            <h2 class="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.14] sm:leading-[1.16] max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              <template v-if="titleLine1 || titleLine2">
                <span class="text-white">{{ titleLine1 }}</span>
                <br v-if="titleLine1 && titleLine2" />
                <span class="text-white">{{ titleLine2 }}</span>
              </template>
              <template v-else-if="locale === 'bn'">
                <span class="text-white">আমাদের মহৎ লক্ষ্যের সাথে</span>
                <br />
                <span class="text-white">যুক্ত থাকুন সর্বদা</span>
              </template>
              <template v-else>
                <span class="text-white">Stay Connected With</span>
                <br />
                <span class="text-white">Agdighulia’s Mission</span>
              </template>
            </h2>

            <!-- Subtitle Description (Pure White text with generous spacing from headline) -->
            <p class="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-white font-normal max-w-xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              {{
                description ||
                (locale === 'bn'
                  ? 'অনুপ্রেরণাদায়ী গল্প, সমাজের আপডেট এবং ইতিবাচক পরিবর্তন আনার উপায় সরাসরি পৌঁছে যাবে আপনার ইনবক্সে।'
                  : 'Get inspiring stories, community updates, and ways to make a meaningful difference delivered to your inbox.')
              }}
            </p>
          </div>
        </div>

        <!-- Bottom Social Media Bar with Generous Gap & Spacing on Loop Scroll -->
        <div class="w-full bg-[#FF3D00] text-white border-t border-[#E03600] overflow-hidden relative select-none">
          <div class="social-marquee-track flex">
            <a
              v-for="(social, index) in loopSocialLinks"
              :key="index"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-3 sm:gap-4 py-5 sm:py-6 px-14 sm:px-20 md:px-24 lg:px-28 text-white font-semibold text-xs sm:text-sm md:text-base hover:bg-[#E03600] active:scale-[0.98] transition-all duration-150 no-underline border-r border-white/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <!-- Instagram Icon -->
              <svg
                v-if="social.icon === 'instagram'"
                class="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 text-white shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>

              <!-- YouTube Icon -->
              <svg
                v-else-if="social.icon === 'youtube'"
                class="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 text-white shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>

              <!-- Facebook Icon -->
              <svg
                v-else-if="social.icon === 'facebook'"
                class="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 text-white shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>

              <!-- Twitter / X Icon -->
              <svg
                v-else-if="social.icon === 'twitter'"
                class="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 text-white shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>

              <!-- LinkedIn Icon -->
              <svg
                v-else-if="social.icon === 'linkedin'"
                class="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 text-white shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.39 9.74v-8.37H5.07v8.37z"/>
              </svg>

              <span class="text-white">{{ social.name }}</span>
            </a>
          </div>
        </div>

      </div>

    </div>

    <!-- Newsletter Interactive Subscription Modal / Dialog (White Text Styling) -->
    <transition name="modal-fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
        @click.self="isModalOpen = false"
      >
        <div class="relative bg-zinc-900 border border-zinc-800 text-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-scaleIn">
          <!-- Close Button -->
          <button
            type="button"
            @click="isModalOpen = false"
            class="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            &times;
          </button>

          <!-- Modal Header -->
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FF3D00] animate-pulse"></span>
            <span class="text-xs font-bold uppercase tracking-wider text-white">
              {{ locale === 'bn' ? 'নিউজলেটার সাবস্ক্রিপশন' : 'Newsletter Subscription' }}
            </span>
          </div>

          <h3 class="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-white">
            {{ locale === 'bn' ? 'আমাদের সাথে যুক্ত থাকুন' : 'Stay in the Loop' }}
          </h3>

          <p class="text-xs sm:text-sm text-white/90 mb-6 leading-relaxed">
            {{
              locale === 'bn'
                ? 'আপনার ইমেইল দিয়ে আমাদের নিয়মিত নিউজলেটার ও উন্নয়নমূলক খবরের সাথে যুক্ত থাকুন।'
                : 'Join our community mailing list to receive verified updates, stories, and seasonal reports.'
            }}
          </p>

          <!-- Success State -->
          <div v-if="isSubscribed" class="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-white text-sm font-semibold flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="text-white">{{ locale === 'bn' ? 'ধন্যবাদ! আপনি সফলভাবে যুক্ত হয়েছেন।' : 'Thank you for subscribing!' }}</span>
          </div>

          <!-- Form State -->
          <form v-else @submit.prevent="handleSubscribe" class="flex flex-col gap-3">
            <input
              v-model="emailInput"
              type="email"
              required
              :placeholder="locale === 'bn' ? 'আপনার ইমেইল দিন...' : 'Enter your email address...'"
              class="w-full px-4 py-3.5 rounded-xl bg-zinc-800/90 border border-zinc-700 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-[#FF3D00] focus:ring-1 focus:ring-[#FF3D00] transition-colors"
            />
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-3.5 rounded-xl bg-[#FF3D00] text-white font-bold text-sm hover:bg-[#E03600] active:scale-95 transition-all shadow-md shadow-[#FF3D00]/25 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
            >
              <span v-if="!isSubmitting" class="text-white">{{ locale === 'bn' ? 'যুক্ত হন' : 'Subscribe Now' }}</span>
              <span v-else class="flex items-center gap-2 text-white">
                <svg class="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            </button>
          </form>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
@keyframes social-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.social-marquee-track {
  display: flex;
  width: max-content;
  animation: social-marquee 80s linear infinite;
  will-change: transform;
}

.social-marquee-track:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .social-marquee-track {
    animation-duration: 150s;
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scaleIn {
  animation: scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
