<script setup lang="ts">
import { computed } from 'vue'
import Badge from './Badge.vue'

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
export type HeadingAlign = 'left' | 'center' | 'right'
export type HeadingSize = 'sm' | 'md' | 'lg' | 'xl'
export type HeadingVariant = 'default' | 'subheading'
export type BadgeVariant = 'brand' | 'dark' | 'outline' | 'subtle'
export type HeadingMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'

export interface HeadingProps {
  /** Layout variant: 'default' (centered/stacked) | 'subheading' (split: badge & title on left, description on right) */
  variant?: HeadingVariant
  /** Heading title text (when not using #title slot) */
  title?: string
  /** Word or phrase in title to highlight inside a green pill tag */
  highlight?: string
  /** Word or phrase in title to highlight in accent color */
  accent?: string
  /** Custom classes for the highlight pill tag */
  highlightClass?: string
  /** Custom classes for the accent colored word */
  accentClass?: string
  /** Badge text (optional) */
  badge?: string
  /** Badge visual style: 'pill' (dots on sides) | 'chip' (standard Badge component) */
  badgeStyle?: 'pill' | 'chip'
  /** Visual style variant of the badge (if badgeStyle is 'chip') */
  badgeVariant?: BadgeVariant
  /** Optional emoji or icon string to prefix the badge (e.g., '🏏', '🏆', '🎓') */
  badgeIcon?: string
  /** Displays a pulsing dot animation inside the badge */
  badgePing?: boolean
  /** Single description or subtitle text below title */
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
  variant: 'default',
  as: 'h2',
  align: 'center',
  badgeVariant: 'subtle',
  badgePing: false,
  border: false,
})

const effectiveVariant = computed<HeadingVariant>(() => {
  if (props.variant) return props.variant
  return 'default'
})

const effectiveSize = computed<HeadingSize>(() => {
  if (props.size) return props.size
  if (props.as === 'h1') return 'xl'
  if (props.as === 'h2' || effectiveVariant.value === 'subheading') return 'lg'
  return 'md'
})

const effectiveBadgeStyle = computed<'pill' | 'chip'>(() => {
  if (props.badgeStyle) return props.badgeStyle
  return 'pill'
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
  if (effectiveVariant.value === 'subheading') {
    return 'text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight'
  }
  switch (effectiveSize.value) {
    case 'sm':
      return 'text-xl sm:text-2xl font-bold tracking-tight text-foreground'
    case 'md':
      return 'text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight'
    case 'lg':
      return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight'
    case 'xl':
    default:
      return 'text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.18] sm:leading-[1.16]'
  }
})

const descriptionSizeClass = computed(() => {
  switch (effectiveSize.value) {
    case 'sm':
      return 'text-xs sm:text-sm mt-1.5 text-muted-foreground'
    case 'md':
      return 'text-xs sm:text-sm md:text-base mt-2 leading-relaxed text-muted-foreground'
    case 'lg':
      return 'text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed text-muted-foreground max-w-2xl'
    case 'xl':
    default:
      return 'text-base sm:text-lg md:text-xl mt-6 leading-relaxed text-muted-foreground max-w-2xl'
  }
})

const badgeSize = computed<'sm' | 'md'>(() => {
  return effectiveSize.value === 'sm' ? 'sm' : 'md'
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
    '5xl': 'max-w-5xl',
    full: 'max-w-full',
  }
  if (props.maxWidth) return map[props.maxWidth]
  if (effectiveVariant.value === 'subheading') return 'max-w-2xl'
  if (effectiveSize.value === 'xl' || props.as === 'h1') return 'max-w-4xl'
  if (effectiveSize.value === 'lg' || props.as === 'h2') return 'max-w-3xl'
  return 'max-w-2xl'
})

interface TitlePart {
  text: string
  type: 'normal' | 'highlight' | 'accent'
}

