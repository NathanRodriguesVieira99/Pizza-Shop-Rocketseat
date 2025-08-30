import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface DispatchOrderParams {
  orderId: string;
}

export interface IDispatchOrderService {
  exec: (orderId: DispatchOrderParams) => Promise<void>;
}

export class DispatchOrderService implements IDispatchOrderService {
  constructor(private readonly httpClient: HttpClient) {}

  async exec({ orderId }: DispatchOrderParams): Promise<void> {
    await this.httpClient.request({
      method: HttpMethod.PATCH,
      endpoint: `/orders/${orderId}/dispatch`,
    });
  }
}
