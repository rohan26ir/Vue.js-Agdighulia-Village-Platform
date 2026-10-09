<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <section class="page-section section-space">
    <div class="container about-layout">
      <div class="about-heading">
        <p class="eyebrow eyebrow-accent">{{ t('about.badge') }}</p>
        <h1>{{ t('about.title') }}</h1>
      </div>
      <div class="about-copy">
        <p class="lead">
          {{ t('about.lead') }}
        </p>
        <p>
          {{ t('about.p1') }}
        </p>
        <p>
          {{ t('about.p2') }}
        </p>
        <RouterLink class="text-link" to="/">
          {{ t('about.backHome') }} <span aria-hidden="true">&rarr;</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
