import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent {
  toggleSidebar() {
    const sidebar = document.querySelector('app-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }
}
