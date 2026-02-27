import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Course } from '../models/course.model';

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
}
