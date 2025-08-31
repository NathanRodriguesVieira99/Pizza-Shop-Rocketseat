import { HttpResponse, http } from 'msw';
import type { GetProfileResponse } from '../get-profile';

export const GetProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Jhon Doe',
      email: 'jhondoe@acme.com',
      phone: '999999999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    });
  }
);
