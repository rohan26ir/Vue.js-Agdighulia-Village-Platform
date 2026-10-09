import { ref, computed, watchEffect } from 'vue'

export type Locale = 'en' | 'bn'

const currentLocale = ref<Locale>('en')

// Initialize locale from localStorage or browser settings
if (typeof window !== 'undefined') {
  const savedLocale = localStorage.getItem('locale') as Locale | null
  if (savedLocale === 'en' || savedLocale === 'bn') {
    currentLocale.value = savedLocale
  }
}

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', currentLocale.value)
    localStorage.setItem('locale', currentLocale.value)
  }
})

export const translations = {
  en: {
    // Nav
    'nav.brand': 'Agdighulia',
    'nav.subBrand': 'Nagorpur, Tangail',
    'nav.home': 'Home',
    'nav.history': 'History',
    'nav.map': 'Interactive Map',
    'nav.gallery': 'Gallery',
    'nav.about': 'About Us',
    'nav.more': 'More',
    'nav.institute': 'Institute',
    'nav.hospital': 'Hospital',
    'nav.sports': 'Sports',
    'nav.connect': 'Connect us',
    'nav.theme': 'Theme Preference',
    'nav.language': 'Language',

    // Hero
    'hero.welcome': 'Welcome to Our Community',
    'hero.title1': 'Rooted in Tradition.',
    'hero.title2': 'Growing Together.',
    'hero.desc':
      'A digital home for the people, rich cultural heritage, historic stories, and unified future of Agdighulia Village.',
    'hero.btnExplore': 'Explore Village Map',
    'hero.btnHistory': 'Our History',
    'hero.villagers': 'Villagers',
    'hero.yearsHistory': 'Years History',
    'hero.united': 'United Spirit',
    'hero.communityUnion': 'Agdighulia Community Union',
    'hero.heritageHub': 'Heritage Hub',
    'hero.cardDesc':
      'Connecting our heritage across generations. Discover news, cultural gatherings, and local landmarks in one place.',
    'hero.locationLabel': '📍 Location',
    'hero.locationVal': 'Tangail, Bangladesh',
    'hero.landmarkLabel': '🏛️ Landmark',
    'hero.landmarkVal': 'Union Center',

    // Counter
    'counter.badge': 'Community Highlights',
    'counter.title': 'Agdighulia at a Glance',
    'counter.subtitle':
      'Celebrating the numbers, landmarks, and milestones that define our village identity.',
    'counter.heroText':
      'Agdighulia creates unified community experiences for villagers and expatriates who value heritage, thoughtful planning, and a shared future.',
    'counter.readStory': 'Read Our Story',
    'counter.stat1Label': 'Resident Villagers',
    'counter.stat1Desc':
      'Active families and community members calling Agdighulia home.',
    'counter.stat2Label': 'Years of History',
    'counter.stat2Desc':
      'A rich legacy of agricultural, cultural, and educational milestones.',
    'counter.stat3Label': 'Schools & Centers',
    'counter.stat3Desc':
      'Educational institutes, primary schools, and community centers.',
    'counter.stat4Label': 'Community Spirit',
    'counter.stat4Desc':
      'Dedicated to togetherness, mutual support, and collective progress.',

    // FAQ
    'faq.badge': 'Got Questions?',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle':
      'Everything you need to know about Agdighulia Village, our history, and community activities.',
    'faq.btnAction': 'Explore More',
    'faq.cat1': 'About the Village',
    'faq.q1': 'Where is Agdighulia Village located?',
    'faq.a1':
      'Agdighulia is located in the Tangail region of Bangladesh. It is a vibrant village community known for its agricultural heritage, historical landmarks, and close-knit neighborhood values.',
    'faq.cat2': 'Community',
    'faq.q2': 'How can villagers and expatriates stay connected?',
    'faq.a2':
      'This website serves as our digital portal. You can view village news, explore interactive landmarks on our Map, check out the Photo Gallery, and join community updates via our Newsletter.',
    'faq.cat3': 'Heritage',
    'faq.q3': 'What are the main historical landmarks in Agdighulia?',
    'faq.a3':
      'Agdighulia features century-old community structures, traditional markets, historical mosques, primary educational institutions, and scenic natural reservoir areas.',
    'faq.cat4': 'Participation',
    'faq.q4': 'How can I contribute to local community projects?',
    'faq.a4':
      'You can get involved by contacting the Agdighulia Community Union through the contact info provided on our About page or footer, or by participating in local volunteer programs.',
    'faq.cat5': 'Platform',
    'faq.q5': 'Is this website free to use for all residents?',
    'faq.a5':
      'Yes! The Agdighulia Village Platform is 100% free and open to all residents, visitors, and expatriates worldwide.',

    // Newsletter
    'newsletter.badge': 'Newsletter',
    'newsletter.title': 'Subscribe to our newsletter today',
    'newsletter.placeholder': 'Email address',
    'newsletter.btn': 'Subscribe',
    'newsletter.success': 'Thank you for subscribing!',

    // Footer
    'footer.pingUs': 'Ping us on this email',
    'footer.socialMedia': 'Social Media',
    'footer.newsletter': 'Newsletter',
    'footer.enterEmail': 'Enter your email',
    'footer.submit': 'Submit',
    'footer.subscribed': 'Subscribed',
    'footer.office': 'Office',
    'footer.addressLine1': 'Agdighulia',
    'footer.addressLine2': 'Union Mokna, Nagorpur',
    'footer.addressLine3': 'Tangail, Bangladesh',
    'footer.rights': 'Agdighulia. All Rights Reserved',
    'footer.developer': 'Developer',

    // Pages
    'history.badge': 'Heritage & Legacy',
    'history.title': 'History of Agdighulia',
    'history.desc': 'Discovering the origins, founding stories, and historical milestones of our village.',
    'map.badge': 'Landmarks & Boundaries',
    'map.title': 'Interactive Village Map',
    'map.desc': 'Explore key landmarks, educational institutions, centers, and key points of interest around Agdighulia.',
    'gallery.badge': 'Moments & Memories',
    'gallery.title': 'Village Photo Gallery',
    'gallery.desc': 'A collection of photographs capturing life, community gatherings, and landscapes in Agdighulia.',
    'gallerySection.badge': 'Our Gallery',
    'gallerySection.title': 'Moments that make the journey feel personal.',
    'about.badge': 'About Agdighulia',
    'about.title': 'A village shaped by the people who call it home.',
    'about.lead': 'This website is a place to celebrate Agdighulia and keep our community connected.',
    'about.p1': 'A village is made by its people: neighbors looking out for one another, families passing stories between generations, and community members working toward a brighter shared future.',
    'about.p2': 'We hope this space can grow with Agdighulia—sharing what matters to residents and helping people near and far feel part of the community.',
    'about.backHome': 'Back to home',
  },
  bn: {
    // Nav
    'nav.brand': 'আগদিঘুলিয়া',
    'nav.subBrand': 'নাগরপুর, টাঙ্গাইল',
    'nav.home': 'হোম',
    'nav.history': 'ইতিহাস',
    'nav.map': 'ইন্টারেক্টিভ ম্যাপ',
    'nav.gallery': 'গ্যালারি',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.more': 'অন্যান্য',
    'nav.institute': 'শিক্ষা প্রতিষ্ঠান',
    'nav.hospital': 'হাসপাতাল',
    'nav.sports': 'খেলাধুলা',
    'nav.connect': 'যোগাযোগ করুন',
    'nav.theme': 'থিম পছন্দ',
    'nav.language': 'ভাষা পরিবর্তন',

    // Hero
    'hero.welcome': 'আমাদের কমিউনিটিতে স্বাগতম',
    'hero.title1': 'ঐতিহ্যে শিকড়।',
    'hero.title2': 'একত্রে পথচলা।',
    'hero.desc':
      'আগদিঘুলিয়া গ্রামের মানুষ, সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য, ঐতিহাসিক গল্প এবং ঐক্যবদ্ধ ভবিষ্যতের একটি স্থান।',
    'hero.btnExplore': 'গ্রামের ম্যাপ দেখুন',
    'hero.btnHistory': 'আমাদের ইতিহাস',
    'hero.villagers': 'গ্রামবাসী',
    'hero.yearsHistory': 'বছরের ইতিহাস',
    'hero.united': 'ঐক্যবদ্ধ চেতনা',
    'hero.communityUnion': 'আগদিঘুলিয়া সমিতি',
    'hero.heritageHub': 'ঐতিহ্য কেন্দ্র',
    'hero.cardDesc':
      'প্রজন্ম থেকে প্রজন্মে আমাদের ঐতিহ্যকে যুক্ত করা। সংবাদ, সাংস্কৃতিক সম্মেলন এবং স্থানীয় নিদর্শন এক জায়গায় দেখুন।',
    'hero.locationLabel': '📍 অবস্থান',
    'hero.locationVal': 'টাঙ্গাইল, বাংলাদেশ',
    'hero.landmarkLabel': '🏛️ নিদর্শন',
    'hero.landmarkVal': 'ইউনিয়ন কেন্দ্র',

    // Counter
    'counter.badge': 'কমিউনিটি হাইলাইটস',
    'counter.title': 'এক নজরে আগদিঘুলিয়া',
    'counter.subtitle':
      'আমাদের গ্রামের পরিচিতি সংজ্ঞায়িত করে এমন সংখ্যা, নিদর্শন এবং মাইলফলকসমূহ।',
    'counter.heroText':
      'আগদিঘুলিয়া গ্রামবাসী এবং প্রবাসীদের জন্য সুচিন্তিত পরিকল্পনা, ঐতিহ্য এবং উজ্জ্বল ভবিষ্যতের একটি ঐক্যবদ্ধ সামাজিক স্থান তৈরি করে।',
    'counter.readStory': 'আমাদের ইতিহাস জানুন',
    'counter.stat1Label': 'স্থায়ী বাসিন্দা',
    'counter.stat1Desc':
      'আগদিঘুলিয়াকে নিজের নিবাস মনে করা সক্রিয় পরিবার ও সদস্যগণ।',
    'counter.stat2Label': 'বছরের ইতিহাস',
    'counter.stat2Desc':
      'কৃষি, সংস্কৃতি এবং শিক্ষার সমৃদ্ধ ঐতিহ্যিক অর্জন।',
    'counter.stat3Label': 'বিদ্যালয় ও কেন্দ্র',
    'counter.stat3Desc':
      'শিক্ষা প্রতিষ্ঠান, প্রাথমিক বিদ্যালয় এবং সামাজিক কেন্দ্রসমূহ।',
    'counter.stat4Label': 'ঐক্যের অঙ্গীকার',
    'counter.stat4Desc':
      'একতা, পারস্পরিক সহযোগিতা এবং সার্বিক অগ্রগতির প্রতি নিবেদিত।',

    // FAQ
    'faq.badge': 'প্রশ্ন আছে?',
    'faq.title': 'সাধারণ জিজ্ঞাসাসমূহ',
    'faq.subtitle':
      'আগদিঘুলিয়া গ্রাম, আমাদের ইতিহাস এবং সামাজিক কার্যক্রম সম্পর্কে আপনার জানার সবকিছু।',
    'faq.btnAction': 'বিস্তারিত দেখুন',
    'faq.cat1': 'গ্রাম সম্পর্কে',
    'faq.q1': 'আগদিঘুলিয়া গ্রাম কোথায় অবস্থিত?',
    'faq.a1':
      'আগদিঘুলিয়া বাংলাদেশের টাঙ্গাইল অঞ্চলে অবস্থিত। এটি একটি প্রাণবন্ত গ্রাম যা তার কৃষি ঐতিহ্য, ঐতিহাসিক স্থান এবং সুদৃঢ় সামাজিক মূল্যবোধের জন্য পরিচিত।',
    'faq.cat2': 'কমিউনিটি',
    'faq.q2': 'গ্রামবাসী ও প্রবাসীরা কীভাবে যুক্ত থাকতে পারেন?',
    'faq.a2':
      'এই ওয়েবসাইটটি আমাদের ডিজিটাল মাধ্যম। আপনি গ্রামের খবর দেখতে পারেন, ইন্টারেক্টিভ ম্যাপের মাধ্যমে স্থানসমূহ ঘুরে দেখতে পারেন, গ্যালারি দেখতে পারেন এবং নিউজলেটারের মাধ্যমে আপডেট পেতে পারেন।',
    'faq.cat3': 'ঐতিহ্য',
    'faq.q3': 'আগদিঘুলিয়ার প্রধান ঐতিহাসিক নিদর্শনসমূহ কী কী?',
    'faq.a3':
      'আগদিঘুলিয়ায় রয়েছে শতবর্ষী প্রাচীন সামাজিক স্থাপনা, ঐতিহ্যবাহী বাজার, ঐতিহাসিক মসজিদ, প্রাথমিক শিক্ষা প্রতিষ্ঠান এবং মনোরম প্রাকৃতিক জলাধার।',
    'faq.cat4': 'অংশগ্রহণ',
    'faq.q4': 'আমি কীভাবে সামাজিক উন্নয়ন প্রকল্পে অবদান রাখতে পারি?',
    'faq.a4':
      'আমাদের ওয়েবসাইট বা ফুটারে দেওয়া যোগাযোগের তথ্যের মাধ্যমে আগদিঘুলিয়া সমিতির সাথে যোগাযোগ করতে পারেন অথবা স্থানীয় স্বেচ্ছাসেবক প্রোগ্রামে অংশ নিতে পারেন।',
    'faq.cat5': 'প্ল্যাটফর্ম',
    'faq.q5': 'এই ওয়েবসাইটটি কি সকল বাসিন্দাদের জন্য বিনামূল্যে?',
    'faq.a5':
      'হ্যাঁ! আগদিঘুলিয়া গ্রাম প্ল্যাটফর্ম বিশ্বজুড়ে সকল বাসিন্দা, দর্শনার্থী এবং প্রবাসীদের জন্য ১০০% বিনামূল্যে উন্মুক্ত।',

    // Newsletter
    'newsletter.badge': 'নিউজলেটার',
    'newsletter.title': 'আজই আমাদের নিউজলেটারে গ্রাহক হন',
    'newsletter.placeholder': 'আপনার ইমেইল ঠিকানা',
    'newsletter.btn': 'গ্রাহক হন',
    'newsletter.success': 'গ্রাহক হওয়ার জন্য আপনাকে ধন্যবাদ!',

    // Footer
    'footer.pingUs': 'ইমেইল পাঠাতে পারেন',
    'footer.socialMedia': 'সোশ্যাল মিডিয়া',
    'footer.newsletter': 'নিউজলেটার',
    'footer.enterEmail': 'আপনার ইমেইল দিন',
    'footer.submit': 'জমা দিন',
    'footer.subscribed': 'ধন্যবাদ',
    'footer.office': 'কার্যালয়',
    'footer.addressLine1': 'আগদিঘুলিয়া ',
    'footer.addressLine2': 'ইউনিয়ন পরিষদ, আগদিঘুলিয়া',
    'footer.addressLine3': 'টাঙ্গাইল, বাংলাদেশ',
    'footer.rights': 'আগদিঘুলিয়া। সর্বস্বত্ব সংরক্ষিত',
    'footer.developer': 'ডেভেলপার',

    // Pages
    'history.badge': 'ঐতিহ্য ও অবদান',
    'history.title': 'আগদিঘুলিয়ার ইতিহাস',
    'history.desc': 'আমাদের গ্রামের উৎপত্তি, প্রতিষ্ঠাতাদের গল্প এবং ঐতিহাসিক মাইলফলক আবিষ্কার করুন।',
    'map.badge': 'নিদর্শন ও সীমানা',
    'map.title': 'ইন্টারেক্টিভ ভিলেজ ম্যাপ',
    'map.desc': 'আগদিঘুলিয়ার গুরুত্বপূর্ণ নিদর্শন, শিক্ষা প্রতিষ্ঠান, কেন্দ্র এবং প্রধান স্থানসমূহ ঘুরে দেখুন।',
    'gallery.badge': 'স্মৃতি ও মুহূর্ত',
    'gallery.title': 'গ্রামের ফটো গ্যালারি',
    'gallery.desc': 'আগদিঘুলিয়ার জীবনযাত্রা, সামাজিক অনুষ্ঠান এবং প্রাকৃতিক সৌন্দর্য নিয়ে ছবি সংকলন।',
    'gallerySection.badge': 'আমাদের গ্যালারি',
    'gallerySection.title': 'আগদিঘুলিয়ার বিশেষ মুহূর্ত ও গল্প',
    'about.badge': 'আগদিঘুলিয়া সম্পর্কে',
    'about.title': 'বাসিন্দাদের হাত ধরে গড়ে ওঠা এক গ্রাম।',
    'about.lead': 'এই ওয়েবসাইটটি আগদিঘুলিয়া উদযাপনের স্থান এবং আমাদের সমাজকে সংযুক্ত রাখার এক প্রচেষ্টা।',
    'about.p1': 'গ্রাম তৈরি হয় তার মানুষ দিয়ে: একে অপরের খেয়াল রাখা প্রতিবেশী, প্রজন্মের পর প্রজন্ম গল্প বয়ে চলা পরিবার এবং সুন্দর ভবিষ্যতের জন্য কাজ করা সদস্যবৃন্দ।',
    'about.p2': 'আমরা আশা করি এই স্থানটি আগদিঘুলিয়ার সাথে বিকশিত হবে—বাসিন্দাদের জন্য গুরুত্বপূর্ণ বিষয়গুলো শেয়ার করবে এবং দেশ-বিদেশের মানুষকে এক পরিবারের অংশ মনে করতে সাহায্য করবে।',
    'about.backHome': 'হোমে ফিরে যান',
  },
} as const

export function useLanguage() {
  const setLocale = (locale: Locale) => {
    currentLocale.value = locale
  }

  const toggleLanguage = () => {
    currentLocale.value = currentLocale.value === 'en' ? 'bn' : 'en'
  }

  const t = (key: keyof typeof translations['en']): string => {
    return translations[currentLocale.value][key] || translations['en'][key] || key
  }

  return {
    locale: computed(() => currentLocale.value),
    setLocale,
    toggleLanguage,
    t,
  }
}
