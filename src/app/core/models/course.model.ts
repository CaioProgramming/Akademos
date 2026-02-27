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
}
