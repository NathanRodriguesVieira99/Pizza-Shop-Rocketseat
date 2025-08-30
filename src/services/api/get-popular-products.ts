import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export type GetPopularProductsResponse = {
  product: string;
  amount: number;
}[];

export interface IGetPopularProducts {
  exec(): Promise<GetPopularProductsResponse>;
}

export class GetPopularProductsService implements IGetPopularProducts {
  constructor(private readonly httpClient: HttpClient) {}

  async exec() {
    const getPopularProductsResponse = await this.httpClient.request<
      GetPopularProductsResponse,
      unknown
    >({
      method: HttpMethod.GET,
      endpoint: '/metrics/popular-products',
    });

    return getPopularProductsResponse;
  }
}
