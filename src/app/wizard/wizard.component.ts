import { Component, input } from '@angular/core';
import { OnboardingFormGroup } from '../onboarding.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  imports: [ReactiveFormsModule],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.css',
})
export class WizardComponent {
  onboardingGroup = input.required<OnboardingFormGroup>();

  get directors() {
    return this.onboardingGroup().controls.directors;
  }
}
