import warriorsImg from '@/assets/image/cricket-warriors.jpg'
import youngStarsImg from '@/assets/image/cricket-young-stars.jpg'
import ridersImg from '@/assets/image/cricket-riders.jpg'
import groundImg from '@/assets/image/cricket-ground.jpg'

export interface Player {
  nameEn: string
  nameBn: string
  roleEn: string
  roleBn: string
  jerseyNo: number
  isCaptain?: boolean
  isViceCaptain?: boolean
}

export interface CricketClub {
  id: string
  slug: string
  nameEn: string
  nameBn: string
  shortName: string
  typeEn: string
  typeBn: string
  established: string
  homeGroundEn: string
  homeGroundBn: string
  captainEn: string
  captainBn: string
  coachEn: string
  coachBn: string
  phone: string
  jerseyColorEn: string
  jerseyColorBn: string
  stats: {
    matches: number
    won: number
    lost: number
    trophies: number
  }
  achievementsEn: string[]
  achievementsBn: string[]
  facilitiesEn: string[]
  facilitiesBn: string[]
  squad: Player[]
  detailedDescEn: string
  detailedDescBn: string
  image: string
  badgeColor: string
}

export interface MatchTimelineItem {
  id: string
  tournamentEn: string
  tournamentBn: string
  stageEn: string
  stageBn: string
  dateEn: string
  dateBn: string
  timeEn: string
  timeBn: string
  venueEn: string
  venueBn: string
  teamA: {
    nameEn: string
    nameBn: string
    shortName: string
    color: string
    score?: string
  }
  teamB: {
    nameEn: string
    nameBn: string
    shortName: string
    color: string
    score?: string
  }
  overs: string
  status: 'upcoming' | 'live' | 'completed'
  resultEn?: string
  resultBn?: string
}

