import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/pages/landing-home/landing-home.component').then(c => c.LandingHomeComponent)
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./features/catalog/course-catalog/course-catalog.component').then(c => c.CourseCatalogComponent)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./features/profile/user-profile/user-profile.component').then(c => c.UserProfileComponent)
  }
];
