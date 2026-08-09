import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { SocialItem } from '../../models/social-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  menuItems: MenuItem[] = [
    { label: 'About us', routerLink: '/', fragment: 'top' },
    { label: 'Services', routerLink: '/', fragment: 'services' },
    { label: 'Use Cases', routerLink: '/', fragment: 'use-cases' },
    { label: 'Pricing', routerLink: '/', fragment: 'top' },
    { label: 'Blog', routerLink: '/blog',  },
  ];

  socials: SocialItem[] = [
    {
      label: 'LinkedIn',
      href: '#',
      icon: '/img/social-icons/in-footer.svg',
    },
    {
      label: 'Facebook',
      href: '#',
      icon: '/img/social-icons/f-footer.svg',
    },
    {
      label: 'Twitter',
      href: '#',
      icon: '/img/social-icons/t-footer.svg',
    },
  ];

  onSubscribe(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    if (!form) {
      return;
    }

    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    if (!email) {
      return;
    }
    
    form.reset();
  }
}
