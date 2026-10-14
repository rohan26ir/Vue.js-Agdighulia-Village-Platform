<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    return
  }

  isSubmitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 600))
  isSubmitting.value = false
  isSubmitted.value = true

  form.value = {
    name: '',
    email: '',
    message: '',
  }
}
</script>

<template>
  <section class="form-section py-16 md:py-24 bg-background text-foreground transition-colors duration-200">
    <div class="container max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        <!-- Left Column: Title, Subtitle & Footer Info (Location / Inquiry) -->
        <div class="lg:col-span-5 flex flex-col justify-between space-y-12">
          
          <!-- Top Heading -->
          <div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-4 leading-none">
              {{ t('contact.letsTalk') }}
            </h1>
            <p class="text-lg sm:text-xl text-muted-foreground font-medium">
              {{ t('contact.letsTalkSub') }}
            </p>
          </div>

          <!-- Bottom Footer Info (Location & Inquiry) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-border/40">
            <!-- Location -->
            <div>
              <h4 class="text-sm font-bold text-muted-foreground mb-2">
                {{ t('contact.locationTitle') }}
              </h4>
              <p class="text-sm font-semibold text-foreground leading-relaxed">
                {{ t('contact.addressVal') }}
              </p>
            </div>

            <!-- Inquiry -->
            <div>
              <h4 class="text-sm font-bold text-muted-foreground mb-2">
                {{ t('contact.inquiryTitle') }}
              </h4>
              <a href="mailto:contact@agdighulia.org" class="text-sm font-semibold text-foreground hover:text-[#FF3D00] transition-colors block no-underline">
                {{ t('contact.emailVal') }}
              </a>
              <a href="tel:+8801712345678" class="text-sm font-semibold text-foreground hover:text-[#FF3D00] transition-colors block no-underline mt-1">
                {{ t('contact.phoneVal') }}
              </a>
            </div>
          </div>

        </div>

        <!-- Right Column: Form -->
        <div class="lg:col-span-7 flex flex-col justify-start">
          
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-8 leading-tight">
            {{ t('contact.formTitle') }}
          </h2>

          <!-- Success Message Alert -->
          <transition name="fade">
            <div
              v-if="isSubmitted"
              class="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center justify-between"
            >
              <span>{{ t('contact.successMsg') }}</span>
              <button @click="isSubmitted = false" class="font-bold text-xs hover:underline cursor-pointer">
                &times;
              </button>
            </div>
          </transition>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            
            <!-- Name Field -->
            <div>
              <label class="block text-sm font-semibold text-foreground/80 mb-2">
                {{ t('contact.nameLabel') }}
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                :placeholder="t('contact.namePlaceholder')"
                class="w-full h-14 px-5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/60 text-sm font-medium focus:outline-none focus:border-[#FF3D00] focus:ring-2 focus:ring-[#FF3D00]/20 transition-all"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label class="block text-sm font-semibold text-foreground/80 mb-2">
                {{ t('contact.emailLabel') }}
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                :placeholder="t('contact.emailPlaceholder')"
                class="w-full h-14 px-5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/60 text-sm font-medium focus:outline-none focus:border-[#FF3D00] focus:ring-2 focus:ring-[#FF3D00]/20 transition-all"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label class="block text-sm font-semibold text-foreground/80 mb-2">
                {{ t('contact.messageLabel') }}
              </label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                :placeholder="t('contact.messagePlaceholder')"
                class="w-full p-5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/60 text-sm font-medium focus:outline-none focus:border-[#FF3D00] focus:ring-2 focus:ring-[#FF3D00]/20 transition-all resize-y"
              ></textarea>
            </div>

            <!-- Submit Button (Brand Orange Button) -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full h-14 rounded-xl bg-[#FF3D00] text-white font-bold text-base hover:bg-[#E03600] transition-all cursor-pointer shadow-lg shadow-[#FF3D00]/25 hover:shadow-xl hover:shadow-[#FF3D00]/35 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <span v-if="!isSubmitting">{{ t('contact.submitBtn') }}</span>
              <span v-else class="flex items-center gap-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            </button>

            <!-- Sub-caption Note -->
            <p class="text-xs text-muted-foreground text-center font-medium leading-relaxed pt-1">
              {{ t('contact.captionNote') }}
            </p>

          </form>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
