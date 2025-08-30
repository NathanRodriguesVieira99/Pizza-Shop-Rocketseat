import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface ApproveOrderParams {
  orderId: string;
}

export interface IApproveOrderService {
  exec: (orderId: ApproveOrderParams) => Promise<void>;
}

export class ApproveOrderService implements IApproveOrderService {
  constructor(private readonly httpClient: HttpClient) {}

  async exec({ orderId }: ApproveOrderParams): Promise<void> {
    await this.httpClient.request({
      method: HttpMethod.PATCH,
      endpoint: `/orders/${orderId}/approve`,
    });
  }
}
