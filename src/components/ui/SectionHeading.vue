<script setup lang="ts">
import Heading from './Heading.vue'
import type { HeadingProps } from './Heading.vue'

defineProps<HeadingProps>()
</script>

<template>
  <Heading v-bind="$props">
    <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Heading>
</template>
