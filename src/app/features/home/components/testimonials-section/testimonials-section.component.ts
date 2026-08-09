import { AfterViewInit, Component, computed, ElementRef, input, OnDestroy, signal, viewChild } from '@angular/core';
import { TestimonialItem } from '../../../../shared/models/testimonial-item';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials-section',
  imports: [TestimonialCardComponent],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss',
})
export class TestimonialsSectionComponent implements AfterViewInit, OnDestroy {
  testimonials = input.required<TestimonialItem[]>();

  activeIndex = signal<number>(0);
  sliderRef = viewChild<ElementRef<HTMLDivElement>>('slider');

  private observer: IntersectionObserver | null = null;

  readonly dots = computed(() => {
    const count = Math.min(this.testimonials().length, 6);
    return Array.from({ length: count }, (_, i) => i);
  });

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    const slider = this.sliderRef()?.nativeElement;
    if (!slider) return;

    const cards = slider.querySelectorAll('.testimonial-card');

    cards.forEach((card, i) => {
      (card as HTMLElement).dataset['index'] = String(i);
    });

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset['index']);
            this.activeIndex.set(index);
          }
        });
      },
      {
        root: slider,
        threshold: window.innerWidth >= 1024 ? 1.0 : 0.5,
      },
    );

    cards.forEach((card) => this.observer!.observe(card));
  }

  scrollToPrev(): void {
    this.activeIndex.update((current) => (current === 0 ? this.dots().length - 1 : current - 1));

    this.scrollToIndex(this.activeIndex());
  }

  scrollToNext(): void {
    this.activeIndex.update((current) => (current === this.dots().length - 1 ? 0 : current + 1));

    this.scrollToIndex(this.activeIndex());
  }

  scrollToIndex(index: number): void {
    const slider = this.sliderRef()?.nativeElement;
    if (!slider) return;

    const cards = slider.querySelectorAll('.testimonial-card');
    const targetCard = cards[index] as HTMLElement;
    if (!targetCard) return;

    const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
    const scrollStep = targetCard.offsetWidth + gap;

    slider.scrollTo({
      left: scrollStep * index,
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
