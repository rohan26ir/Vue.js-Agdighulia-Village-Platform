<script setup lang="ts">
import { computed } from 'vue'
import Badge from './Badge.vue'

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
export type HeadingAlign = 'left' | 'center' | 'right'
export type HeadingSize = 'sm' | 'md' | 'lg' | 'xl'
export type BadgeVariant = 'brand' | 'dark' | 'outline' | 'subtle'
export type HeadingMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full'

export interface HeadingProps {
  /** Heading title text */
  title?: string
  /** Badge text (optional) */
  badge?: string
  /** Visual style variant of the badge */
  badgeVariant?: BadgeVariant
  /** Optional emoji or icon string to prefix the badge (e.g., '🏏', '🏆') */
  badgeIcon?: string
  /** Displays a pulsing dot animation inside the badge */
  badgePing?: boolean
  /** Description or subtitle text below title */
  description?: string
  /** Semantic HTML tag for the title element, defaults to 'h2' */
  as?: HeadingTag
  /** Content alignment ('center' | 'left' | 'right') */
  align?: HeadingAlign
  /** Heading size preset ('sm' | 'md' | 'lg' | 'xl') */
  size?: HeadingSize
  /** Maximum width container constraint */
  maxWidth?: HeadingMaxWidth
  /** Whether to render a bottom border divider */
  border?: boolean
  /** Optional custom class names */
  titleClass?: string
  descriptionClass?: string
  badgeClass?: string
}

const props = withDefaults(defineProps<HeadingProps>(), {
  as: 'h2',
  align: 'center',
  size: 'md',
  badgeVariant: 'subtle',
  badgePing: false,
  border: false,
  maxWidth: '3xl',
})

const alignWrapperClass = computed(() => {
  switch (props.align) {
    case 'left':
      return 'items-start justify-start text-left mr-auto self-start'
    case 'right':
      return 'items-end justify-end text-right ml-auto self-end'
    case 'center':
    default:
      return 'items-center justify-center text-center mx-auto self-center'
  }
})

const textAlignClass = computed(() => {
  switch (props.align) {
    case 'left':
      return 'text-left'
    case 'right':
      return 'text-right'
    case 'center':
    default:
      return 'text-center'
  }
})

const badgeJustifyClass = computed(() => {
  switch (props.align) {
    case 'left':
      return 'justify-start'
    case 'right':
      return 'justify-end'
    case 'center':
    default:
      return 'justify-center'
  }
})

const titleSizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xl sm:text-2xl font-bold tracking-tight'
    case 'lg':
      return 'text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight'
    case 'xl':
      return 'text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight'
    case 'md':
    default:
      return 'text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight'
  }
})

const descriptionSizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xs sm:text-sm mt-1.5'
    case 'lg':
      return 'text-sm sm:text-base mt-3 leading-relaxed'
    case 'xl':
      return 'text-base sm:text-lg mt-4 leading-relaxed'
    case 'md':
    default:
      return 'text-xs sm:text-sm md:text-base mt-2 leading-relaxed'
  }
})

const badgeSize = computed<'sm' | 'md'>(() => {
  return props.size === 'sm' ? 'sm' : 'md'
})

const maxWidthClass = computed(() => {
  const map: Record<HeadingMaxWidth, string> = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    full: 'max-w-full',
  }
  return map[props.maxWidth] || 'max-w-3xl'
})
</script>

<template >
  <div
    :class="[
      'flex flex-col max-w-2xl mx-auto gap-2',
      alignWrapperClass,
      maxWidthClass,
      border && 'border-b border-border/70 pb-4 mb-6 sm:mb-8 ',
    ]"
  >
    <!-- Badge Section -->
    <div
      v-if="badge || $slots.badge"
      :class="['w-full mb-3 flex items-center', badgeJustifyClass]"
    >
      <slot name="badge">
        <Badge
          :variant="badgeVariant"
          :size="badgeSize"
          :class="['shadow-xs inline-flex items-center justify-center', badgeClass]"
        >
          <span
            v-if="badgePing"
            class="w-2 h-2 rounded-full bg-[#FF3D00] animate-ping shrink-0"
          />
          <span v-if="badgeIcon" class="shrink-0">{{ badgeIcon }}</span>
          <span>{{ badge }}</span>
        </Badge>
      </slot>
    </div>

    <!-- Title Element -->
    <component
      :is="as"
      :class="[
        'w-full ',
        titleSizeClass,
        textAlignClass,
        'text-gray-800 transition-colors duration-200',
        // titleClass,
      ]"
    >
      <slot name="title" >
        <span class="text-gray-800">{{ title }}</span>
      </slot>
    </component>

    <!-- Description Element -->
    <p
      v-if="description || $slots.description"
      :class="[
        'w-full',
        descriptionSizeClass,
        textAlignClass,
        'text-gray-800 font-normal sm:font-medium max-w-2xl',
        descriptionClass,
      ]"
    >
      <slot name="description">
        {{ description }}
      </slot>
    </p>

    <!-- Actions / Extra Content Slot -->
    <div
      v-if="$slots.actions"
      :class="['w-full mt-4 flex items-center gap-3', badgeJustifyClass]"
    >
      <slot name="actions" />
    </div>
  </div>
</template>