const parsedTitleParts = computed<TitlePart[]>(() => {
  if (!props.title) return []
  const hText = props.highlight?.trim() || ''
  const aText = props.accent?.trim() || ''
  if (!hText && !aText) {
    return [{ text: props.title, type: 'normal' }]
  }

  const terms: { text: string; type: 'highlight' | 'accent' }[] = []
  if (hText) terms.push({ text: hText, type: 'highlight' })
  if (aText) terms.push({ text: aText, type: 'accent' })

  const pattern = new RegExp(
    `(${terms.map((t) => t.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'i',
  )

  const tokens = props.title.split(pattern)
  const parts: TitlePart[] = []
  for (const token of tokens) {
    if (!token) continue
    const match = terms.find((t) => t.text.toLowerCase() === token.toLowerCase())
    if (match) {
      parts.push({ text: token, type: match.type })
    } else {
      parts.push({ text: token, type: 'normal' })
    }
  }

  return parts
})
</script>

<template>
  <!-- Variant: Subheading (Split Layout: Badge & Title on Left, Short Description on Right) -->
  <div
    v-if="effectiveVariant === 'subheading'"
    :class="[
      'w-full flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-10',
      border && 'border-b border-border/70 pb-6 mb-8 sm:mb-10',
    ]"
  >
    <!-- Left Column: Badge & Title -->
    <div :class="['flex-1 min-w-0 flex flex-col items-start text-left', maxWidthClass]">
      <!-- Badge Section -->
      <div
        v-if="badge || $slots.badge"
        class="w-full mb-3 sm:mb-4 flex items-center justify-start"
      >
        <slot name="badge">
          <!-- Modern Pill Badge with dots -->
          <div
            v-if="effectiveBadgeStyle === 'pill'"
            :class="[
              'inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-background text-xs font-medium text-muted-foreground shadow-2xs select-none',
              badgeClass,
            ]"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
            <span v-if="badgeIcon" class="shrink-0">{{ badgeIcon }}</span>
            <span class="tracking-wide">{{ badge }}</span>
            <span class="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
          </div>

          <!-- Classic Chip Badge -->
          <Badge
            v-else
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
          'w-full tracking-tight text-foreground transition-colors duration-200 text-left',
          titleSizeClass,
          titleClass,
        ]"
      >
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
      </component>
    </div>

    <!-- Right Column: Short Description (min 2 lines) & Optional Actions -->
    <div
      v-if="description || $slots.description || $slots.actions"
      class="max-w-xs sm:max-w-sm md:max-w-[340px] lg:max-w-[360px] shrink-0 flex flex-col justify-end items-start md:items-end text-left md:text-right pb-1"
    >
      <p
        v-if="description || $slots.description"
        :class="[
          'w-full text-muted-foreground text-sm sm:text-base leading-relaxed',
          descriptionClass,
        ]"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </p>

      <div
        v-if="$slots.actions"
        class="mt-3 flex items-center gap-3 w-full justify-start md:justify-end"
      >
        <slot name="actions" />
      </div>
    </div>
  </div>

  <!-- Variant: Default (Centered / Stacked Hero or General Section Heading) -->
  <div
    v-else
    :class="[
      'flex flex-col w-full mx-auto',
      alignWrapperClass,
      maxWidthClass,
      border && 'border-b border-border/70 pb-4 mb-6 sm:mb-8',
    ]"
  >
    <!-- Badge Section -->
    <div
      v-if="badge || $slots.badge"
      :class="['w-full mb-4 sm:mb-6 flex items-center', badgeJustifyClass]"
    >
      <slot name="badge">
        <!-- Modern Pill Badge with dots (default for page hero headings) -->
        <div
          v-if="effectiveBadgeStyle === 'pill'"
          :class="[
            'inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-background text-xs font-medium text-muted-foreground shadow-2xs select-none',
            badgeClass,
          ]"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
          <span v-if="badgeIcon" class="shrink-0">{{ badgeIcon }}</span>
          <span class="tracking-wide">{{ badge }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
        </div>

        <!-- Classic Chip Badge (when badgeStyle is 'chip') -->
        <Badge
          v-else
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
        'w-full tracking-tight text-foreground transition-colors duration-200',
        titleSizeClass,
        textAlignClass,
        titleClass,
      ]"
    >
      <slot name="title">
        <!-- Render parsed segments if highlight/accent props provided -->
        <template v-if="parsedTitleParts.some(p => p.type !== 'normal')">
          <template v-for="(part, pIdx) in parsedTitleParts" :key="pIdx">
            <span
              v-if="part.type === 'highlight'"
              :class="[
                'bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs',
                highlightClass,
              ]"
            >
              {{ part.text }}
            </span>
            <span
              v-else-if="part.type === 'accent'"
              :class="['text-[#FF3D00] font-extrabold', accentClass]"
            >
              {{ part.text }}
            </span>
            <span v-else>{{ part.text }}</span>
          </template>
        </template>
        <span v-else>{{ title }}</span>
      </slot>
    </component>

    <!-- Description Element (Single paragraph) -->
    <p
      v-if="description || $slots.description"
      :class="[
        'w-full font-normal sm:font-medium mx-auto',
        descriptionSizeClass,
        textAlignClass,
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
