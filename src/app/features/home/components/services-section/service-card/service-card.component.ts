import { Component, input, output } from '@angular/core';
import { ServiceCardItem } from '../../../models/service-card-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  service = input.required<ServiceCardItem>();

  learnMoreClick = output<{ card: ServiceCardItem }>();

  onLearnMoreClick(): void {
    this.learnMoreClick.emit({
      card: this.service(),
    });
  }
}
