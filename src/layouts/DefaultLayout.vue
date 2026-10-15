<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="site-shell relative min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
    <Navbar />

    <main id="main-content" class="flex-1 bg-background text-foreground">
      <slot />
    </main>

    <Footer />
  </div>
</template>
