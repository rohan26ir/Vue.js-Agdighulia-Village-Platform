import centralMosqueImg from '@/assets/image/mosque-central.jpg'
import uttarparaMosqueImg from '@/assets/image/mosque-uttarpara.jpg'
import dakshinparaMosqueImg from '@/assets/image/mosque-dakshinpara.jpg'
import purbaparaMosqueImg from '@/assets/image/mosque-purbapara.jpg'
import paschimparaMosqueImg from '@/assets/image/mosque-paschimpara.jpg'

export interface MosqueEntity {
  id: string
  nameEn: string
  nameBn: string
  typeEn: string
  typeBn: string
  establishedEn: string
  establishedBn: string
  addressEn: string
  addressBn: string
  capacityEn: string
  capacityBn: string
  imamEn: string
  imamBn: string
  phone: string
  facilitiesEn: string[]
  facilitiesBn: string[]
  image: string
  featured?: boolean
}

export interface PrayerSchedule {
  nameEn: string
  nameBn: string
  azan: string
  iqamah: string
}

export const DAILY_PRAYER_TIMES: PrayerSchedule[] = [
  { nameEn: 'Fajr', nameBn: 'ফজর', azan: '04:45 AM', iqamah: '05:05 AM' },
  { nameEn: 'Dhuhr', nameBn: 'যোহর', azan: '12:05 PM', iqamah: '01:15 PM' },
  { nameEn: 'Asr', nameBn: 'আসর', azan: '04:15 PM', iqamah: '04:30 PM' },
  { nameEn: 'Maghrib', nameBn: 'মাগরিব', azan: '05:40 PM', iqamah: '05:45 PM' },
  { nameEn: 'Isha', nameBn: 'এশা', azan: '07:05 PM', iqamah: '07:30 PM' },
  { nameEn: 'Jummah', nameBn: 'জুমু\'আ', azan: '12:30 PM', iqamah: '01:30 PM' },
]

