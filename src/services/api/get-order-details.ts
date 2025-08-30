import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface GetOrderDetailsParams {
  orderId: string;
}

export interface GetOrdersDetailsResponse {
  id: string;
  createdAt: string;
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered';
  totalInCents: number;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  };
  orderItems: {
    id: string;
    priceInCents: number;
    quantity: number;
    productName: string;
  }[];
}

export interface IGetOrderDetailsService {
  exec: (orderId: GetOrderDetailsParams) => Promise<GetOrdersDetailsResponse>;
}

export class GetOrderDetailsService implements IGetOrderDetailsService {
  constructor(private readonly httpClient: HttpClient) {}

  async exec({ orderId }: GetOrderDetailsParams) {
    const getOrdersDetailsResponse = await this.httpClient.request<
      GetOrdersDetailsResponse,
      unknown
    >({
      method: HttpMethod.GET,
      endpoint: `/orders/${orderId}`,
    });

    return getOrdersDetailsResponse;
  }
}
