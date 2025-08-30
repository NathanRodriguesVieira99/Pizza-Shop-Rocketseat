import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface GetMonthOrdersAmountResponse {
  amount: number;
  diffFromLastMonth: number;
}

export interface IGetMonthOrdersAmount {
  exec(): Promise<GetMonthOrdersAmountResponse>;
}

export class GetMonthOrdersAmountService implements IGetMonthOrdersAmount {
  constructor(private readonly httpClient: HttpClient) {}

  async exec() {
    const getMonthOrdersAmountResponse = await this.httpClient.request<
      GetMonthOrdersAmountResponse,
      unknown
    >({
      method: HttpMethod.GET,
      endpoint: '/metrics/month-orders-amount',
    });

    return getMonthOrdersAmountResponse;
  }
}
