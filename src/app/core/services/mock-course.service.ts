import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class MockCourseService {
  private courses: Course[] = [
    {
      id: 'c1',
      title: 'A Arte da Retórica: Persuasão Clássica',
      description: 'Domine os princípios da retórica aristotélica e eleve sua capacidade de argumentação ao nível dos grandes oradores da Grécia Antiga.',
      instructor: 'Mentor Aristides',
      thumbnail: 'assets/covers/rhetoric.jpg',
      category: 'Comunicação',
      level: 'Intermediário',
      durationHours: 12,
      rating: 4.9
    },
    {
      id: 'c2',
      title: 'Os Cálculos do Cosmos: Matemática Pura',
      description: 'Uma jornada pelos fundamentos da geometria Euclidiana até sua aplicação nas arquiteturas magnânimas modernas.',
      instructor: 'Mentor Arquimedes',
      thumbnail: 'assets/covers/math.jpg',
      category: 'Ciência',
      level: 'Avançado',
      durationHours: 24,
      rating: 5.0
    },
    {
      id: 'c3',
      title: 'Filosofia Estoica para a Vida',
      description: 'Aprenda a aplicar o estoicismo de Sêneca e Marco Aurélio para focar no que você pode controlar e prosperar na incerteza.',
      instructor: 'Mentor Sêneca',
      thumbnail: 'assets/covers/stoicism.jpg',
      category: 'Desenvolvimento Pessoal',
      level: 'Iniciante',
      durationHours: 8,
      rating: 4.8
    },
    {
      id: 'c4',
      title: 'Estratégia e Tática: O Tabuleiro de Atena',
      description: 'Fundamentos de estratégia inspirados pela Deusa da Sabedoria, aplicáveis nas decisões e negócios modernos.',
      instructor: 'Mentora Atena',
      thumbnail: 'assets/covers/strategy.jpg',
      category: 'Negócios',
      level: 'Avançado',
      durationHours: 15,
      rating: 4.9
    }
  ];

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseById(id: string): Observable<Course | undefined> {
    return of(this.courses.find(c => c.id === id));
  }
}
