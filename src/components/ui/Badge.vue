<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'brand' | 'dark' | 'outline' | 'subtle'
  size?: 'sm' | 'md'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'brand',
  size: 'md',
})

const classes = computed(() => {
  const base = 'inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-full'

  const variants = {
    brand: 'bg-[#FF3D00] text-white shadow-sm shadow-[#FF3D00]/20',
    dark: 'bg-[#09090b] text-white dark:bg-zinc-800 dark:text-zinc-100',
    outline: 'border border-[#FF3D00] text-[#FF3D00] bg-transparent',
    subtle:
      'bg-[#FF3D00]/10 text-[#FF3D00] dark:bg-[#FF3D00]/20 dark:text-[#FF3D00]',
  }

  const sizes = {
    sm: 'px-2.5 py-0.5 text-[10px]',
    md: 'px-3.5 py-1 text-xs',
  }

  return [base, variants[props.variant], sizes[props.size]].join(' ')
})
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>