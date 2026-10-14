<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import TeamSection from '@/components/sections/teamSection.vue'

const { locale } = useLanguage()

interface CarouselCard {
  image: string
  tag: string
}

const baseCards = computed<CarouselCard[]>(() => [
  {
    image: '/village-people.jpg',
    tag: locale.value === 'bn' ? 'গ্রামের মানুষ ও সমাজ' : 'Community & People',
  },
  {
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    tag: locale.value === 'bn' ? 'আন্তরিক আড্ডা ও স্মৃতি' : 'Shared Moments',
  },
  {
    image: '/village-landscape.jpg',
    tag: locale.value === 'bn' ? 'সবুজ প্রকৃতি ও জলাধার' : 'Scenic Landscapes',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tag: locale.value === 'bn' ? 'তরুণ প্রজন্ম ও উদ্ভাবন' : 'Youth & Future',
  },
  {
    image: '/village-culture.jpg',
    tag: locale.value === 'bn' ? 'ঐতিহ্য ও সংস্কৃতি' : 'Culture & Roots',
  },
  {
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    tag: locale.value === 'bn' ? 'শিক্ষা ও প্রজ্ঞা' : 'Learning & Heritage',
  },
  {
    image: '/village-playground-bg.jpg',
    tag: locale.value === 'bn' ? 'মাঠ ও উৎসবের বিকেল' : 'Village Fields',
  },
  {
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    tag: locale.value === 'bn' ? 'ঐক্য ও সম্প্রীতি' : 'Togetherness',
  },
])

// Duplicated array to create a seamless infinite marquee scroll
const displayCards = computed<CarouselCard[]>(() => [
  ...baseCards.value,
  ...baseCards.value,
])
</script>

<template>
  <div class="about-page bg-background text-foreground transition-colors duration-300">
    <!-- About Intro Section (Matches Reference Image with Highlighted Headline & Smooth Infinity Loop) -->
    <section class="w-full bg-background text-foreground pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 overflow-hidden transition-colors duration-300 border-b border-border/60">
      
      <!-- Top Text Header Container -->
      <div class="container max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center pb-10">
        
        <!-- Pill Badge: • Our story • -->
        <div class="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-background text-xs font-medium text-muted-foreground shadow-2xs select-none mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-foreground/40" />
          <span class="tracking-wide">{{ locale === 'bn' ? 'আমাদের গল্প' : 'Our story' }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-foreground/40" />
        </div>

        <!-- Main Headline (Highlighted words matching reference design) -->
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.18] sm:leading-[1.16] text-center max-w-4xl mx-auto">
          <template v-if="locale === 'bn'">
            বাসিন্দাদের ভালোবাসায়
            <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
              গড়ে ওঠা
            </span>
            এক প্রাণবন্ত
            <span class="text-[#f472b6] font-extrabold">গ্রাম।</span>
          </template>
          <template v-else>
            A village shaped by the
            <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
              people
            </span>
            who call it
            <span class="text-[#f472b6] font-extrabold">home.</span>
          </template>
        </h1>

        <!-- Centered Subtitle / Story Lead -->
        <p class="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
          {{
            locale === 'bn'
              ? 'এই প্ল্যাটফর্মটি আগদিঘুলিয়া গ্রামকে উদযাপন করার এবং আমাদের সমাজকে এক সুতোয় সংযুক্ত রাখার এক আন্তরিক প্রচেষ্টা।'
              : 'This website is a place to celebrate Agdighulia and keep our community connected.'
          }}
        </p>

        <!-- Story Description Line -->
        <p class="text-xs sm:text-sm text-muted-foreground/80 max-w-xl mx-auto mt-2 leading-relaxed">
          {{
            locale === 'bn'
              ? 'প্রতিবেশীসুলভ ঐক্য, প্রজন্মের পর প্রজন্ম লোকগাথা এবং সুন্দর ভবিষ্যতের যৌথ স্বপ্ন।'
              : 'Neighbors looking out for one another, stories across generations, and a brighter shared future.'
          }}
        </p>

        

      </div>

      <!-- Auto Smooth Continuous Infinity Loop Carousel (No 1-by-1 stepping, seamless linear marquee) -->
      <div class="relative w-full overflow-hidden mt-12 sm:mt-16 py-3 select-none">
        
        <!-- Edge Gradient Fades for that ultra-smooth modern transition -->
        <div class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <!-- Continuous Linear Scrolling Track -->
        <div class="marquee-track flex gap-4 sm:gap-6">
          <div
            v-for="(card, index) in displayCards"
            :key="index"
            class="w-60 sm:w-72 md:w-80 h-76 sm:h-88 md:h-[400px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300 bg-muted cursor-pointer"
          >
            <img
              :src="card.image"
              :alt="card.tag"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              loading="lazy"
            />
            <!-- Dark bottom gradient overlay for readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
            
            <!-- Bottom Floating Tag Badge -->
            <div class="absolute bottom-4 left-4 right-4 z-10">
              <span class="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20 shadow-sm">
                {{ card.tag }}
              </span>
            </div>
          </div>
        </div>

      </div>

    </section>

    <!-- Team Section -->
    <TeamSection />
  </div>
</template>

<style scoped>
@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 38s linear infinite;
  will-change: transform;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation-duration: 90s;
  }
}
</style>
