<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
})

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants = {
    primary:
      'bg-[#FF3D00] text-white hover:bg-[#E03600] active:bg-[#C63000] shadow-md shadow-[#FF3D00]/25 hover:shadow-lg hover:shadow-[#FF3D00]/35 focus-visible:outline-[#FF3D00]',
    secondary:
      'bg-[#09090b] text-white hover:bg-[#18181b] dark:bg-white dark:text-[#09090b] dark:hover:bg-[#f4f4f5] shadow-sm',
    outline:
      'border-2 border-[#FF3D00] text-[#FF3D00] hover:bg-[#FF3D00] hover:text-white dark:border-[#FF3D00] dark:text-[#FF3D00]',
    ghost:
      'text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-[#FF3D00]',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-md',
    md: 'px-5 py-2.5 text-sm rounded-lg',
    lg: 'px-7 py-3.5 text-base rounded-xl',
  }

  return [base, variants[props.variant], sizes[props.size]].join(' ')
})
</script>

<template>
  <component
    :is="to ? RouterLink : 'button'"
    :to="to"
    :type="to ? undefined : type"
    :disabled="disabled"
    :class="classes"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </component>
</template>