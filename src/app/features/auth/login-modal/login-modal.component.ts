import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveGlowDirective } from '../../../shared/directives/reactive-glow.directive';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [ReactiveGlowDirective],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() switchToRegister = new EventEmitter<void>();
  @Output() switchToForgotPassword = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<void>();

  onSubmit(event: Event) {
    event.preventDefault();
    this.loginSuccess.emit();
  }

  onClose() {
    this.close.emit();
  }

  onSwitchToRegister(event: Event) {
    event.preventDefault();
    this.switchToRegister.emit();
  }

  onSwitchToForgotPassword(event: Event) {
    event.preventDefault();
    this.switchToForgotPassword.emit();
  }
}
