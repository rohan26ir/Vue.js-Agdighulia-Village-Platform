<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import DarkModeToggle from './DarkModeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'
import { useLanguage } from '@/composables/useLanguage'

const route = useRoute()
const { t, locale } = useLanguage()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

watch(isMobileMenuOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

watch(() => route.path, () => {
  closeMobileMenu()
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header class="bg-background text-foreground pt-2 flex justify-center w-full">
    <div class="max-w-[90%] w-full mx-auto">
      <div class="relative flex items-center justify-between h-20 rounded-t-[32px] px-0">
     
        <!-- Left Brand Cutout Tab -->
        <div class="relative bg-background text-foreground w-60 py-3 px-5 rounded-xl flex items-center z-10 -ml-3 -mt-4 shadow-sm">
          <RouterLink class="flex items-center gap-3 no-underline" to="/" aria-label="Agdighulia Home">
            <span class="inline-grid w-10 h-10 place-items-center rounded-xl bg-[#FF3D00] text-white text-xl font-bold font-serif shadow-md shadow-[#FF3D00]/30">A</span>
            <div class="flex flex-col leading-tight">
              <strong class="text-black font-extrabold uppercase tracking-tight">{{ t('nav.brand') }}</strong>
              <small class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">{{ t('nav.subBrand') }}</small>
            </div>
          </RouterLink>
        </div>

        <!-- Center Navigation Links (Desktop) -->
        <nav class="hidden md:flex items-center justify-center gap-8 mx-auto text-white bg-black w-130 h-[80%] px-10 rounded-full" aria-label="Main Navigation">
          <RouterLink to="/" exact-active-class="!text-white !font-bold" class="text-white/90 text-sm font-semibold no-underline hover:text-white transition-colors duration-180">{{ t('nav.home') }}</RouterLink>
          <RouterLink to="/history" active-class="!text-white !font-bold" class="text-white/90 text-sm font-semibold no-underline hover:text-white transition-colors duration-180">{{ t('nav.history') }}</RouterLink>
          <RouterLink to="/gallery" active-class="!text-white !font-bold" class="text-white/90 text-sm font-semibold no-underline hover:text-white transition-colors duration-180">{{ t('nav.gallery') }}</RouterLink>
          <RouterLink to="/about" active-class="!text-white !font-bold" class="text-white/90 text-sm font-semibold no-underline hover:text-white transition-colors duration-180">{{ t('nav.about') }}</RouterLink>
          
          <!-- More Hover Dropdown Menu -->
          <div class="relative group py-2">
            <button type="button" class="inline-flex items-center gap-1.5 text-white/90 text-sm font-semibold hover:text-white transition-colors duration-180 cursor-pointer bg-transparent border-none p-0 outline-none">
              <span>{{ t('nav.more') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-180 transition-transform duration-200">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <!-- Dropdown Menu Box -->
            <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[190px]">
              <div class="bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-1">
                <RouterLink
                  to="/institute"
                  active-class="!text-white !bg-[#FF3D00]"
                  class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/80 no-underline transition-colors"
                >
                  <span>🎓</span>
                  <span>{{ t('nav.institute') }}</span>
                </RouterLink>

                <RouterLink
                  to="/hospital"
                  active-class="!text-white !bg-[#FF3D00]"
                  class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/80 no-underline transition-colors"
                >
                  <span>🏥</span>
                  <span>{{ t('nav.hospital') }}</span>
                </RouterLink>


                <!-- mosque  -->
                <RouterLink
                  to="/mosque"
                  active-class="!text-white !bg-[#FF3D00]"
                  class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/80 no-underline transition-colors"
                >
                  <span>🕌</span>
                  <span>{{ locale === 'bn' ? 'মসজিদ' : 'Mosque' }}</span>
                </RouterLink>

                <RouterLink
                  to="/sports"
                  active-class="!text-white !bg-[#FF3D00]"
                  class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/80 no-underline transition-colors"
                >
                  <span>🏏</span>
                  <span>{{ t('nav.sports') }}</span>
                </RouterLink>
              </div>
            </div>
          </div>

        </nav>

        <!-- Right Action Cutout Tab -->
        <div class="relative bg-background text-foreground py-2.5 px-5 rounded-xl flex items-center z-10 -mr-3 -mt-4 shadow-sm">
          <div class="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <DarkModeToggle />
            <RouterLink to="/contact" class="inline-flex items-center justify-between bg-[#FF3D00] text-white px-3.5 w-[150px] h-[38px] rounded-full text-xs font-bold no-underline hover:bg-[#E03600] shadow-sm shadow-[#FF3D00]/25 transition-colors duration-180 shrink-0 select-none">
              <span class="truncate">{{ t('nav.connect') }}</span>
              <span class="inline-grid w-5 h-5 place-items-center bg-white text-[#FF3D00] rounded-full text-xs font-extrabold shrink-0" aria-hidden="true">&nearr;</span>
            </RouterLink>
          </div>

          <!-- Mobile Hamburger Toggle Button -->
          <button
            class="md:hidden bg-card border border-border text-foreground cursor-pointer p-2.5 rounded-xl hover:bg-muted transition-colors"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle navigation menu"
            @click="toggleMobileMenu"
          >
            <svg
              v-if="!isMobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Fixed Mobile Sidebar Drawer & Backdrop Overlay -->
    <Teleport to="body">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] md:hidden flex justify-start">
        
        <!-- Dark Backdrop Overlay -->
        <transition name="fade">
          <div
            class="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            @click="closeMobileMenu"
            aria-hidden="true"
          ></div>
        </transition>

        <!-- Fixed Slide-in Sidebar Panel -->
        <transition name="slide">
          <aside
            class="relative z-10 w-[280px] sm:w-[320px] h-screen h-[100dvh] bg-card text-card-foreground border-r border-border shadow-2xl flex flex-col justify-between overflow-hidden"
            aria-label="Mobile Navigation Sidebar"
          >
            <!-- Sidebar Header with Brand & Close Button -->
            <div class="p-6 flex items-center justify-between border-b border-border shrink-0">
              <div class="flex items-center gap-3">
                <span class="inline-grid w-9 h-9 place-items-center rounded-xl bg-[#FF3D00] text-white text-lg font-bold font-serif shadow-md shadow-[#FF3D00]/30">A</span>
                <div class="flex flex-col leading-tight">
                  <strong class="text-sm font-extrabold text-foreground uppercase tracking-tight">{{ t('nav.brand') }}</strong>
                  <small class="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{{ t('nav.subBrand') }}</small>
                </div>
              </div>

              <!-- Close Button -->
              <button
                type="button"
                class="p-2 rounded-xl bg-muted text-foreground hover:bg-border transition-colors cursor-pointer"
                aria-label="Close navigation sidebar"
                @click="closeMobileMenu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <!-- Scrollable Navigation Menu (Supports many menu items!) -->
            <div class="flex-1 overflow-y-auto p-6 space-y-2">
              <RouterLink
                to="/"
                exact-active-class="!text-white !bg-[#FF3D00]"
                class="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground text-sm font-bold no-underline rounded-xl hover:bg-muted transition-all"
                @click="closeMobileMenu"
              >
                <span>{{ t('nav.home') }}</span>
              </RouterLink>

              <RouterLink
                to="/history"
                active-class="!text-white !bg-[#FF3D00]"
                class="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground text-sm font-bold no-underline rounded-xl hover:bg-muted transition-all"
                @click="closeMobileMenu"
              >
                <span>{{ t('nav.history') }}</span>
              </RouterLink>

              <RouterLink
                to="/gallery"
                active-class="!text-white !bg-[#FF3D00]"
                class="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground text-sm font-bold no-underline rounded-xl hover:bg-muted transition-all"
                @click="closeMobileMenu"
              >
                <span>{{ t('nav.gallery') }}</span>
              </RouterLink>

              <!-- Mobile Categories Sub-Menu -->
              <div class="pt-2 pb-1 border-t border-border/50 my-2">
                <span class="px-4 text-[11px] font-bold text-muted-foreground/70 uppercase tracking-wider block mb-2">{{ t('nav.more') }}</span>
                <RouterLink
                  to="/institute"
                  active-class="!text-white !bg-[#FF3D00]"
                  class="flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:text-foreground text-sm font-semibold no-underline rounded-xl hover:bg-muted transition-all pl-6"
                  @click="closeMobileMenu"
                >
                  <span>🎓</span>
                  <span>{{ t('nav.institute') }}</span>
                </RouterLink>

                <RouterLink
                  to="/hospital"
                  active-class="!text-white !bg-[#FF3D00]"
                  class="flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:text-foreground text-sm font-semibold no-underline rounded-xl hover:bg-muted transition-all pl-6"
                  @click="closeMobileMenu"
                >
                  <span>🏥</span>
                  <span>{{ t('nav.hospital') }}</span>
                </RouterLink>

                <RouterLink
                  to="/mosque"
                  active-class="!text-white !bg-[#FF3D00]"
                  class="flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:text-foreground text-sm font-semibold no-underline rounded-xl hover:bg-muted transition-all pl-6"
                  @click="closeMobileMenu"
                >
                  <span>🕌</span>
                  <span>{{ locale === 'bn' ? 'মসজিদ' : 'Mosque' }}</span>
                </RouterLink>

                <RouterLink
                  to="/sports"
                  active-class="!text-white !bg-[#FF3D00]"
                  class="flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:text-foreground text-sm font-semibold no-underline rounded-xl hover:bg-muted transition-all pl-6"
                  @click="closeMobileMenu"
                >
                  <span>🏏</span>
                  <span>{{ t('nav.sports') }}</span>
                </RouterLink>
              </div>

              <RouterLink
                to="/contact"
                active-class="!text-white !bg-[#FF3D00]"
                class="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground text-sm font-bold no-underline rounded-xl hover:bg-muted transition-all"
                @click="closeMobileMenu"
              >
                <span>{{ t('nav.about') }}</span>
              </RouterLink>
            </div>

            <!-- Sidebar Footer: Toggles & Action Button -->
            <div class="p-6 border-t border-border space-y-4 bg-muted/30 shrink-0">
              <div class="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span>{{ t('nav.language') }}</span>
                <LanguageToggle />
              </div>

              <div class="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span>{{ t('nav.theme') }}</span>
                <DarkModeToggle />
              </div>

              <RouterLink
                to="/contact"
                class="w-full inline-flex items-center justify-center gap-2 bg-[#FF3D00] text-white py-3 rounded-full text-xs font-bold no-underline hover:bg-[#E03600] transition-all shadow-md shadow-[#FF3D00]/25"
                @click="closeMobileMenu"
              >
                <span>{{ t('nav.connect') }}</span>
                <span class="inline-grid w-5 h-5 place-items-center bg-white text-[#FF3D00] rounded-full text-xs font-extrabold" aria-hidden="true">&nearr;</span>
              </RouterLink>
            </div>
          </aside>
        </transition>
      </div>
    </Teleport>
  </header>
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

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>