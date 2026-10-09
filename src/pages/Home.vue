<template>
  <div>
    <HeroSection />
    <CounterSection />
    <GalleryCarouselSection />
    <NewsletterSection />
    <FaqSection />
  </div>
</template>

<script setup lang="ts">
  import HeroSection from '@/components/sections/HeroSection.vue'
  import CounterSection from '@/components/sections/CounterSection.vue'
  import GalleryCarouselSection from '@/components/sections/GalleryCarouselSection.vue'
  import NewsletterSection from '@/components/sections/NewsletterSection.vue'
  import FaqSection from '@/components/sections/FaqSection.vue'
</script>