export const MOSQUE_ITEMS: MosqueEntity[] = [
  {
    id: 'agdighulia-central-jame-mosque',
    nameEn: 'Agdighulia Central Jame Masjid & Eidgah',
    nameBn: 'আগদিঘুলিয়া কেন্দ্রীয় জামে মসজিদ ও ঈদগাহ',
    typeEn: 'Central Friday Mosque',
    typeBn: 'কেন্দ্রীয় জামে মসজিদ',
    establishedEn: 'Est. 1952',
    establishedBn: 'প্রতিষ্ঠিত: ১৯৫২',
    addressEn: 'Center Village Road, Agdighulia, Nagorpur, Tangail',
    addressBn: 'কেন্দ্রীয় রোড, আগদিঘুলিয়া, নাগরপুর, টাঙ্গাইল',
    capacityEn: '1,500+ Musalli • 3 Storey • Central Minaret & Dome',
    capacityBn: '১,৫০০+ মুসল্লি ধারণক্ষমতা • ৩ তলা ভবন • সুউচ্চ মিনার ও গম্বুজ',
    imamEn: 'Khatib: Mawlana Abdul Quddus • Muazzin: Hafez Md. Bilal',
    imamBn: 'খতিব: মাওলানা আব্দুল কুদ্দুস • মুয়াজ্জিন: হাফেজ মো. বেলাল',
    phone: '+880 1711-223344',
    facilitiesEn: [
      'Spacious Marble Wudu Khana',
      'Full AC Prayer Hall',
      'Central Village Eidgah',
      'Generator & Solar Backup',
      'Mineral Filter Water',
      'Separate Ladies Section',
      'Noorani Maktab Class',
      'Janaza Funeral Facilities',
    ],
    facilitiesBn: [
      'প্রশস্ত মার্বেল অজুখানা',
      'শীতাতপ নিয়ন্ত্রিত (এসি) হল',
      'কেন্দ্রীয় ঈদগাহ ময়দান',
      'জেনারেটর ও সৌর ব্যাকআপ',
      'বিশুদ্ধ মিনারেল ফিল্টার পানি',
      'মহিলাদের জন্য পৃথক নামাজের স্থান',
      'নূরানী মক্তব ও কুরআন শিক্ষা',
      'জানাযা ও খাটিয়া সামগ্রী',
    ],
    image: centralMosqueImg,
    featured: true,
  },
  {
    id: 'uttarpara-baitun-noor-mosque',
    nameEn: 'Agdighulia Uttarpara Baitun Noor Jame Masjid',
    nameBn: 'আগদিঘুলিয়া উত্তরপাড়া বায়তুন নূর জামে মসজিদ',
    typeEn: 'Neighborhood Jame Mosque',
    typeBn: 'মহল্লা জামে মসজিদ',
    establishedEn: 'Est. 1984',
    establishedBn: 'প্রতিষ্ঠিত: ১৯৮৪',
    addressEn: 'Uttarpara Village Pond Road, Agdighulia',
    addressBn: 'উত্তরপাড়া দিঘির পাড় রোড, আগদিঘুলিয়া',
    capacityEn: '650+ Musalli • 2 Storey • Lakeside Courtyard',
    capacityBn: '৬৫০+ মুসল্লি ধারণক্ষমতা • ২ তলা ভবন • দিঘির পাড় শান্ত পরিবেশ',
    imamEn: 'Imam & Khatib: Hafez Mawlana Zakaria Hossain',
    imamBn: 'ইমাম ও খতিব: হাফেজ মাওলানা জাকারিয়া হোসেন',
    phone: '+880 1722-334455',
    facilitiesEn: [
      'Lakeside Scenic Courtyard',
      'Modern Tiled Wudu Area',
      'Quran Hifz Department',
      'Sound System & Fan Setup',
      'Clean Drinking Water',
      'Islamic Book Corner',
    ],
    facilitiesBn: [
      'দিঘির পাড় শান্ত আঙিনা',
      'আধুনিক টাইলস অজুখানা',
      'হিফজুল কুরআন বিভাগ',
      'উন্নত সাউন্ড ও ফ্যান ব্যবস্থা',
      'বিশুদ্ধ খাবার পানি',
      'ইসলামিক পাঠাগার কর্নার',
    ],
    image: uttarparaMosqueImg,
    featured: false,
  },
  {
    id: 'dakshinpara-baitus-salam-mosque',
    nameEn: 'Agdighulia Dakshinpara Baitus Salam Jame Masjid',
    nameBn: 'আগদিঘুলিয়া দক্ষিণপাড়া বায়তুস সালাম জামে মসজিদ',
    typeEn: 'Community Jame Mosque',
    typeBn: 'কমিউনিটি জামে মসজিদ',
    establishedEn: 'Est. 1996',
    establishedBn: 'প্রতিষ্ঠিত: ১৯৯৬',
    addressEn: 'Dakshinpara Chourasta, Agdighulia',
    addressBn: 'দক্ষিণপাড়া চৌরাস্তা সংলগ্ন, আগদিঘুলিয়া',
    capacityEn: '500+ Musalli • 2 Storey • Serene Village Ambiance',
    capacityBn: '৫০০+ মুসল্লি ধারণক্ষমতা • ২ তলা ভবন • সুশীতল গ্রাম্য পরিবেশ',
    imamEn: 'Imam: Hafez Md. Nurul Islam • Khatib: Mufti Imran',
    imamBn: 'ইমাম: হাফেজ মো. নুরুল ইসলাম • খতিব: মুফতি ইমরান',
    phone: '+880 1733-556677',
    facilitiesEn: [
      'Spacious Outer Courtyard',
      'Deep Tubewell Clean Water',
      'Regular 5-Time Jamaat',
      'Daily Morning Maktab',
      'Solar Lighting Backup',
      'Peaceful Environment',
    ],
    facilitiesBn: [
      'প্রশস্ত উন্মুক্ত চত্বর',
      'গভীর নলকূপের সুপেয় পানি',
      'নিয়মিত পাঁচ ওয়াক্ত জামাত',
      'দৈনিক সকালের মক্তব',
      'সোলার লাইটিং ব্যাকআপ',
      'মনোরম শান্ত পরিবেশ',
    ],
    image: dakshinparaMosqueImg,
    featured: false,
  },
  {
    id: 'purbapara-jame-mosque-madrasa',
    nameEn: 'Agdighulia Purba Para Jame Masjid & Hafezia Madrasa',
    nameBn: 'আগদিঘুলিয়া পূর্বপাড়া জামে মসজিদ ও হাফেজিয়া মাদ্রাসা',
    typeEn: 'Madrasa & Jame Mosque',
    typeBn: 'জামে মসজিদ ও মাদ্রাসা',
    establishedEn: 'Est. 1978',
    establishedBn: 'প্রতিষ্ঠিত: ১৯৭৮',
    addressEn: 'Purba Para Madrasa Road, Agdighulia',
    addressBn: 'পূর্বপাড়া মাদ্রাসা রোড, আগদিঘুলিয়া',
    capacityEn: '600+ Musalli • 2 Storey • Madrasa Complex',
    capacityBn: '৬০০+ মুসল্লি ধারণক্ষমতা • ২ তলা ভবন • মাদ্রাসা কমপ্লেক্স',
    imamEn: 'Khatib: Mawlana Mufti Habibur Rahman',
    imamBn: 'খতিব: মাওলানা মুফতি হাবিবুর রহমান',
    phone: '+880 1744-667788',
    facilitiesEn: [
      'Hafezia Quran Madrasa',
      'Dedicated Student Maktab',
      'Ceramic Tile Wudu Area',
      'Silent Inverter Backup',
      'Deep Clean Tube-well Water',
      'Youth Islamic Library',
    ],
    facilitiesBn: [
      'হিফজুল কুরআন মাদ্রাসা',
      'নিয়মিত ছাত্র মক্তব',
      'সিরামিক টাইলস অজুখানা',
      'নীরব আইপিএস ব্যাকআপ',
      'গভীর নলকূপের বিশুদ্ধ পানি',
      'যুব ইসলামিক লাইব্রেরি',
    ],
    image: purbaparaMosqueImg,
    featured: false,
  },
  {
    id: 'paschimpara-baitul-mamur-mosque',
    nameEn: 'Agdighulia Paschim Para Baitul Ma\'mur Jame Masjid',
    nameBn: 'আগদিঘুলিয়া পশ্চিমপাড়া বায়তুল মামুর জামে মসজিদ',
    typeEn: 'Neighborhood Jame Mosque',
    typeBn: 'মহল্লা জামে মসজিদ',
    establishedEn: 'Est. 2003',
    establishedBn: 'প্রতিষ্ঠিত: ২০০৩',
    addressEn: 'Paschim Para Shanti Road, Agdighulia',
    addressBn: 'পশ্চিমপাড়া শান্তি রোড, আগদিঘুলিয়া',
    capacityEn: '550+ Musalli • 2 Storey • Modern Architecture',
    capacityBn: '৫৫০+ মুসল্লি ধারণক্ষমতা • ২ তলা ভবন • আধুনিক স্থাপত্য',
    imamEn: 'Imam & Khatib: Hafez Mawlana Tariqul Islam',
    imamBn: 'ইমাম ও খতিব: হাফেজ মাওলানা তারিকুল ইসলাম',
    phone: '+880 1755-778899',
    facilitiesEn: [
      'Modern Marble Prayer Hall',
      'Spacious Outer Courtyard',
      'Clean Filtered Water',
      'Solar & Battery System',
      'Daily 5-Time Regular Jamaat',
      'Peaceful Garden Setting',
    ],
    facilitiesBn: [
      'আধুনিক মার্বেল প্রার্থনা হল',
      'প্রশস্ত উন্মুক্ত উঠান',
      'ফিল্টার করা বিশুদ্ধ পানি',
      'সোলার ও ব্যাটারি সিস্টেম',
      'নিয়মিত ৫ ওয়াক্ত জামাত',
      'মনোরম বাগান পরিবেষ্টিত',
    ],
    image: paschimparaMosqueImg,
    featured: false,
  },
]
