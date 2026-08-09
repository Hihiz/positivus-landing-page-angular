import { Component, input } from '@angular/core';
import { TestimonialItem } from '../../../../../shared/models/testimonial-item';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss',
})
export class TestimonialCardComponent {
  testimonial = input.required<TestimonialItem>();
}
