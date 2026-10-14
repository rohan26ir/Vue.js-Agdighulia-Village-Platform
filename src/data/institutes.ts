import primarySchoolImg from '@/assets/image/primary-school.jpg'
import highSchoolImg from '@/assets/image/high-school.jpg'
import collegeImg from '@/assets/image/college-building.jpg'

export interface Institute {
  id: string
  slug: string
  nameEn: string
  nameBn: string
  category: 'Primary' | 'High School' | 'College' | 'Kindergarten'
  categoryBn: string
  established: number
  studentsCount: string
  teachersCount: string
  gradesEn: string
  gradesBn: string
  headmasterEn: string
  headmasterBn: string
  addressEn: string
  addressBn: string
  shortDescEn: string
  shortDescBn: string
  detailedDescEn: string
  detailedDescBn: string
  image: string
  featuresEn: string[]
  featuresBn: string[]
  phone: string
  email: string
  locationCoordinates?: {
    lat: number
    lng: number
  }
}

export const INSTITUTES: Institute[] = [
  {
    id: 'augdighuliya-primary-school',
    slug: 'augdighuliya-primary-school',
    nameEn: 'Augdighuliya Govt Primary School',
    nameBn: 'আগদিঘুলিয়া সরকারি প্রাথমিক বিদ্যালয়',
    category: 'Primary',
    categoryBn: 'প্রাথমিক বিদ্যালয়',
    established: 1948,
    studentsCount: '450+',
    teachersCount: '12',
    gradesEn: 'Class 1 to Class 5',
    gradesBn: 'প্রথম থেকে পঞ্চম শ্রেণী',
    headmasterEn: 'Mohammad Abdul Haque',
    headmasterBn: 'মোহাম্মদ আব্দুল হক',
    addressEn: 'Central Village Road, Agdighulia, Tangail',
    addressBn: 'কেন্দ্রীয় গ্রাম সড়ক, আগদিঘুলিয়া, টাঙ্গাইল',
    shortDescEn: 'The oldest foundational primary school providing quality primary education, sports, and cultural foundation for children.',
    shortDescBn: 'আগদিঘুলিয়ার শিশুদের জন্য মানসম্মত প্রাথমিক শিক্ষা, ক্রীড়া ও সাংস্কৃতিক ভিত্তি প্রদানকারী প্রাচীন ঐতিহ্যবাহী বিদ্যালয়।',
    detailedDescEn: 'Established in 1948, Augdighuliya Govt Primary School is the cornerstone of basic education in Agdighulia Village. It features a spacious green playground, smart audio-visual learning equipment, government stipend benefits, and experienced dedicated teachers who nurture young minds for future academic success.',
    detailedDescBn: '১৯৪৮ সালে প্রতিষ্ঠিত আগদিঘুলিয়া সরকারি প্রাথমিক বিদ্যালয় গ্রামের সবচেয়ে প্রাচীন ও বিশ্বস্ত শিক্ষা প্রতিষ্ঠান। সবুজ খেলার মাঠ, অভিজ্ঞ শিক্ষক ও সরকারি উপবৃত্তি সুবিধা নিয়ে বিদ্যালয়টি বহুকাল ধরে আলো ছড়িয়ে আসছে।',
    image: primarySchoolImg,
    featuresEn: ['Govt Stipend Program', 'Spacious Playground', 'Digital Classroom', 'Free Textbooks', 'Annual Sports & Cultural Week'],
    featuresBn: ['উপবৃত্তি প্রোগ্রাম', 'বিশাল খেলার মাঠ', 'ডিজিটাল ক্লাস', 'বিনামূল্যে পাঠ্যবই', 'বার্ষিক ক্রীড়া ও সংস্কৃতি সপ্তাহ'],
    phone: '+880 1711-001122',
    email: 'primary@agdighulia.edu.bd',
    locationCoordinates: { lat: 24.123, lng: 89.876 },
  },
  {
    id: 'm-borhan-high-school',
    slug: 'm-borhan-high-school',
    nameEn: 'M Borhan High School',
    nameBn: 'এম. বোরহান উচ্চ বিদ্যালয়',
    category: 'High School',
    categoryBn: 'উচ্চ বিদ্যালয়',
    established: 1972,
    studentsCount: '850+',
    teachersCount: '24',
    gradesEn: 'Class 6 to Class 10 (Science, Arts, Business)',
    gradesBn: 'ষষ্ঠ থেকে দশম শ্রেণী (বিজ্ঞান, মানবিক, ব্যবসায় শিক্ষা)',
    headmasterEn: 'Kazi Jalal Uddin',
    headmasterBn: 'কাজী জালাল উদ্দিন',
    addressEn: 'Union Center Road, Agdighulia, Nagorpur, Tangail',
    addressBn: 'ইউনিয়ন সেন্টার রোড, আগদিঘুলিয়া, নাগরপুর, টাঙ্গাইল',
    shortDescEn: 'Premier secondary educational school producing top performers in SSC exams with modern science labs and sports fields.',
    shortDescBn: 'এসএসসি পরীক্ষায় ধারাবাহিকভাবে ভালো ফলাফল ও সমৃদ্ধ বিজ্ঞানাগার এবং স্পোর্টস গ্রাউন্ড সমৃদ্ধ ঐতিহ্যবাহী মাধ্যমিক বিদ্যালয়।',
    detailedDescEn: 'M Borhan High School was founded in 1972 and serves as the secondary educational powerhouse of Mokna Union, Agdighulia. With modern physics, chemistry, and biology labs, computer training centers, Scout troop, and active sports teams, the school consistently records high pass rates in national examinations.',
    detailedDescBn: '১৯৭২ সালে প্রতিষ্ঠিত এম. বোরহান উচ্চ বিদ্যালয় অঞ্চলের প্রধান মাধ্যমিক বিদ্যাপীঠ। সমৃদ্ধ সায়েন্স ল্যাব, কম্পিউটার ট্রেনিং ও স্কাউটিং কার্যক্রমে বিদ্যালয়টির সুখ্যাতি রয়েছে।',
    image: highSchoolImg,
    featuresEn: ['Physics & Chemistry Lab', 'ICT Computer Center', 'Large Sports Ground', 'Scout & Red Crescent Unit', 'Career Guidance Seminar'],
    featuresBn: ['পদার্থ ও রসায়ন ল্যাব', 'আইসিটি কেন্দ্র', 'বৃহৎ ক্রীড়া ময়দান', 'স্কাউট ও রেড ক্রিসেন্ট', 'ক্যারিয়ার গাইডেন্স সেমিনার'],
    phone: '+880 1712-334455',
    email: 'mborhan.hs@agdighulia.edu.bd',
    locationCoordinates: { lat: 24.126, lng: 89.879 },
  },
  {
    id: 'sadhona-school-college',
    slug: 'sadhona-school-college',
    nameEn: 'Sadhona School and College',
    nameBn: 'সাধনা স্কুল অ্যান্ড কলেজ',
    category: 'College',
    categoryBn: 'স্কুল ও কলেজ',
    established: 1995,
    studentsCount: '1,200+',
    teachersCount: '38',
    gradesEn: 'Class 6 to HSC (Class 12)',
    gradesBn: 'ষষ্ঠ থেকে দ্বাদশ শ্রেণী (এইচএসসি)',
    headmasterEn: 'Prof. Dr. Shahidul Islam',
    headmasterBn: 'অধ্যাপক ড. শহিদুল ইসলাম',
    addressEn: 'College Road, Agdighulia, Tangail',
    addressBn: 'কলেজ রোড, আগদিঘুলিয়া, টাঙ্গাইল',
    shortDescEn: 'Integrated secondary and higher secondary institution preparing students for university admission and careers.',
    shortDescBn: 'উচ্চ মাধ্যমিক ও মাধ্যমিক শিক্ষার সমন্বিত সেরা প্রতিষ্ঠান, যা শিক্ষার্থীদের বিশ্ববিদ্যালয়ে ভর্তির উপযুক্ত করে গড়ে তোলে।',
    detailedDescEn: 'Sadhona School and College offers complete high school and HSC education. It boasts multi-story academic buildings, a central library with over 5,000 books, active debating clubs, and special coaching modules for public university entrance exams.',
    detailedDescBn: '১৯৯৫ সালে প্রতিষ্ঠিত সাধনা স্কুল অ্যান্ড কলেজ দ্বাদশ শ্রেণী পর্যন্ত বিস্তৃত শিক্ষা কার্যক্রম পরিচালনা করে। ৫,০০০+ বই সমৃদ্ধ কেন্দ্রীয় লাইব্রেরি ও বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি ক্লাস এর অন্যতম আকর্ষণ।',
    image: collegeImg,
    featuresEn: ['Multi-story Academic Wing', 'Central Library (5,000+ books)', 'HSC University Prep Classes', 'Debate & Science Club', 'College Bus Service'],
    featuresBn: ['বহুতল একাডেমিক ভবন', 'কেন্দ্রীয় লাইব্রেরি', 'বিশ্ববিদ্যালয় ভর্তি ক্লাস', 'বিতর্ক ও বিজ্ঞান ক্লাব', 'বাস যাতায়াত সুবিধা'],
    phone: '+880 1713-556677',
    email: 'sadhona.college@agdighulia.edu.bd',
    locationCoordinates: { lat: 24.129, lng: 89.882 },
  },
  {
    id: 'sopnonir-kindergarten',
    slug: 'sopnonir-kindergarten',
    nameEn: 'Sopnonir Kindergarten School',
    nameBn: 'স্বপ্ননীড় কিন্ডারগার্টেন স্কুল',
    category: 'Kindergarten',
    categoryBn: 'কিন্ডারগার্টেন',
    established: 2010,
    studentsCount: '220+',
    teachersCount: '10',
    gradesEn: 'Playgroup to Class 5',
    gradesBn: 'প্লে-গ্রুপ থেকে পঞ্চম শ্রেণী',
    headmasterEn: 'Mrs. Nasreen Akhter',
    headmasterBn: 'মোছাঃ নাসরীন আক্তার',
    addressEn: 'East Agdighulia Residential Area, Tangail',
    addressBn: 'পূর্ব আগদিঘুলিয়া আবাসিক এলাকা, টাঙ্গাইল',
    shortDescEn: 'Child-friendly early childhood education center focused on activity-based learning, English foundation, and creative development.',
    shortDescBn: 'আনন্দঘন পরিবেশে প্রাথমিক শিশু শিক্ষা, ইংরেজি ভিত্তি ও সৃষ্টিশীল কার্যক্রমভিত্তিক শিশুবান্ধব কিন্ডারগার্টেন।',
    detailedDescEn: 'Sopnonir Kindergarten School provides a warm, creative environment for toddlers and primary children. With activity-based toys, drawing & music modules, English conversation practice, and safe transport options, children enjoy learning every day.',
    detailedDescBn: '২০১০ সালে প্রতিষ্ঠিত স্বপ্ননীড় কিন্ডারগার্টেন খেলাধুলার মাধ্যমে শিশুদের আনন্দদায়ক ও মানসম্মত শিক্ষা প্রদান করে। চিত্রকলা, আবৃত্তি ও প্রাথমিক ইংরেজি চর্চার সুন্দর পরিবেশ রয়েছে।',
    image: primarySchoolImg,
    featuresEn: ['Kids Play Zone & Toys', 'English Spoken Practice', 'Art & Music Club', 'CCTV Monitored Safety', 'Kid Transport Service'],
    featuresBn: ['প্লে জোন ও খেলনা', 'ইংরেজি স্পোকেন চর্চা', 'চিত্রকলা ও সঙ্গীত ক্লাব', 'সিসিটিভি নিরাপত্তা', 'ছোটদের পরিবহন ব্যবস্থা'],
    phone: '+880 1714-778899',
    email: 'sopnonir.kg@agdighulia.edu.bd',
    locationCoordinates: { lat: 24.121, lng: 89.873 },
  },
]
