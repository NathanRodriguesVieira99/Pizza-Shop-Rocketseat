import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface GetOrdersQuery {
  pageIndex?: number | null;
  orderId: string | null;
  status: string | null;
  customerName: string | null;
}

export type GetOrdersResponse = {
  orders: {
    orderId: string;
    createdAt: string;
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered';
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
};

export interface IGetOrdersService {
  exec: (pageIndex: GetOrdersQuery) => Promise<GetOrdersResponse>;
}

export class GetOrdersService implements IGetOrdersService {
  constructor(private readonly httpClient: HttpClient) {}

  async exec({ pageIndex, orderId, customerName, status }: GetOrdersQuery) {
    const getOrdersResponse = await this.httpClient.request<
      GetOrdersResponse, // resposta da requisição
      unknown // unknown pois GET não tem body
    >({
      method: HttpMethod.GET,
      endpoint: '/orders',
      params: {
        pageIndex,
        orderId,
        customerName,
        status,
      },
    });

    return getOrdersResponse;
  }
}
