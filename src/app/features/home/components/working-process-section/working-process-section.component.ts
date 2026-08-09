import { Component, input, signal } from '@angular/core';
import { ProcessStep } from '../../models/process-step';

@Component({
  selector: 'app-working-process-section',
  imports: [],
  templateUrl: './working-process-section.component.html',
  styleUrl: './working-process-section.component.scss',
})
export class WorkingProcessSectionComponent {
  activeStepIndex = signal<number | null>(0);

  steps = input.required<ProcessStep[]>();

  readonly plusIcon = '/img/working-process/plus-icon.svg';
  readonly minusIcon = '/img/working-process/minus-icon.svg';

  toggleStep(index: number): void {
    this.activeStepIndex.update((current) => (current === index ? null : index));
  }

  isOpen(index: number): boolean {
    return this.activeStepIndex() === index;
  }
}
