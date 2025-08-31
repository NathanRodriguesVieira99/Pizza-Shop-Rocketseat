import { HttpResponse, http } from 'msw';
import type { GetPopularProductsResponse } from '../get-popular-products';

export const GetPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 5 },
    { product: 'Pizza 02', amount: 6 },
    { product: 'Pizza 03', amount: 10 },
    { product: 'Pizza 04', amount: 8 },
    { product: 'Pizza 05', amount: 13 },
  ]);
});
