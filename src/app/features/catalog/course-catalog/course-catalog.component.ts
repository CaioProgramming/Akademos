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
  featuredCourses: Course[] = [];
  filteredCourses: Course[] = [];
  categories: string[] = [];
  selectedCategory: string = 'Todos os Saberes';
  searchQuery: string = '';
  isLoading: boolean = true;

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.allCourses = courses;
      this.filteredCourses = courses;
      this.featuredCourses = courses.filter(c => c.isFeatured);
      
      const uniqueCategories = new Set(courses.map(c => c.category));
      this.categories = ['Todos os Saberes', ...Array.from(uniqueCategories)];
      
      this.isLoading = false;
    });
  }

  onSearch(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.applyFilters();
  }

  filterBy(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  private applyFilters() {
    this.filteredCourses = this.allCourses.filter(course => {
      const matchCategory = this.selectedCategory === 'Todos os Saberes' || course.category === this.selectedCategory;
      const matchSearch = course.title.toLowerCase().includes(this.searchQuery) || 
                          course.instructor.toLowerCase().includes(this.searchQuery) ||
                          course.description.toLowerCase().includes(this.searchQuery);
      
      return matchCategory && matchSearch;
    });
  }
}

