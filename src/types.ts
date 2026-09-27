export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  priceNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hairstyles' | 'grooming' | 'salon' | 'academy';
  categoryLabel: string;
  image: string;
  aspect: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  content: string;
  serviceMentioned?: string;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  phoneFormatted: string;
  openingHours: string;
  googleRating: string;
  reviewsCount: string;
  googleMapsUrl: string;
}
