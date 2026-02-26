import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveGlowDirective } from '../../../shared/directives/reactive-glow.directive';
import { CommonModule } from '@angular/common';

export type AccountType = 'aprendiz' | 'mentor';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [ReactiveGlowDirective, CommonModule],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css'
})
export class RegisterModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() switchToLogin = new EventEmitter<void>();

  selectedType: AccountType = 'aprendiz'; 

  onClose() {
    this.close.emit();
  }

  onSwitchToLogin(event: Event) {
    event.preventDefault();
    this.switchToLogin.emit();
  }

  selectType(type: AccountType) {
    this.selectedType = type;
  }
}
