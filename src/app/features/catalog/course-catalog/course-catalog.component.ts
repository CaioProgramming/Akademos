import { Component, inject, OnInit, OnDestroy } from '@angular/core';
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
export class CourseCatalogComponent implements OnInit, OnDestroy {
  private courseService = inject(MockCourseService);
  
  allCourses: Course[] = [];
  featuredCourses: Course[] = [];
  filteredCourses: Course[] = [];
  categories: string[] = [];
  selectedCategory: string = 'Todos os Saberes';
  searchQuery: string = '';
  isLoading: boolean = true;
  
  activeCarouselIndex: number = 0;
  private carouselInterval: any;

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.allCourses = courses;
      this.filteredCourses = courses;
      this.featuredCourses = courses.filter(c => c.isFeatured);
      
      const uniqueCategories = new Set(courses.map(c => c.category));
      this.categories = ['Todos os Saberes', ...Array.from(uniqueCategories)];
      
      this.isLoading = false;
      this.startCarousel();
    });
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  // Carousel Methods
  startCarousel() {
    this.stopCarousel(); // Ensure no duplicates
    this.carouselInterval = setInterval(() => {
      this.nextCarouselItem();
    }, 5000);
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextCarouselItem() {
    if (this.featuredCourses.length > 0) {
      this.activeCarouselIndex = (this.activeCarouselIndex + 1) % this.featuredCourses.length;
    }
  }

  prevCarouselItem() {
    if (this.featuredCourses.length > 0) {
      this.activeCarouselIndex = (this.activeCarouselIndex - 1 + this.featuredCourses.length) % this.featuredCourses.length;
    }
  }

  goToCarouselItem(index: number) {
    this.activeCarouselIndex = index;
    this.startCarousel(); // Restart timer
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
                          course.description.toLowerCase().includes(this.searchQuery) ||
                          course.category.toLowerCase().includes(this.searchQuery) ||
                          course.level.toLowerCase().includes(this.searchQuery);
      
      return matchCategory && matchSearch;
    });
  }
}

