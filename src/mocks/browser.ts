import { setupWorker } from 'msw/browser';
import { http, HttpResponse } from 'msw';
import { Onboarding } from '../app/onboarding.service';

export const mocks = [
  http.get('http://example.com/onboarding', () => {
    return HttpResponse.json<Onboarding>({
      id: 123,
      company: { name: 'Optis' },
      directors: [
        { fullName: 'Jefke Vermeulen' },
        { fullName: 'Peter Peters' },
      ],
    });
  }),
];

const worker = setupWorker(...mocks);

export { worker };
