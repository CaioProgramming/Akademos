import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { LoginModalComponent } from './features/auth/login-modal/login-modal.component';
import { RegisterModalComponent } from './features/auth/register-modal/register-modal.component';
import { ForgotPasswordModalComponent } from './features/auth/forgot-password-modal/forgot-password-modal.component';
import { ReactiveGlowDirective } from './shared/directives/reactive-glow.directive';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LandingHomeComponent } from './features/landing/pages/landing-home/landing-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginModalComponent, RegisterModalComponent, ForgotPasswordModalComponent, ReactiveGlowDirective, TopbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Akademos';
  isLoginModalOpen = false;
  isRegisterModalOpen = false;
  isForgotPasswordModalOpen = false;
  isLoggedIn = false;
  
  private router = inject(Router);

  onOutletActivated(component: any) {
    if (component instanceof LandingHomeComponent) {
      component.openRegister.subscribe(() => this.openRegisterModal());
    }
  }

  onLoginSuccess() {
    this.isLoggedIn = true;
    this.router.navigate(['/catalogo']);
    this.closeLoginModal();
    this.closeRegisterModal();
  }

  onLogout() {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  navigateHome() {
    if (this.isLoggedIn) {
      this.router.navigate(['/catalogo']);
    } else {
      this.router.navigate(['/']);
    }
  }

  navigateToCatalog() {
    this.router.navigate(['/catalogo']);
  }

  openLoginModal() {
    this.isLoginModalOpen = true;
    this.isRegisterModalOpen = false;
    this.isForgotPasswordModalOpen = false;
  }

  closeLoginModal() {
    this.isLoginModalOpen = false;
  }

  openRegisterModal() {
    this.isRegisterModalOpen = true;
    this.isLoginModalOpen = false;
    this.isForgotPasswordModalOpen = false;
  }

  closeRegisterModal() {
    this.isRegisterModalOpen = false;
  }

  openForgotPasswordModal() {
    this.isForgotPasswordModalOpen = true;
    this.isLoginModalOpen = false;
    this.isRegisterModalOpen = false;
  }

  closeForgotPasswordModal() {
    this.isForgotPasswordModalOpen = false;
  }
}
