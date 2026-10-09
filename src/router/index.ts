import { createRouter, createWebHistory } from 'vue-router'

import About from '@/pages/About.vue'
import Category from '@/pages/Category.vue'
import Gallery from '@/pages/Gallery.vue'
import History from '@/pages/History.vue'
import Home from '@/pages/Home.vue'
import InteractiveMap from '@/pages/InteractiveMap.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        description: 'Discover Agdighulia Village — our history, community values, news, and heritage.',
        keywords: 'Agdighulia, Agdighulia Village, home, village community, heritage, news',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About',
        description: 'Learn more about the story, culture, and people behind Agdighulia Village.',
        keywords: 'Agdighulia story, village culture, about Agdighulia, community heritage',
      },
    },
    {
      path: '/history',
      name: 'history',
      component: History,
      meta: {
        title: 'History',
        description: 'Explore the historical roots and rich traditions of Agdighulia Village.',
        keywords: 'Agdighulia history, village origin, traditions, heritage',
      },
    },
    {
      path: '/institute',
      name: 'institute',
      component: Category,
      meta: {
        title: 'Institutes',
        description: 'Educational institutes and schools in Agdighulia.',
      },
    },
    {
      path: '/hospital',
      name: 'hospital',
      component: Category,
      meta: {
        title: 'Hospitals',
        description: 'Healthcare clinics and hospitals serving Agdighulia.',
      },
    },
    {
      path: '/sports',
      name: 'sports',
      component: Category,
      meta: {
        title: 'Sports',
        description: 'Sports grounds and activities in Agdighulia.',
      },
    },
    {
      path: '/map',
      name: 'map',
      component: InteractiveMap,
      meta: {
        title: 'Interactive Map',
        description: 'Navigate landmark locations, schools, centers, and boundaries of Agdighulia Village.',
        keywords: 'Agdighulia map, village navigation, landmarks, locations',
      },
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      meta: {
        title: 'Gallery',
        description: 'View photos, cultural celebrations, and community moments of Agdighulia Village.',
        keywords: 'Agdighulia photos, gallery, village images, celebrations',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
      meta: {
        title: 'Page not found',
        description: 'The requested page on Agdighulia Village platform could not be found.',
        keywords: 'Agdighulia 404, page not found',
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
