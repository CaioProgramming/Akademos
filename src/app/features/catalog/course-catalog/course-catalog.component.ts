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
  
  allCourses: Course[] = [];
  filteredCourses: Course[] = [];
  categories: string[] = [];
  selectedCategory: string = 'Todos os Saberes';
  isLoading: boolean = true;

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.allCourses = courses;
      this.filteredCourses = courses;
      
      const uniqueCategories = new Set(courses.map(c => c.category));
      this.categories = ['Todos os Saberes', ...Array.from(uniqueCategories)];
      
      this.isLoading = false;
    });
  }

  filterBy(category: string) {
    this.selectedCategory = category;
    if (category === 'Todos os Saberes') {
      this.filteredCourses = this.allCourses;
    } else {
      this.filteredCourses = this.allCourses.filter(c => c.category === category);
    }
  }
}

