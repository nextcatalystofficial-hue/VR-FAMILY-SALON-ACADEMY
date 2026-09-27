import { ServiceItem, GalleryItem, ReviewItem, SalonInfo } from '../types.ts';

// Import local generated luxury photography
import heroSalonImg from '../assets/images/hero_luxury_salon_1790519853879.jpg';
import signatureHaircutImg from '../assets/images/signature_haircut_1790519867661.jpg';
import salonInteriorImg from '../assets/images/salon_interior_lounge_1790519879836.jpg';
import groomingDetailsImg from '../assets/images/editorial_grooming_details_1790519891788.jpg';
import academyMasterclassImg from '../assets/images/academy_masterclass_1790519903148.jpg';
import beardGroomingImg from '../assets/images/gallery_beard_grooming_1790519933467.jpg';
import hairTreatmentImg from '../assets/images/gallery_hair_treatment_1790519945303.jpg';
import modernHaircutImg from '../assets/images/gallery_modern_haircut_1790519957250.jpg';

export const salonAssets = {
  hero: heroSalonImg,
  signature: signatureHaircutImg,
  interior: salonInteriorImg,
  groomingDetails: groomingDetailsImg,
  academy: academyMasterclassImg,
  beard: beardGroomingImg,
  treatment: hairTreatmentImg,
  modernHaircut: modernHaircutImg,
};

export const salonInfo: SalonInfo = {
  name: 'VR Family Salon, Academy',
  tagline: 'Crafting Your Signature Look',
  address: 'CCL Colony, Pandra',
  locality: 'Pandra',
  city: 'Ranchi',
  state: 'Jharkhand',
  pincode: '834005',
  phone: '09006782796',
  phoneFormatted: '090067 82796',
  openingHours: '8:00 AM – 8:00 PM (Daily)',
  googleRating: '5.0',
  reviewsCount: '19+',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=VR+Family+Salon+Academy+CCL+Colony+Pandra+Ranchi+Jharkhand+834005',
};

export const servicesData: ServiceItem[] = [
  {
    id: 'haircuts',
    number: '01',
    name: 'Precision Haircuts & Styling',
    category: 'Haircut & Styling',
    tagline: 'Tailored architecture for your facial contours',
    description:
      'Master scissor craftsmanship, clean fades, personalized consultations, and finishing touch styling formulated to match your individual lifestyle.',
    features: [
      'Bespoke consultation',
      'Wash & conditioning rinse',
      'Texturizing & edge cleanup',
      'Matte finish styling',
    ],
    priceNote: 'Price on consultation',
  },
  {
    id: 'beard-sculpting',
    number: '02',
    name: 'Beard Grooming & Razor Cleanse',
    category: 'Beard Care',
    tagline: 'Clean lines, hot towel steam, and nourishing oils',
    description:
      'Detailed contouring, hot towel compress, precision straight-blade cheek lines, and deep hydration for a disciplined, sharp beard silhouette.',
    features: [
      'Facial profile mapping',
      'Hot towel relaxation',
      'Single-blade edge definition',
      'Argan & botanical oil finish',
    ],
    priceNote: 'Price on consultation',
  },
  {
    id: 'hair-treatments',
    number: '03',
    name: 'Hair Treatments & Scalp Rituals',
    category: 'Hair Care',
    tagline: 'Restorative therapy for hair vitality and scalp balance',
    description:
      'Deep conditioning spa rituals, intensive moisture replenishment, and therapeutic scalp massage designed to strengthen roots and enhance texture.',
    features: [
      'Scalp assessment',
      'Nutrient-rich hair spa',
      'Relaxing pressure-point massage',
      'Thermal steam infusion',
    ],
    priceNote: 'Price on consultation',
  },
  {
    id: 'facial-services',
    number: '04',
    name: 'Revitalizing Facial & Skin Services',
    category: 'Skincare',
    tagline: 'Deep pore purification and renewed natural radiance',
    description:
      'Professional facial treatments crafted specifically for men and family skin care. Removes dullness, clears impurities, and leaves skin refreshed.',
    features: [
      'Exfoliating cleansing scrub',
      'Detox mask treatment',
      'Soothing facial massage',
      'Hydration lock barrier',
    ],
    priceNote: 'Price on consultation',
  },
  {
    id: 'specialized-care',
    number: '05',
    name: 'Advanced Hair Care & Consultation',
    category: 'Specialized Care',
    tagline: 'In-depth assessment for hair restoration and maintenance',
    description:
      'Personalized hair health evaluation, specialized post-treatment maintenance guidance, and professional advisory for long-term hair strength.',
    features: [
      'One-on-one specialist consultation',
      'Hair density & health check',
      'Custom regimen advice',
      'Follow-up care guidelines',
    ],
    priceNote: 'Price on consultation',
  },
  {
    id: 'academy-training',
    number: '06',
    name: 'Professional Academy Education',
    category: 'Academy',
    tagline: 'Learn the craft directly from skilled salon masters',
    description:
      'Comprehensive grooming courses covering fundamental scissor techniques, modern fades, salon sanitation, and client consulting excellence.',
    features: [
      'Hands-on styling practice',
      'Modern barbering techniques',
      'Tool handling & sanitation',
      'Mentorship from experienced stylists',
    ],
    priceNote: 'Price on consultation',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Precision Scissor Work',
    category: 'hairstyles',
    categoryLabel: 'Hairstyle',
    image: signatureHaircutImg,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'g2',
    title: 'The Grooming Studio Lounge',
    category: 'salon',
    categoryLabel: 'Salon Interior',
    image: heroSalonImg,
    aspect: 'aspect-[16/9]',
  },
  {
    id: 'g3',
    title: 'Hot Towel Beard Sculpting',
    category: 'grooming',
    categoryLabel: 'Beard Grooming',
    image: beardGroomingImg,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'g4',
    title: 'Modern Textured Fade',
    category: 'hairstyles',
    categoryLabel: 'Hairstyle',
    image: modernHaircutImg,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'g5',
    title: 'Restorative Hair Spa Therapy',
    category: 'grooming',
    categoryLabel: 'Hair Treatment',
    image: hairTreatmentImg,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'g6',
    title: 'Artisan Barbering Instruments',
    category: 'grooming',
    categoryLabel: 'Artisan Tools',
    image: groomingDetailsImg,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'g7',
    title: 'Academy Styling Workshop',
    category: 'academy',
    categoryLabel: 'Academy',
    image: academyMasterclassImg,
    aspect: 'aspect-[16/9]',
  },
  {
    id: 'g8',
    title: 'Architectural Styling Station',
    category: 'salon',
    categoryLabel: 'Interior',
    image: salonInteriorImg,
    aspect: 'aspect-[16/9]',
  },
];

