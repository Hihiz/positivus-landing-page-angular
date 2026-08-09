import { Component } from '@angular/core';
import { LogoItem } from '../../models/logo-item';

@Component({
  selector: 'app-company-logos-section',
  imports: [],
  templateUrl: './company-logos-section.component.html',
  styleUrl: './company-logos-section.component.scss',
})
export class CompanyLogosSectionComponent {
  logoItems: LogoItem[] = [
    { src: '/img/logo-companies/Company-logo-amazon.svg', alt: 'amazon' },
    { src: '/img/logo-companies/Company-logo-dribble.svg', alt: 'dribble' },
    { src: '/img/logo-companies/Company-logo-hubspot.svg', alt: 'hubspot' },
    { src: '/img/logo-companies/Company-logo-notion.svg', alt: 'notion' },
    { src: '/img/logo-companies/Company-logo-netflix.svg', alt: 'netflix' },
    { src: '/img/logo-companies/Company-logo-zoom.svg', alt: 'zoom' },
  ];
}
