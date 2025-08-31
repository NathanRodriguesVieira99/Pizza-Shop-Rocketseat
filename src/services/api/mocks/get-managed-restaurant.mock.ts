import { HttpResponse, http } from 'msw';
import type { GetManagedRestaurantResponse } from '../get-managed-restaurant';

export const GetManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-managed-restaurant-id',
    managerId: 'custom-manager-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description',
    createdAt: new Date(),
    updatedAt: null,
  });
});
