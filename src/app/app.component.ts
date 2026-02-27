import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModalComponent } from './features/auth/login-modal/login-modal.component';
import { RegisterModalComponent } from './features/auth/register-modal/register-modal.component';
import { ForgotPasswordModalComponent } from './features/auth/forgot-password-modal/forgot-password-modal.component';
import { UserProfileComponent } from './features/profile/user-profile/user-profile.component';
import { ReactiveGlowDirective } from './shared/directives/reactive-glow.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginModalComponent, RegisterModalComponent, ForgotPasswordModalComponent, UserProfileComponent, ReactiveGlowDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Akademos';
  isLoginModalOpen = false;
  isRegisterModalOpen = false;
  isForgotPasswordModalOpen = false;
  isLoggedIn = false;

  onLoginSuccess() {
    this.isLoggedIn = true;
    this.closeLoginModal();
    this.closeRegisterModal();
  }

  onLogout() {
    this.isLoggedIn = false;
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
