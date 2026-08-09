import { Component, signal } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = signal<boolean>(false);

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }

  menuItems: MenuItem[] = [
    { label: 'About us', routerLink: '/', fragment: 'top' },
    { label: 'Services', routerLink: '/', fragment: 'services' },
    { label: 'Use Cases', routerLink: '/', fragment: 'use-cases' },
    { label: 'Pricing', routerLink: '/', fragment: 'top' },
    { label: 'Blog', routerLink: '/blog' },
  ];
}
