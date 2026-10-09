<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Badge from '@/components/ui/Badge.vue'
import { useLanguage } from '@/composables/useLanguage'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const { t } = useLanguage()

const modules = [Autoplay, Pagination, Navigation]

const slides = computed(() => [
  {
    image: '/village-landscape.jpg',
    tag: 'Agriculture',
  },
  {
    image: '/village-culture.jpg',
    tag: 'Culture & Heritage',
  },
  {
    image: '/hero-bg.jpg',
    tag: 'Landmarks',
  },
  {
    image: '/village-people.jpg',
    tag: 'Community Life',
  },
  {
    image: '/village-landscape.jpg',
    tag: 'Scenic Nature',
  },
  {
    image: '/village-culture.jpg',
    tag: 'Traditions',
  },
  {
    image: '/hero-bg.jpg',
    tag: 'Historic Sites',
  },
  {
    image: '/village-people.jpg',
    tag: 'Village Events',
  },
])
</script>

<template>
  <section class="bg-background text-foreground py-16 lg:py-24 w-full transition-colors duration-300 overflow-hidden flex flex-col items-center justify-center">
    <div class="w-full max-w-[95%] lg:max-w-[90%] mx-auto flex flex-col items-center justify-center">
      
      <!-- Section Header (Centered) -->
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-6 flex flex-col items-center justify-center">
        <div class="mb-4">
          <Badge variant="subtle" size="md">
            {{ t('gallerySection.badge') }}
          </Badge>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight text-center">
          {{ t('gallerySection.title') }}
        </h2>
      </div>

      <!-- Swiper Carousel Container -->
      <div class="w-full">
        <Swiper
          :modules="modules"
          :slides-per-view="1.3"
          :space-between="16"
          :centered-slides="true"
          :loop="true"
          :speed="1000"
          :autoplay="{ delay: 4500, disableOnInteraction: false }"
          :breakpoints="{
            640: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3.8,
              spaceBetween: 28,
            },
          }"
          class="gallery-swiper w-full py-4"
        >
          <SwiperSlide v-for="(slide, index) in slides" :key="index" class="py-4">
            <div class="h-[340px] sm:h-[380px] lg:h-[420px] w-full rounded-3xl overflow-hidden relative border border-border bg-muted/30 shadow-xl select-none group transition-all duration-300">
              <img
                :src="slide.image"
                :alt="slide.tag"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              
              <!-- Floating Bottom Tag Pill - ONLY SHOWN ON CENTER (ACTIVE) CARD -->
              <div class="slide-tag-pill absolute bottom-6 left-1/2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md text-foreground px-5 py-2.5 rounded-full font-bold text-xs tracking-wide shadow-xl border border-border flex items-center gap-2.5 whitespace-nowrap z-20">
                <span class="w-2.5 h-2.5 rounded-full bg-[#FF3D00] animate-pulse"></span>
                <span class="">{{ slide.tag }}</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  </section>
</template>

<style>
.gallery-swiper {
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2rem;
  overflow: visible !important;
}

.gallery-swiper .swiper-wrapper {
  display: flex;
  align-items: center;
}

.gallery-swiper .swiper-slide {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease;
  opacity: 0.55;
  transform: scale(0.88);
}

/* Center Active Slide Styling */
.gallery-swiper .swiper-slide-active {
  opacity: 1;
  transform: scale(1);
  z-index: 10;
}

.gallery-swiper .swiper-slide-active > div {
  border-color: rgba(255, 61, 0, 0.6);
  box-shadow: 0 20px 35px -10px rgba(255, 61, 0, 0.3);
}

/* Tag Pill: Hidden on side cards, ONLY visible on center active card */
.gallery-swiper .swiper-slide .slide-tag-pill {
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, 14px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s ease;
}

.gallery-swiper .swiper-slide-active .slide-tag-pill {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}
</style>
