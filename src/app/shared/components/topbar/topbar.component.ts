import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  @Input() isLoggedIn = false;
  @Input() username = 'Aprendiz';
  
  @Output() loginClick = new EventEmitter<void>();
  @Output() logoutClick = new EventEmitter<void>();
  @Output() navigateHome = new EventEmitter<void>();
  @Output() navigateCatalog = new EventEmitter<void>();
  @Output() navigateProfile = new EventEmitter<void>();

  onLoginClick() {
    this.loginClick.emit();
  }

  onLogoutClick() {
    this.logoutClick.emit();
  }

  onProfileClick() {
    this.navigateProfile.emit();
  }

  onLogoClick() {
    this.navigateHome.emit();
  }

  onCatalogClick() {
    this.navigateCatalog.emit();
  }
}

