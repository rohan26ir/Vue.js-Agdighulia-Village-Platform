<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import FormSection from '@/components/sections/FormSection.vue'
import ConnectedMissionSection from '@/components/sections/ConnectedMissionSection.vue'

const { locale } = useLanguage()
</script>

<template>
  <div class="contact-page min-h-[calc(100vh-200px)] flex flex-col justify-start bg-background text-foreground transition-colors duration-300">
    <!-- Contact Intro Header Section (Styled exactly like the About page title) -->
    <section class="w-full bg-background text-foreground pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 overflow-hidden transition-colors duration-300 border-b border-border/60">
      <div class="container max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        <!-- Pill Badge: • Get in touch • -->
        <div class="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-background text-xs font-medium text-muted-foreground shadow-2xs select-none mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-foreground/40" />
          <span class="tracking-wide">{{ locale === 'bn' ? 'যোগাযোগ করুন' : 'Get in touch' }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-foreground/40" />
        </div>

        <!-- Main Headline (Highlighted words matching About page design) -->
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.18] sm:leading-[1.16] text-center max-w-4xl mx-auto">
          <template v-if="locale === 'bn'">
            আমাদের সাথে
            <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
              যুক্ত
            </span>
            হোন এবং মতামত
            <span class="text-[#FF3D00] font-extrabold">জানান।</span>
          </template>
          <template v-else>
            We would love to hear from
            <span class="bg-[#a6f05c] text-black px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full inline-block font-extrabold align-middle mx-1 sm:mx-1.5 shadow-xs">
              you
            </span>
            and stay
            <span class="text-[#FF3D00] font-extrabold">connected.</span>
          </template>
        </h1>

        <!-- Centered Subtitle / Story Lead -->
        <p class="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
          {{
            locale === 'bn'
              ? 'আগদিঘুলিয়া গ্রাম প্ল্যাটফর্ম নিয়ে যেকোনো প্রশ্ন, পরামর্শ বা মতামতের জন্য আমাদের ইউনিয়ন পরিষদের সাথে নির্দ্বিধায় যোগাযোগ করুন।'
              : 'Have questions, suggestions, or want to contribute to the Agdighulia village platform? Reach out to our community union.'
          }}
        </p>

      </div>
    </section>

    <!-- Main Contact Form Section -->
    <FormSection />

    <!-- Connected Mission Section -->
    <ConnectedMissionSection />
  </div>
</template>