import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'aprendiz' | 'mentor';
  avatarUrl?: string; // or an icon if not provided
  joinedDate: Date;
  completedCourses: number;
  totalXp: number;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  // We accept the user data via @Input to respect architecture
  // so a higher-level module or service can fetch and pass this data.
  @Input() user: UserProfile | null = null;
  @Output() logout = new EventEmitter<void>();

  // Temporary function to simulate fetching data if none is provided via Input
  ngOnInit() {
    if (!this.user) {
      this.loadMockData();
    }
  }

  loadMockData() {
    this.user = {
      id: 'usr_akademos_001',
      name: 'Platão da Silva',
      email: 'platao@akademos.com',
      role: 'aprendiz',
      joinedDate: new Date('2023-01-15'),
      completedCourses: 4,
      totalXp: 12500
    };
  }

  onLogout() {
    this.logout.emit();
  }
}
