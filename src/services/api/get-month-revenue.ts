import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface GetMonthRevenueResponse {
  receipt: number;
  diffFromLastMonth: number;
}

export interface IGetMonthRevenue {
  exec(): Promise<GetMonthRevenueResponse>;
}

export class GetMonthRevenueService implements IGetMonthRevenue {
  constructor(private readonly httpClient: HttpClient) {}

  async exec() {
    const getMonthRevenueResponse = await this.httpClient.request<
      GetMonthRevenueResponse,
      unknown
    >({
      method: HttpMethod.GET,
      endpoint: '/metrics/month-receipt',
    });

    return getMonthRevenueResponse;
  }
}