export const CRICKET_CLUBS: CricketClub[] = [
  {
    id: 'agdighulia-warriors-cc',
    slug: 'agdighulia-warriors',
    nameEn: 'Agdighulia Warriors Cricket Club',
    nameBn: 'আগদিঘুলিয়া ওয়ারিয়র্স ক্রিকেট ক্লাব',
    shortName: 'AWC',
    typeEn: 'Premier Club',
    typeBn: 'প্রিমিয়ার ক্লাব',
    established: '2014',
    homeGroundEn: 'Agdighulia Central High School Playground',
    homeGroundBn: 'আগদিঘুলিয়া সেন্ট্রাল উচ্চ বিদ্যালয় খেলার মাঠ',
    captainEn: 'Tanvir Ahmed Shanto (All-Rounder)',
    captainBn: 'তানভীর আহমেদ শান্ত (অলরাউন্ডার)',
    coachEn: 'Kazi Farhad Hossain',
    coachBn: 'কাজী ফরহাদ হোসেন',
    phone: '+880 1715-998877',
    jerseyColorEn: 'Forest Green & Gold',
    jerseyColorBn: 'গাঢ় সবুজ ও সোনালী',
    stats: {
      matches: 48,
      won: 36,
      lost: 12,
      trophies: 5,
    },
    achievementsEn: [
      'Champions: Agdighulia Premier League (APL) 2025',
      'Champions: Nagorpur Upazila Victory Gold Cup 2024',
      'Runners Up: Tangail District Rural Cricket Meet 2023',
    ],
    achievementsBn: [
      'চ্যাম্পিয়ন: আগদিঘুলিয়া প্রিমিয়ার লীগ (এপিএল) ২০২৫',
      'চ্যাম্পিয়ন: নাগরপুর উপজেলা বিজয় গোল্ড কাপ ২০২৪',
      'রানার্স আপ: টাঙ্গাইল জেলা পল্লী ক্রিকেট মিট ২০২৩',
    ],
    facilitiesEn: [
      'Full Turf & Matting Pitch',
      'Pro Bowling Machine Support',
      'Annual Summer Cricket Camp',
      'Dedicated Jersey & Kit Support',
      'Floodlit Evening Net Practice',
      'Physio & Fitness Trainer',
    ],
    facilitiesBn: [
      'টার্ফ ও ম্যাটিং প্র্যাকটিস পিচ',
      'বোলিং মেশিন প্র্যাকটিস সুবিধা',
      'বার্ষিক সামার ক্রিকেট ক্যাম্প',
      'অফিসিয়াল জার্সি ও কিট সাপোর্ট',
      'ফ্লাডলাইট ইভনিং নেট প্র্যাকটিস',
      'ফিজিও ও ফিটনেস ট্রেইনার',
    ],
    squad: [
      { nameEn: 'Tanvir Ahmed Shanto', nameBn: 'তানভীর আহমেদ শান্ত', roleEn: 'Captain • Batting All-Rounder', roleBn: 'অধিনায়ক • অলরাউন্ডার', jerseyNo: 17, isCaptain: true },
      { nameEn: 'Mahmudul Hasan Shuvo', nameBn: 'মাহমুদুল হাসান শুভ', roleEn: 'Vice Captain • Top Order Batter', roleBn: 'সহ-অধিনায়ক • টপ অর্ডার', jerseyNo: 9, isViceCaptain: true },
      { nameEn: 'Nahidul Islam', nameBn: 'নাহিদুল ইসলাম', roleEn: 'Right-arm Fast Bowler', roleBn: 'ডানহাতি ফাস্ট বোলার', jerseyNo: 7 },
      { nameEn: 'Touhidur Rahman', nameBn: 'তৌহিদুর রহমান', roleEn: 'Wicket-Keeper Batter', roleBn: 'উইকেটকিপার ব্যাটার', jerseyNo: 12 },
      { nameEn: 'Rokonuzzaman Rifat', nameBn: 'রোকনুজ্জামান রিফাত', roleEn: 'Left-arm Orthodox Spin', roleBn: 'বাঁহাতি অর্থোডক্স স্পিনার', jerseyNo: 21 },
      { nameEn: 'Asif Karim Joy', nameBn: 'আসিফ করিম জয়', roleEn: 'Pinch Hitter & Finisher', roleBn: 'পাওয়ার হিটার ও ফিনিশার', jerseyNo: 18 },
      { nameEn: 'Mehedi Hasan Babu', nameBn: 'মেহেদী হাসান বাবু', roleEn: 'Medium Fast Swing Bowler', roleBn: 'মিডিয়াম পেস সুইং বোলার', jerseyNo: 33 },
      { nameEn: 'Sabbir Ahmed', nameBn: 'সাব্বির আহমেদ', roleEn: 'Middle Order Specialist', roleBn: 'মিডল অর্ডার ব্যাটার', jerseyNo: 55 },
    ],
    detailedDescEn:
      'Agdighulia Warriors Cricket Club is the most decorated cricket powerhouse in the village, founded in 2014 by passionate local youth. Known for their fearless cricket and deep grassroots development, the Warriors have won multiple regional village tournaments. Their home ground features a well-maintained turf wicket where evening practice and youth coaching sessions are conducted year-round.',
    detailedDescBn:
      'আগদিঘুলিয়া ওয়ারিয়র্স ক্রিকেট ক্লাব গ্রামের অন্যতম শীর্ষস্থানীয় ও সফল ক্রিকেট দল। ২০১৪ সালে স্থানীয় ক্রিকেটপ্রেমী যুবকদের হাত ধরে প্রতিষ্ঠিত এই দল আক্রমণাত্মক ক্রিকেট ও সুশৃঙ্খল টিমওয়ার্কের জন্য পরিচিত। দলটি একাধিকবার আগদিঘুলিয়া প্রিমিয়ার লীগ (এপিএল) ও নাগরপুর উপজেলা বিজয় কাপ চ্যাম্পিয়ন হওয়ার গৌরব অর্জন করেছে। দলের নিজস্ব নিয়মিত প্র্যাকটিস নেট ও তরুণ খেলোয়াড়দের প্রশিক্ষণের ব্যবস্থা রয়েছে।',
    image: warriorsImg,
    badgeColor: 'bg-emerald-600',
  },
  {
    id: 'agdighulia-young-stars-cc',
    slug: 'agdighulia-young-stars',
    nameEn: 'Agdighulia Young Stars Cricket Club',
    nameBn: 'আগদিঘুলিয়া ইয়াং স্টার ক্রিকেট ক্লাব',
    shortName: 'YSC',
    typeEn: 'Youth & Academy Club',
    typeBn: 'যুব ও একাডেমি ক্লাব',
    established: '2018',
    homeGroundEn: 'Agdighulia Eastside Riverside Ground',
    homeGroundBn: 'আগদিঘুলিয়া পূর্বপাড়া নদী তীরবর্তী খেলার মাঠ',
    captainEn: 'Shakil Mahmud (Right-arm Pacer)',
    captainBn: 'শাকিল মাহমুদ (ডানহাতি পেসার)',
    coachEn: 'Master Jahangir Alom',
    coachBn: 'মাস্টার জাহাঙ্গীর আলম',
    phone: '+880 1726-112233',
    jerseyColorEn: 'Electric Blue & White',
    jerseyColorBn: 'ইলেকট্রিক নীল ও সাদা',
    stats: {
      matches: 36,
      won: 24,
      lost: 12,
      trophies: 3,
    },
    achievementsEn: [
      'Champions: Tangail Sub-Division Youth Cup 2024',
      'Fair Play Trophy: Agdighulia Cricket Carnival 2024',
      'Runners Up: APL T20 Challenge 2025',
    ],
    achievementsBn: [
      'চ্যাম্পিয়ন: টাঙ্গাইল সাব-ডিভিশন যুব কাপ ২০২৪',
      'ফেয়ার প্লে ট্রফি: আগদিঘুলিয়া ক্রিকেট কার্নিভাল ২০২৪',
      'রানার্স আপ: এপিএল টি-২০ চ্যালেঞ্জ ২০২৫',
    ],
    facilitiesEn: [
      'U-19 Junior Development Academy',
      'High-Speed Pitch Practice Nets',
      'Fitness & Athletic Track Sessions',
      'Free Cricket Kit for Deserving Talents',
      'Regular Weekend Inter-village Matches',
      'Digital Scoring & Match Video Archive',
    ],
    facilitiesBn: [
      'অনূর্ধ্ব-১৯ জুনিয়র ডেভেলপমেন্ট একাডেমি',
      'উন্নত গতির প্র্যাকটিস নেট',
      'ফিটনেস ও রানিং ট্র্যাক সেশন',
      'প্রতিভাবান সুবিধাবঞ্চিতদের বিনা খরচে কিট',
      'নিয়মিত উইকেন্ড আন্তঃগ্রাম ফ্রেন্ডলি ম্যাচ',
      'ডিজিটাল স্কোরিং ও ভিডিও আর্কাইভ',
    ],
    squad: [
      { nameEn: 'Shakil Mahmud', nameBn: 'শাকিল মাহমুদ', roleEn: 'Captain • Express Fast Bowler', roleBn: 'অধিনায়ক • এক্সপ্রেস ফাস্ট বোলার', jerseyNo: 10, isCaptain: true },
      { nameEn: 'Fahim Montasir', nameBn: 'ফাহিম মুনতাসির', roleEn: 'Vice Captain • Left Hand Opener', roleBn: 'সহ-অধিনায়ক • বাঁহাতি ওপেনার', jerseyNo: 23, isViceCaptain: true },
      { nameEn: 'Raihan Kabir', nameBn: 'রায়হান কবির', roleEn: 'Leg-Spin All-Rounder', roleBn: 'লেগ স্পিন অলরাউন্ডার', jerseyNo: 8 },
      { nameEn: 'Zubayer Hossain', nameBn: 'জুবায়ের হোসেন', roleEn: 'Wicket-Keeper & Finisher', roleBn: 'উইকেটকিপার ও ফিনিশার', jerseyNo: 14 },
      { nameEn: 'Al-Amin Mia', nameBn: 'আল-আমিন মিয়া', roleEn: 'Right Hand Fast Medium', roleBn: 'ডানহাতি ফাস্ট মিডিয়াম', jerseyNo: 99 },
      { nameEn: 'Siyam Ahmed', nameBn: 'সিয়াম আহমেদ', roleEn: 'Middle Order Accumulator', roleBn: 'মিডল অর্ডার অ্যাংকর', jerseyNo: 3 },
      { nameEn: 'Naimur Rahman', nameBn: 'নাঈমুর রহমান', roleEn: 'Off-Spin Specialist', roleBn: 'অফ-স্পিন বিশেষজ্ঞ', jerseyNo: 44 },
    ],
    detailedDescEn:
      'Agdighulia Young Stars Cricket Club represents the energetic next generation of village sports. Established in 2018 with an emphasis on discipline, agility, and fair play, Young Stars has nurtured dozens of teenagers who now compete across district-level circuits. Their vibrant blue jerseys and electrifying fielding make them a crowd favorite.',
    detailedDescBn:
      'আগদিঘুলিয়া ইয়াং স্টার ক্রিকেট ক্লাব গ্রামের তরুণ ক্রিকেটারদের প্রাণকেন্দ্র। ২০১৮ সালে যাত্রা শুরু করা এই দলটি আধুনিক ফিল্ডিং, ফিটনেস ও গতিশীল ক্রিকেটের মাধ্যমে দ্রুত পরিচিতি লাভ করে। ক্লাবের একাডেমি থেকে প্রতি বছর নতুন প্রতিভাবান ক্রিকেটার উঠে আসে যারা জেলা ও উপজেলা পর্যায়ে খেলছে।',
    image: youngStarsImg,
    badgeColor: 'bg-blue-600',
  },
  {
    id: 'agdighulia-rising-riders-cc',
    slug: 'agdighulia-rising-riders',
    nameEn: 'Agdighulia Rising Riders Cricket Club',
    nameBn: 'আগদিঘুলিয়া রাইজিং রাইডার্স ক্রিকেট ক্লাব',
    shortName: 'ARR',
    typeEn: 'T20 Franchise Club',
    typeBn: 'টি-২০ ফ্র্যাঞ্চাইজি ক্লাব',
    established: '2020',
    homeGroundEn: 'Bazaar Chourasta Community Cricket Arena',
    homeGroundBn: 'বাজার চৌরাস্তা কমিউনিটি ক্রিকেট এরিনা',
    captainEn: 'Imran Nazir (Power Hitter)',
    captainBn: 'ইমরান নাজির (পাওয়ার হিটার)',
    coachEn: 'Sharif Uddin Ahmed',
    coachBn: 'শরীফ উদ্দিন আহমেদ',
    phone: '+880 1733-447788',
    jerseyColorEn: 'Crimson Red & Black',
    jerseyColorBn: 'গাঢ় লাল ও কালো',
    stats: {
      matches: 32,
      won: 21,
      lost: 11,
      trophies: 2,
    },
    achievementsEn: [
      'Champions: Independence Cup T20 2024',
      'Highest Team Score Record: 218/4 in 16 Overs (APL 2024)',
      'Runners Up: Tangail Gold Cup 2025',
    ],
    achievementsBn: [
      'চ্যাম্পিয়ন: স্বাধীনতা কাপ টি-২০ ২০২৪',
      'সর্বোচ্চ দলীয় স্কোর রেকর্ড: ২১৮/৪ (১৬ ওভার, এপিএল ২০২৪)',
      'রানার্স আপ: টাঙ্গাইল গোল্ড কাপ ২০২৫',
    ],
    facilitiesEn: [
      'Boundary Line Power Practice',
      'Modern High-Resolution Electronic Scoreboard',
      'Live Commentary Setup for Matches',
      'Official Team Merchandise Store',
      'Sponsor Backed Equipment Support',
      'Post-match Recovery Sessions',
    ],
    facilitiesBn: [
      'পাওয়ার হিটিং ও বাউন্ডারি ড্রিল',
      'আধুনিক ইলেকট্রনিক স্কোরবোর্ড ব্যবহার',
      'লাইভ ধারাভাষ্য ও ম্যাচ ব্রডকাস্ট সেটআপ',
      'অফিসিয়াল মার্চেন্ডাইজ ও ফ্যান ক্লাব',
      'স্পন্সর সহায়তা ও আধুনিক সরঞ্জাম',
      'পোস্ট-ম্যাচ রিকভারি ও মেডিকেল সাপোর্ট',
    ],
    squad: [
      { nameEn: 'Imran Nazir', nameBn: 'ইমরান নাজির', roleEn: 'Captain • Opening Power Hitter', roleBn: 'অধিনায়ক • ওপেনিং পাওয়ার হিটার', jerseyNo: 11, isCaptain: true },
      { nameEn: 'Habibullah Mizan', nameBn: 'হাবিবুল্লাহ মিজান', roleEn: 'Vice Captain • Fast Bowler', roleBn: 'সহ-অধিনায়ক • ফাস্ট বোলার', jerseyNo: 27, isViceCaptain: true },
      { nameEn: 'Sayed Anwar', nameBn: 'সৈয়দ আনোয়ার', roleEn: 'Middle Order Hard Hitter', roleBn: 'মিডল অর্ডার হার্ড হিটার', jerseyNo: 6 },
      { nameEn: 'Ashraful Islam', nameBn: 'আশরাফুল ইসলাম', roleEn: 'Left-arm Fast Medium', roleBn: 'বাঁহাতি ফাস্ট মিডিয়াম', jerseyNo: 15 },
      { nameEn: 'Kamrul Hassan', nameBn: 'কামরুল হাসান', roleEn: 'Wicket-Keeper Batter', roleBn: 'উইকেটকিপার ব্যাটার', jerseyNo: 20 },
      { nameEn: 'Saiful Islam Polash', nameBn: 'সাইফুল ইসলাম পলাশ', roleEn: 'Mystery Spinner', roleBn: 'মিস্ট্রি স্পিনার', jerseyNo: 77 },
    ],
    detailedDescEn:
      'Agdighulia Rising Riders are renowned for high-octane, entertaining T20 cricket. With explosive batting line-ups and aggressive boundary-hitting strategies, every Riders match draws massive local crowds to the boundary lines. Backed by local community businesses, they provide professional-grade kits and gear for their players.',
    detailedDescBn:
      'আগদিঘুলিয়া রাইজিং রাইডার্স তাদের মারকুটে ব্যাটিং ও রোমাঞ্চকর টি-২০ ক্রিকেটের জন্য দর্শকের নয়নের মণি। দলটি প্রতি ম্যাচে চার-ছক্কার ফুলঝুড়ি ছুটিয়ে গ্রামের দর্শকদের মুগ্ধ করে। রাইজিং রাইডার্সের রয়েছে নিজস্ব ফ্যানবেস, লাইভ ধারাভাষ্য সুবিধা এবং আধুনিক ডিজিটাল স্কোরিং ব্যবস্থা।',
    image: ridersImg,
    badgeColor: 'bg-rose-600',
  },
  {
    id: 'agdighulia-friends-eleven-cc',
    slug: 'agdighulia-friends-eleven',
    nameEn: 'Agdighulia Friends Eleven Cricket Club',
    nameBn: 'আগদিঘুলিয়া ফ্রেন্ডস ইলেভেন ক্রিকেট ক্লাব',
    shortName: 'AFE',
    typeEn: 'Heritage Sports Club',
    typeBn: 'ঐতিহ্যবাহী স্পোর্টস ক্লাব',
    established: '2011',
    homeGroundEn: 'Agdighulia Central Banyan Tree Ground',
    homeGroundBn: 'আগদিঘুলিয়া বটতলা কেন্দ্রীয় খেলার মাঠ',
    captainEn: 'Monir Hossain (Senior All-Rounder)',
    captainBn: 'মনির হোসেন (সিনিয়র অলরাউন্ডার)',
    coachEn: 'Advocate Shamsul Haque',
    coachBn: 'অ্যাডভোকেট শামসুল হক',
    phone: '+880 1744-889900',
    jerseyColorEn: 'Navy Blue & Golden Yellow',
    jerseyColorBn: 'নেভি ব্লু ও সোনালী হলুদ',
    stats: {
      matches: 62,
      won: 41,
      lost: 21,
      trophies: 6,
    },
    achievementsEn: [
      'Pioneers of Agdighulia Cricket (Est. 2011)',
      'Champions: Victory Day Tournament 2023',
      'Champions: Tangail District Friendship Trophy 2022',
    ],
    achievementsBn: [
      'আগদিঘুলিয়ার ক্রিকেটের পথিকৃৎ (প্রতিষ্ঠা ২০১১)',
      'চ্যাম্পিয়ন: বিজয় দিবস ক্রিকেট টুর্নামেন্ট ২০২৩',
      'চ্যাম্পিয়ন: টাঙ্গাইল জেলা ফ্রেন্ডশিপ ট্রফি ২০২২',
    ],
    facilitiesEn: [
      'Historical Home Ground with Natural Shade',
      'Senior Mentorship Program for Kids',
      'Community Fund for Injured Players',
      'Annual Winter Cricket Festival Host',
      'Permanent Pavilion Seating for Viewers',
      'Cricket Equipment Lending Library',
    ],
    facilitiesBn: [
      'ঐতিহাসিক বটতলা মাঠ ও প্রাকৃতিক ছায়াঘেরা গ্যালারি',
      'সিনিয়র খেলোয়াড়দের নিবিড় মেন্টরশিপ',
      'আহত খেলোয়াড়দের জন্য বিশেষ ওয়েলফেয়ার ফান্ড',
      'বার্ষিক শীতকালীন ক্রিকেট উৎসব আয়োজক',
      'দর্শকদের জন্য স্থায়ী প্যাভিলিয়ন শেড',
      'ক্রিকেট সরঞ্জাম শেয়ারিং লাইব্রেরি',
    ],
    squad: [
      { nameEn: 'Monir Hossain', nameBn: 'মনির হোসেন', roleEn: 'Captain • Veteran All-Rounder', roleBn: 'অধিনায়ক • সিনিয়র অলরাউন্ডার', jerseyNo: 5, isCaptain: true },
      { nameEn: 'Jamil Ahmed', nameBn: 'জামিল আহমেদ', roleEn: 'Vice Captain • Classical Batter', roleBn: 'সহ-অধিনায়ক • ক্লাসিক্যাল ব্যাটার', jerseyNo: 19, isViceCaptain: true },
      { nameEn: 'Arifuzzaman Arif', nameBn: 'আরিফুজ্জামান আরিফ', roleEn: 'Left-arm Swing Bowler', roleBn: 'বাঁহাতি সুইং বোলার', jerseyNo: 13 },
      { nameEn: 'Shahadat Hossain', nameBn: 'শাহাদাত হোসেন', roleEn: 'Senior Wicket Keeper', roleBn: 'অভিজ্ঞ উইকেটকিপার', jerseyNo: 1 },
      { nameEn: 'Nazrul Islam Nayeem', nameBn: 'নজরুল ইসলাম নাঈম', roleEn: 'Spin Bowling All-Rounder', roleBn: 'স্পিন অলরাউন্ডার', jerseyNo: 88 },
      { nameEn: 'Golam Rabbani', nameBn: 'গোলাম রাব্বানী', roleEn: 'Death Overs Specialist Bowler', roleBn: 'ডেথ ওভার স্পেশালিস্ট বোলার', jerseyNo: 32 },
    ],
    detailedDescEn:
      'Agdighulia Friends Eleven is the founding father club of organized cricket in Agdighulia village. Formed over a decade ago under the iconic village banyan tree ground, Friends Eleven instilled cricket passion into multiple generations of youth. They are known for patient match craftsmanship, disciplined bowling, and strong community brotherhood.',
    detailedDescBn:
      'আগদিঘুলিয়া ফ্রেন্ডস ইলেভেন গ্রামের সংগঠিত ক্রিকেটের পথিকৃৎ। ২০১১ সালে ঐতিহাসিক বটতলা মাঠ থেকে শুরু হওয়া এই ক্লাবটি গ্রামের বহু তরুণকে ক্রিকেট অনুরাগী করে তুলেছে। অভিজ্ঞতা, ঠান্ডা মাথার ক্রিকেট পরিচালনা এবং চমৎকার পারস্পরিক সম্প্রীতি এই ক্লাবের প্রধান শক্তি। প্রতি বছর ঐতিহ্যবাহী শীতকালীন টুর্নামেন্ট তাদের উদ্যোগে অনুষ্ঠিত হয়।',
    image: groundImg,
    badgeColor: 'bg-indigo-600',
  },
  {
    id: 'agdighulia-green-blasters-cc',
    slug: 'agdighulia-green-blasters',
    nameEn: 'Agdighulia Green Blasters',
    nameBn: 'আগদিঘুলিয়া গ্রিন ব্লাস্টার্স',
    shortName: 'AGB',
    typeEn: 'Village Eleven Club',
    typeBn: 'ভিলেজ ইলেভেন ক্লাব',
    established: '2021',
    homeGroundEn: 'Uttarpara Green Field Cricket Oval',
    homeGroundBn: 'উত্তরপাড়া গ্রিন ফিল্ড ক্রিকেট ওভাল',
    captainEn: 'Rashedul Karim (All-Rounder)',
    captainBn: 'রাশেদুল করিম (অলরাউন্ডার)',
    coachEn: 'Faruk Hossain',
    coachBn: 'ফারুক হোসেন',
    phone: '+880 1755-662211',
    jerseyColorEn: 'Lime Green & Navy',
    jerseyColorBn: 'লাইম গ্রিন ও নেভি ব্লু',
    stats: {
      matches: 28,
      won: 18,
      lost: 10,
      trophies: 2,
    },
    achievementsEn: [
      'Champions: Monsoon T16 Cup 2024',
      'Best Fielding Team: APL 2024',
      'Runners Up: Nagorpur Friendly Trophy 2025',
    ],
    achievementsBn: [
      'চ্যাম্পিয়ন: মনসুন টি-১৬ কাপ ২০২৪',
      'সেরা ফিল্ডিং দল: এপিএল ২০২৪',
      'রানার্স আপ: নাগরপুর ফ্রেন্ডলি ট্রফি ২০২৫',
    ],
    facilitiesEn: [
      'Grassy Natural Outfield Ground',
      'Target Practice Net Setup',
      'Youth Fitness Camps on Weekends',
      'Fair Play & Sportsmanship Awards',
      'Community Supporter Base',
      'First Aid & Recovery Support',
    ],
    facilitiesBn: [
      'প্রাকৃতিক সবুজ ঘাসের আউটফিল্ড',
      'টার্গেট প্র্যাকটিস নেট সেটআপ',
      'উইকেন্ডে ইয়ুথ ফিটনেস ক্যাম্প',
      'ফেয়ার প্লে ও স্পোর্টসম্যানশিপ পুরস্কার',
      'স্থানীয় কমিউনিটি ফ্যান সাপোর্ট',
      'ফার্স্ট এইড ও ইনজুরি রিকভারি সাপোর্ট',
    ],
    squad: [
      { nameEn: 'Rashedul Karim', nameBn: 'রাশেদুল করিম', roleEn: 'Captain • Batting All-Rounder', roleBn: 'অধিনায়ক • ব্যাটিং অলরাউন্ডার', jerseyNo: 8, isCaptain: true },
      { nameEn: 'Anisur Rahman', nameBn: 'আনিসুর রহমান', roleEn: 'Vice Captain • Fast Bowler', roleBn: 'সহ-অধিনায়ক • ফাস্ট বোলার', jerseyNo: 24, isViceCaptain: true },
      { nameEn: 'Tariqul Islam', nameBn: 'তারিকুল ইসলাম', roleEn: 'Top Order Stroke Maker', roleBn: 'টপ অর্ডার স্ট্রোক মেকার', jerseyNo: 16 },
      { nameEn: 'Badal Mia', nameBn: 'বাদল মিয়া', roleEn: 'Wicketkeeper Batter', roleBn: 'উইকেটকিপার ব্যাটার', jerseyNo: 22 },
      { nameEn: 'Sahed Ali', nameBn: 'সাহেদ আলী', roleEn: 'Off-Spin Bowler', roleBn: 'অফ-স্পিন বোলার', jerseyNo: 35 },
    ],
    detailedDescEn:
      'Agdighulia Green Blasters represents the spirited rural north end of the village. Known for their energetic fielding and thrilling close-finish games, the Blasters bring passionate neighborhood crowds to every match. Their focus on youth inclusion has made them one of the fastest rising sports clubs in Tangail.',
    detailedDescBn:
      'আগদিঘুলিয়া গ্রিন ব্লাস্টার্স গ্রামের উত্তরপাড়ার প্রাণবন্ত ক্রিকেট ক্লাব। দুর্দান্ত ফিল্ডিং, নিখুঁত স্পিন বোলিং ও শেষ ওভারের রোমাঞ্চকর জয়ের জন্য তারা পরিচিত। দলটিতে স্থানীয় তরুণদের সুযোগ দেওয়া হয় এবং তারা নিয়মিত আন্তঃগ্রাম ক্রিকেট আয়োজন করে থাকে।',
    image: warriorsImg,
    badgeColor: 'bg-emerald-500',
  },
]

