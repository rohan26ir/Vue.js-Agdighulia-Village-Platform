import { createRouter, createWebHistory } from 'vue-router'

import About from '@/pages/About.vue'
import Category from '@/pages/Category.vue'
import Institute from '@/pages/Institute.vue'
import InstituteDetail from '@/pages/InstituteDetail.vue'
import Gallery from '@/pages/Gallery.vue'
import History from '@/pages/History.vue'
import Home from '@/pages/Home.vue'
import InteractiveMap from '@/pages/InteractiveMap.vue'
import NotFound from '@/pages/NotFound.vue'
import Contact from '@/pages/Contact.vue'
import Hospital from '@/pages/Hospital.vue'
import Mosque from '@/pages/Mosque.vue'
import Sports from '@/pages/Sports.vue'
import SportsDetail from '@/pages/SportsDetail.vue'
import MatchSchedule from '@/pages/MatchSchedule.vue'

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
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Contact',
        description: 'Contact Us',
        keywords: 'Agdighulia contact, contact us',
      },
    },
    {
      path: '/institute',
      name: 'institute',
      component: Institute,
      meta: {
        title: 'Institutes',
        description: 'Educational institutes and schools in Agdighulia.',
      },
    },
    {
      path: '/institute/:slug',
      name: 'institute-detail',
      component: InstituteDetail,
      meta: {
        title: 'Institute Details',
        description: 'Detailed information about educational institute in Agdighulia.',
      },
    },
    {
      path: '/hospital',
      name: 'hospital',
      component: Hospital,
      meta: {
        title: 'Hospitals & Pharmacies',
        description: 'Healthcare clinics, hospitals and pharmacies serving Agdighulia.',
      },
    },
    {
      path: '/mosque',
      name: 'mosque',
      component: Mosque,
      meta: {
        title: 'Mosques & Islamic Centers',
        description: 'Mosques, prayer times and religious centers in Agdighulia.',
      },
    },
    {
      path: '/sports',
      name: 'sports',
      component: Sports,
      meta: {
        title: 'Sports & Cricket Clubs',
        description: 'Cricket clubs, match scheduling, tournaments, and sports grounds in Agdighulia.',
      },
    },
    {
      path: '/sports/schedule',
      name: 'sports-schedule',
      component: MatchSchedule,
      meta: {
        title: 'Match Schedule & Fixtures',
        description: 'Cricket match schedule, tournament fixtures, and venues in Agdighulia.',
      },
    },
    {
      path: '/sports/matches',
      redirect: '/sports/schedule',
    },
    {
      path: '/sports/:slug',
      name: 'sports-detail',
      component: SportsDetail,
      meta: {
        title: 'Sports Club Details',
        description: 'Detailed information, squad lineup, and records of cricket club in Agdighulia.',
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
        layout: 'blank',
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
