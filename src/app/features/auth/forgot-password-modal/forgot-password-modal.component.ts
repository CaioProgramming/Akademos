import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveGlowDirective } from '../../../shared/directives/reactive-glow.directive';

@Component({
  selector: 'app-forgot-password-modal',
  standalone: true,
  imports: [ReactiveGlowDirective],
  templateUrl: './forgot-password-modal.component.html',
  styleUrl: './forgot-password-modal.component.css'
})
export class ForgotPasswordModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() switchToLogin = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onSwitchToLogin(event: Event) {
    event.preventDefault();
    this.switchToLogin.emit();
  }
}