export const MATCH_SCHEDULES: MatchTimelineItem[] = [
  {
    id: 'match-101',
    tournamentEn: 'Agdighulia Premier League (APL) 2026',
    tournamentBn: 'আগদিঘুলিয়া প্রিমিয়ার লীগ (এপিএল) ২০২৬',
    stageEn: 'League Stage • Match 01',
    stageBn: 'লীগ পর্ব • ১ম ম্যাচ',
    dateEn: 'Friday, Oct 24, 2026',
    dateBn: 'শুক্রবার, ২৪ অক্টোবর, ২০২৬',
    timeEn: '02:30 PM BST',
    timeBn: 'দুপুর ০২:৩০ মি.',
    venueEn: 'Agdighulia Central High School Ground',
    venueBn: 'আগদিঘুলিয়া কেন্দ্রীয় উচ্চ বিদ্যালয় মাঠ',
    teamA: {
      nameEn: 'Agdighulia Warriors',
      nameBn: 'আগদিঘুলিয়া ওয়ারিয়র্স',
      shortName: 'AWC',
      color: 'bg-emerald-600',
    },
    teamB: {
      nameEn: 'Agdighulia Young Stars',
      nameBn: 'আগদিঘুলিয়া ইয়াং স্টার',
      shortName: 'YSC',
      color: 'bg-blue-600',
    },
    overs: 'T20 (20 Overs)',
    status: 'upcoming',
  },
  {
    id: 'match-102',
    tournamentEn: 'Agdighulia Premier League (APL) 2026',
    tournamentBn: 'আগদিঘুলিয়া প্রিমিয়ার লীগ (এপিএল) ২০২৬',
    stageEn: 'League Stage • Match 02',
    stageBn: 'লীগ পর্ব • ২য় ম্যাচ',
    dateEn: 'Saturday, Oct 25, 2026',
    dateBn: 'শনিবার, ২৫ অক্টোবর, ২০২৬',
    timeEn: '02:30 PM BST',
    timeBn: 'দুপুর ০২:৩০ মি.',
    venueEn: 'Bazaar Chourasta Cricket Arena',
    venueBn: 'বাজার চৌরাস্তা ক্রিকেট এরিনা',
    teamA: {
      nameEn: 'Rising Riders',
      nameBn: 'রাইজিং রাইডার্স',
      shortName: 'ARR',
      color: 'bg-rose-600',
    },
    teamB: {
      nameEn: 'Friends Eleven',
      nameBn: 'ফ্রেন্ডস ইলেভেন',
      shortName: 'AFE',
      color: 'bg-indigo-600',
    },
    overs: 'T20 (20 Overs)',
    status: 'upcoming',
  },
  {
    id: 'match-103',
    tournamentEn: 'Agdighulia Premier League (APL) 2026',
    tournamentBn: 'আগদিঘুলিয়া প্রিমিয়ার লীগ (এপিএল) ২০২৬',
    stageEn: 'League Stage • Match 03',
    stageBn: 'লীগ পর্ব • ৩য় ম্যাচ',
    dateEn: 'Friday, Oct 31, 2026',
    dateBn: 'শুক্রবার, ৩১ অক্টোবর, ২০২৬',
    timeEn: '02:30 PM BST',
    timeBn: 'দুপুর ০২:৩০ মি.',
    venueEn: 'Uttarpara Green Field Oval',
    venueBn: 'উত্তরপাড়া গ্রিন ফিল্ড ওভাল',
    teamA: {
      nameEn: 'Green Blasters',
      nameBn: 'গ্রিন ব্লাস্টার্স',
      shortName: 'AGB',
      color: 'bg-emerald-500',
    },
    teamB: {
      nameEn: 'Agdighulia Warriors',
      nameBn: 'আগদিঘুলিয়া ওয়ারিয়র্স',
      shortName: 'AWC',
      color: 'bg-emerald-600',
    },
    overs: 'T20 (20 Overs)',
    status: 'upcoming',
  },
  {
    id: 'match-104',
    tournamentEn: 'Agdighulia Premier League (APL) 2026',
    tournamentBn: 'আগদিঘুলিয়া প্রিমিয়ার লীগ (এপিএল) ২০২৬',
    stageEn: 'Semi Final 1',
    stageBn: '১ম সেমিফাইনাল',
    dateEn: 'Friday, Nov 07, 2026',
    dateBn: 'শুক্রবার, ০৭ নভেম্বর, ২০২৬',
    timeEn: '02:00 PM BST',
    timeBn: 'দুপুর ০২:০০ মি.',
    venueEn: 'Agdighulia Central High School Ground',
    venueBn: 'আগদিঘুলিয়া কেন্দ্রীয় উচ্চ বিদ্যালয় মাঠ',
    teamA: {
      nameEn: 'Top Qualifier #1',
      nameBn: 'শীর্ষ দল ১',
      shortName: 'Q1',
      color: 'bg-amber-600',
    },
    teamB: {
      nameEn: 'Top Qualifier #4',
      nameBn: 'শীর্ষ দল ৪',
      shortName: 'Q4',
      color: 'bg-zinc-700',
    },
    overs: 'T20 (20 Overs)',
    status: 'upcoming',
  },
  {
    id: 'match-104b',
    tournamentEn: 'Agdighulia Premier League (APL) 2026',
    tournamentBn: 'আগদিঘুলিয়া প্রিমিয়ার লীগ (এপিএল) ২০২৬',
    stageEn: 'Semi Final 2',
    stageBn: '২য় সেমিফাইনাল',
    dateEn: 'Saturday, Nov 08, 2026',
    dateBn: 'শনিবার, ০৮ নভেম্বর, ২০২৬',
    timeEn: '02:00 PM BST',
    timeBn: 'দুপুর ০২:০০ মি.',
    venueEn: 'Bazaar Chourasta Cricket Arena',
    venueBn: 'বাজার চৌরাস্তা ক্রিকেট এরিনা',
    teamA: {
      nameEn: 'Top Qualifier #2',
      nameBn: 'শীর্ষ দল ২',
      shortName: 'Q2',
      color: 'bg-rose-600',
    },
    teamB: {
      nameEn: 'Top Qualifier #3',
      nameBn: 'শীর্ষ দল ৩',
      shortName: 'Q3',
      color: 'bg-blue-600',
    },
    overs: 'T20 (20 Overs)',
    status: 'upcoming',
  },
  {
    id: 'match-105',
    tournamentEn: 'Agdighulia Premier League (APL) 2026',
    tournamentBn: 'আগদিঘুলিয়া প্রিমিয়ার লীগ (এপিএল) ২০২৬',
    stageEn: 'Grand Final & Trophy Presentation',
    stageBn: 'গ্র্যান্ড ফাইনাল ও ট্রফি প্রদান',
    dateEn: 'Friday, Nov 14, 2026',
    dateBn: 'শুক্রবার, ১৪ নভেম্বর, ২০২৬',
    timeEn: '01:45 PM BST',
    timeBn: 'দুপুর ০১:৪৫ মি.',
    venueEn: 'Agdighulia Central High School Ground',
    venueBn: 'আগদিঘুলিয়া কেন্দ্রীয় উচ্চ বিদ্যালয় মাঠ',
    teamA: {
      nameEn: 'Semi Final 1 Winner',
      nameBn: '১ম সেমিফাইনাল বিজয়ী',
      shortName: 'SF1',
      color: 'bg-amber-500',
    },
    teamB: {
      nameEn: 'Semi Final 2 Winner',
      nameBn: '২য় সেমিফাইনাল বিজয়ী',
      shortName: 'SF2',
      color: 'bg-red-600',
    },
    overs: 'T20 (20 Overs)',
    status: 'upcoming',
  },
]
