import { HttpResponse, http } from 'msw';

import type { RegisterRestaurantRequest } from '../register-restaurant-service';

export const RegisterRestaurantMock = http.post<
  never,
  RegisterRestaurantRequest
>('/restaurants', async ({ request }) => {
  const { restaurantName } = await request.json();

  if (restaurantName === 'Pizza Shop') {
    return new HttpResponse(null, { status: 201 });
  }

  return new HttpResponse(null, { status: 400 });
});
