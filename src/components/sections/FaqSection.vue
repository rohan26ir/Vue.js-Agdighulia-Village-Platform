<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
const activeIndex = ref<number | null>(1)

const toggleFaq = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
  }
}

const faqs = computed(() => [
  {
    indexNumber: '01',
    category: t('faq.cat1'),
    question: t('faq.q1'),
    answer: t('faq.a1'),
    image: '/village-landscape.jpg',
    link: '/map',
  },
  {
    indexNumber: '02',
    category: t('faq.cat2'),
    question: t('faq.q2'),
    answer: t('faq.a2'),
    image: '/village-people.jpg',
    link: '/about',
  },
  {
    indexNumber: '03',
    category: t('faq.cat3'),
    question: t('faq.q3'),
    answer: t('faq.a3'),
    image: '/hero-bg.jpg',
    link: '/history',
  },
  {
    indexNumber: '04',
    category: t('faq.cat4'),
    question: t('faq.q4'),
    answer: t('faq.a4'),
    image: '/village-people.jpg',
    link: '/about',
  },
  // {
  //   indexNumber: '05',
  //   category: t('faq.cat5'),
  //   question: t('faq.q5'),
  //   answer: t('faq.a5'),
  //   image: '/village-landscape.jpg',
  //   link: '/gallery',
  // },
])
</script>

<template>
  <section class="bg-background text-foreground py-16 lg:py-24 flex justify-center w-full transition-colors duration-300">
    <div class="max-w-[90%] w-full mx-auto flex flex-col justify-center items-center gap-12">
      
      <!-- Large Headline Title -->
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-tight">
          <span class="text-black">{{ t('faq.title') }}</span>
        </h2>
        <p class="text-muted-foreground text-base sm:text-lg mt-4">
          {{ t('faq.subtitle') }}
        </p>
      </div>

      <!-- FAQ Accordion Cards List -->
      <div class="space-y-4 max-w-[98%] lg:max-w-7xl  mx-auto flex flex-col gap-4">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="bg-card text-card-foreground border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <!-- Header Bar (Clickable) -->
          <button
            type="button"
            class="w-full text-left flex items-center justify-between gap-4 sm:gap-6 cursor-pointer focus-visible:outline-none"
            @click="toggleFaq(index)"
          >
            <!-- Left Number & Question -->
            <div class="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
              <span class="text-xs sm:text-sm font-semibold text-muted-foreground shrink-0 font-mono">
                {{ item.indexNumber }}
              </span>
              <h3 class="text-base sm:text-lg md:text-xl font-bold text-foreground truncate sm:whitespace-normal">
                {{ item.question }}
              </h3>
            </div>

            <!-- Right Circular Arrow Button -->
            <div
              class="w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
              :class="[
                activeIndex === index
                  ? 'bg-muted text-foreground rotate-180'
                  : 'bg-muted text-muted-foreground'
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </div>
          </button>

          <!-- Expanded Body Content -->
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[500px] opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="max-h-[500px] opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-show="activeIndex === index" class="pt-6 mt-4 border-t border-border/80">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                <!-- Left Text Column: Answer & CTA Button -->
                <div class="md:col-span-7 flex flex-col justify-between space-y-6">
                  <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {{ item.answer }}
                  </p>

                  <div>
                    <RouterLink
                      :to="item.link"
                      class="inline-flex items-center gap-3 bg-[#FF3D00] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-md shadow-[#FF3D00]/25 hover:bg-[#E03600] hover:scale-[1.02] transition-all no-underline"
                    >
                      <span>{{ t('faq.btnAction') }}</span>
                      <span class="w-6 h-6 rounded-full bg-white text-[#FF3D00] flex items-center justify-center font-extrabold text-xs" aria-hidden="true">
                        &rarr;
                      </span>
                    </RouterLink>
                  </div>
                </div>

                <!-- Right Feature Image -->
                <div class="md:col-span-5 w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-border shadow-sm">
                  <img
                    :src="item.image"
                    :alt="item.question"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </div>
          </transition>
        </div>
      </div>

    </div>
  </section>
</template>