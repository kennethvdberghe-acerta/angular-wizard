import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OnboardingFormGroup, OnboardingService } from './onboarding.service';
import { ReactiveFormsModule } from '@angular/forms';
import { WizardComponent } from './wizard/wizard.component';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, ReactiveFormsModule, WizardComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-play';
  onboardingService = inject(OnboardingService);
  public onboardingGroup$!: Observable<OnboardingFormGroup>;

  ngOnInit() {
    this.onboardingGroup$ = this.onboardingService.getOnboardingGroup$();
  }
}
