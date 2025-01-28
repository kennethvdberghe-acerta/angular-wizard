import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

export type Onboarding = {
  id: number;
  company: {
    name: string | null;
  };
  directors: Array<{
    fullName: string | null;
  }>;
};

export type OnboardingFormGroup = FormGroup<{
  company: FormGroup<{
    name: FormControl<string | null>;
  }>;
  directors: FormArray<
    FormGroup<{
      fullName: FormControl<string | null>;
    }>
  >;
}>;

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  private httpClient = inject(HttpClient);
  private fb = inject(FormBuilder);

  getOnboardingGroup$(): Observable<OnboardingFormGroup> {
    return this.httpClient
      .get<Onboarding>('http://example.com/onboarding')
      .pipe(
        map((onboarding) => {
          const form = this.fb.group({
            company: this.fb.group({
              name: this.fb.control('name'),
            }),
            directors: this.fb.array(
              onboarding.directors.map((d) =>
                this.fb.group({
                  fullName: this.fb.control('fullName'),
                })
              )
            ),
          });
          form.patchValue(onboarding);
          return form;
        })
      );
  }
}
