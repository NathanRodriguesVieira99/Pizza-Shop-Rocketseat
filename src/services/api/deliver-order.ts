import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface DeliverOrderParams {
  orderId: string;
}

export interface IDeliverOrderService {
  exec: (orderId: DeliverOrderParams) => Promise<void>;
}

export class DeliverOrderService implements IDeliverOrderService {
  constructor(private readonly httpClient: HttpClient) {}

  async exec({ orderId }: DeliverOrderParams): Promise<void> {
    await this.httpClient.request({
      method: HttpMethod.PATCH,
      endpoint: `/orders/${orderId}/deliver`,
    });
  }
}