export const reviewsData: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Verified Ranchi Client',
    rating: 5,
    date: 'Recent Google Review',
    content:
      'Good service with very reasonable pricing. The team took the time to understand exactly how I wanted my hair cut and styled. Highly recommended in Pandra!',
    serviceMentioned: 'Haircut & Styling',
  },
  {
    id: 'r2',
    name: 'Local Pandra Resident',
    rating: 5,
    date: 'Recent Google Review',
    content:
      'Professional and experienced team. The ambiance is clean and comfortable, and their grooming work is very neat and precise.',
    serviceMentioned: 'Grooming Service',
  },
  {
    id: 'r3',
    name: 'Salon Patron',
    rating: 5,
    date: 'Recent Google Review',
    content:
      'Tried their facial services and head massage ritual. Outstanding relaxation and visible glow. The staff is polite, polite, and very respectful.',
    serviceMentioned: 'Facial & Skin Care',
  },
  {
    id: 'r4',
    name: 'Grooming Enthusiast',
    rating: 5,
    date: 'Recent Google Review',
    content:
      'VR Family Salon is hands down a top choice in CCL Colony. Their hair treatment consultation and beard shaping gave me a fresh signature look.',
    serviceMentioned: 'Hair & Beard Care',
  },
];

export const whyVrPillars = [
  {
    number: '01',
    title: 'Professional Service',
    description:
      'Pristine hygiene standards, sterilized blades, premium barbering chairs, and patient, unhurried service for every guest.',
  },
  {
    number: '02',
    title: 'Experienced Team',
    description:
      'Skilled and trained stylists with deep expertise in classic cuts, modern fade gradients, and contemporary hair treatments.',
  },
  {
    number: '03',
    title: 'Modern Grooming',
    description:
      'Balancing time-honored straight-razor craftsmanship with up-to-date techniques, ergonomic styling, and refined aesthetics.',
  },
  {
    number: '04',
    title: 'Personalized Style',
    description:
      'Every haircut, beard line, and skin ritual is customized to match your bone structure, hair texture, and everyday routine.',
  },
];
