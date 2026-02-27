import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Course, Mentor } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class MockCourseService {
  private http = inject(HttpClient);
  private dataUrl = '/assets/data/courses.json';

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.dataUrl).pipe(
      delay(800) // Simula atraso de rede
    );
  }

  getCourseById(id: string): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map(courses => courses.find(c => c.id === id))
    );
  }

  getTopMentors(): Observable<Mentor[]> {
    const mockMentors: Mentor[] = [
      {
        id: 'm1',
        name: 'Ana Silva',
        subjects: 'Inglês & Espanhol',
        rating: 4.9,
        reviewCount: 127,
        hourlyRate: 80
      },
      {
        id: 'm2',
        name: 'Pedro Costa',
        subjects: 'Python & JavaScript',
        rating: 4.9,
        reviewCount: 127,
        hourlyRate: 80
      },
      {
        id: 'm3',
        name: 'Julia Martins',
        subjects: 'Matemática e Lógica',
        rating: 5.0,
        reviewCount: 204,
        hourlyRate: 100
      },
      {
        id: 'm4',
        name: 'Carlos Oliveira',
        subjects: 'Design de UX/UI',
        rating: 4.8,
        reviewCount: 95,
        hourlyRate: 110
      }
    ];
    return of(mockMentors).pipe(delay(600));
  }
}
