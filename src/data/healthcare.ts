import hospitalImg from '@/assets/image/hospital.jpg'
import pharmacy1Img from '@/assets/image/pharmacy-1.jpg'
import pharmacy2Img from '@/assets/image/pharmacy-2.jpg'

export interface HealthcareEntity {
  id: string
  nameEn: string
  nameBn: string
  category: 'Hospital' | 'Pharmacy'
  categoryBn: string
  typeEn: string
  typeBn: string
  addressEn: string
  addressBn: string
  servicesEn: string
  servicesBn: string
  facilitiesEn: string[]
  facilitiesBn: string[]
  phone: string
  image: string
}

export const HEALTHCARE_ITEMS: HealthcareEntity[] = [
  {
    id: 'agdighulia-union-health-center',
    nameEn: 'Agdighulia Union Health & Family Welfare Center',
    nameBn: 'আগদিঘুলিয়া ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র',
    category: 'Hospital',
    categoryBn: 'হাসপাতাল',
    typeEn: 'Government Hospital',
    typeBn: 'সরকারি হাসপাতাল',
    addressEn: 'Main Road, Agdighulia Center, Tangail',
    addressBn: 'প্রধান সড়ক, আগদিঘুলিয়া কেন্দ্র, টাঙ্গাইল',
    servicesEn: 'Emergency Care • Maternal Health • Free Medicine • Outdoor Consultation',
    servicesBn: 'জরুরি সেবা • প্রসূতি স্বাস্থ্য • বিনামূল্যে ওষুধ • বহির্বিভাগ চিকিৎসা',
    facilitiesEn: ['Emergency 24/7', 'Doctor On-Duty', 'Maternal Clinic', 'Free Vaccine', 'Oxygen Supply', 'Ambulance Call'],
    facilitiesBn: ['২৪/৭ জরুরি সেবা', 'নিয়মিত চিকিৎসক', 'মাতৃসেবা ক্লিনিক', 'বিনামূল্যে টিকা', 'অক্সিজেন সুবিধা', 'অ্যাম্বুলেন্স কল'],
    phone: '+880 1712-345678',
    image: hospitalImg,
  },
  {
    id: 'sohel-pharmacy',
    nameEn: 'Sohel Pharmacy & Red Green Pharma',
    nameBn: 'সোহেল ফার্মেসী ও রেড গ্রীন ফার্মা',
    category: 'Pharmacy',
    categoryBn: 'ফার্মেসি',
    typeEn: 'Retail Pharmacy',
    typeBn: 'ফার্মেসি ও ড্রাগস্টোর',
    addressEn: 'Station Road Bazaar, Agdighulia',
    addressBn: 'স্টেশন রোড বাজার, আগদিঘুলিয়া',
    servicesEn: 'Authentic Medicine • Prescription Drugs • BP & Sugar Test • 24/7 Support',
    servicesBn: 'আসল ওষুধ • প্রেসক্রিপশন মেডিসিন • রক্তচাপ ও সুগার টেস্ট • সার্বক্ষণিক সেবা',
    facilitiesEn: ['Authentic Medicines', 'Doctor Chamber', 'Blood Pressure Check', 'Nebulizer Service', 'Baby Care Items', 'Emergency Delivery'],
    facilitiesBn: ['১০০% আসল ওষুধ', 'ডাক্তার চেম্বার', 'রক্তচাপ পরীক্ষা', 'নেবুলাইজার সেবা', 'শিশু স্বাস্থ্য সামগ্রী', 'জরুরি ওষুধ সরবরাহ'],
    phone: '+880 1733-445566',
    image: pharmacy1Img,
  },
  {
    id: 'janata-pharmacy',
    nameEn: 'M/S Janata Pharmacy & Medical Dispensary',
    nameBn: 'মেসার্স জনতা ফার্মেসী ও মেডিকেল ডিসপেনসারি',
    category: 'Pharmacy',
    categoryBn: 'ফার্মেসি',
    typeEn: 'Rural Dispensary',
    typeBn: 'মেডিকেল ডিসপেনসারি',
    addressEn: 'Central Village Chourasta, Agdighulia',
    addressBn: 'গ্রাম চৌরাস্তা মোড়, আগদিঘুলিয়া',
    servicesEn: 'First Aid • Human & Veterinary Drugs • Telemedicine • Fair Price',
    servicesBn: 'ফার্স্ট এইড • মানুষ ও পশু ওষুধ • টেলিমেডিসিন • ন্যায্য মূল্য',
    facilitiesEn: ['First Aid Dressing', 'Emergency Drugs', 'Surgical Items', 'Saline & Injections', 'Weight & Pulse Check', 'Fair Price'],
    facilitiesBn: ['ড্রেসিং ও প্রাথমিক চিকিৎসা', 'জরুরি ওষুধ', 'সার্জিক্যাল সামগ্রী', 'স্যালাইন ও ইনজেকশন', 'নাড়ি ও ওজন পরীক্ষা', 'ন্যায্য মূল্য'],
    phone: '+880 1799-887766',
    image: pharmacy2Img,
  },
]
