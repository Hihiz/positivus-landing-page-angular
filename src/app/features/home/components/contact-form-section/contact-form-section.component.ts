import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form-section.component.html',
  styleUrl: './contact-form-section.component.scss',
})
export class ContactFormSectionComponent {
  private fb = inject(FormBuilder);

  contactUsForm = this.fb.group({
    radioSelection: ['Say Hi', Validators.required],
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(500)]],
  });

  get radioSelection() {
    return this.contactUsForm.get('radioSelection');
  }
  get name() {
    return this.contactUsForm.get('name');
  }
  get email() {
    return this.contactUsForm.get('email');
  }
  get message() {
    return this.contactUsForm.get('message');
  }

  onSubmit(): void {
    if (this.contactUsForm.invalid) {
      this.contactUsForm.markAllAsTouched();
      return;
    }

    console.log(this.contactUsForm.value);
  }
}
