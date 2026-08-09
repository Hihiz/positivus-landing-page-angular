import { Component, input, output } from '@angular/core';
import { ServiceCardItem } from '../../models/service-card-item';
import { ServiceCardComponent } from './service-card/service-card.component';

@Component({
  selector: 'app-services-section',
  imports: [ServiceCardComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  services = input.required<ServiceCardItem[]>();

  learnMoreClick = output<ServiceCardItem>();

  onLearnMore(event: { card: ServiceCardItem }): void {
    console.log('Learn more clicked: ', event.card.title);

    this.learnMoreClick.emit(event.card);
  }
}
