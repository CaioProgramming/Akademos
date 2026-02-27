import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockCourseService } from '../../../core/services/mock-course.service';
import { Course } from '../../../core/models/course.model';
import { Observable } from 'rxjs';
import { ReactiveGlowDirective } from '../../../shared/directives/reactive-glow.directive';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, ReactiveGlowDirective],
  templateUrl: './course-catalog.component.html',
  styleUrl: './course-catalog.component.css'
})
export class CourseCatalogComponent implements OnInit {
  private courseService = inject(MockCourseService);
  courses$: Observable<Course[]> | undefined;

  ngOnInit(): void {
    this.courses$ = this.courseService.getCourses();
  }
}

