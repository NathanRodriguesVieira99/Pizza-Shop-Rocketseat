import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export interface IGetManagedRestaurant {
  exec: (data?: undefined) => Promise<GetManagedRestaurantResponse>;
}

export class GetManagedRestaurant implements IGetManagedRestaurant {
  constructor(private readonly httpClient: HttpClient) {}

  async exec() {
    const getGetManagedRestaurantResponse = await this.httpClient.request<
      GetManagedRestaurantResponse,
      undefined
    >({
      method: HttpMethod.GET,
      endpoint: '/managed-restaurant',
    });

    return getGetManagedRestaurantResponse;
  }
}
