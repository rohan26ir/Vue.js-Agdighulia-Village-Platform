<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div class="blank-layout min-h-screen flex flex-col justify-between bg-background text-foreground relative overflow-hidden">
    
    

    <!-- Main Content Slot (Without main Navbar or Footer) -->
    <main class="flex-1 flex flex-col justify-center items-center w-full">
      <slot />
    </main>


  </div>
</template>
