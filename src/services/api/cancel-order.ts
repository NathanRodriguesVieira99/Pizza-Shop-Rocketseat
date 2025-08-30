import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface CancelOrderParams {
  orderId: string;
}

export interface ICancelOrderService {
  exec: (orderId: CancelOrderParams) => Promise<void>;
}

export class CancelOrderService implements ICancelOrderService {
  constructor(private readonly httpClient: HttpClient) {}

  async exec({ orderId }: CancelOrderParams): Promise<void> {
    await this.httpClient.request({
      method: HttpMethod.PATCH,
      endpoint: `/orders/${orderId}/cancel`,
    });
  }
}
