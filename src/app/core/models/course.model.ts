export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  category: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  durationHours: number;
  rating: number;
  isFeatured?: boolean;
  price: number;
}

export interface Mentor {
  id: string;
  name: string;
  subjects: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
}
