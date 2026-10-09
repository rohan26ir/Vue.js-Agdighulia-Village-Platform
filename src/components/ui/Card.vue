<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  hoverable?: boolean
  variant?: 'default' | 'outlined' | 'elevated'
}

const props = withDefaults(defineProps<Props>(), {
  hoverable: true,
  variant: 'default',
})

const classes = computed(() => {
  const base = 'rounded-2xl transition-all duration-300 overflow-hidden'

  const variants = {
    default:
      'bg-card text-card-foreground border border-border',
    outlined:
      'bg-transparent border-2 border-border text-foreground',
    elevated:
      'bg-card text-card-foreground shadow-xl shadow-black/5 dark:shadow-black/40 border border-border',
  }

  const hoverClass = props.hoverable
    ? 'hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF3D00]/10 hover:border-[#FF3D00]/40'
    : ''

  return [base, variants[props.variant], hoverClass].join(' ')
})
</script>

<template>
  <div :class="classes">
    <div v-if="$slots.header" class="p-6 pb-0">
      <slot name="header" />
    </div>
    <div class="p-6">
      <slot />
    </div>
    <div v-if="$slots.footer" class="p-6 pt-0 border-t border-border">
      <slot name="footer" />
    </div>
  </div>
</template>