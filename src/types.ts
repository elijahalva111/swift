export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  basePrice: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  location: string;
}

export interface QuoteSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceNeeded: string;
  message: string;
  windowCount: number;
  includeScreens: boolean;
  includeTracks: boolean;
  storeys: number; // 1, 2, or 3
  isInteriorAndExterior: boolean;
  estimatedPrice: number;
  status: 'Pending Review' | 'Scheduled' | 'Completed';
  createdAt: string;
}
