import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface GetDayOrdersAmountResponse {
  amount: number;
  diffFromYesterday: number;
}

export interface IGetDayOrdersAmount {
  exec(): Promise<GetDayOrdersAmountResponse>;
}

export class GetDayOrdersAmountService implements IGetDayOrdersAmount {
  constructor(private readonly httpClient: HttpClient) {}

  async exec() {
    const getDayOrdersAmountResponse = await this.httpClient.request<
      GetDayOrdersAmountResponse,
      unknown
    >({
      method: HttpMethod.GET,
      endpoint: '/metrics/day-orders-amount',
    });

    return getDayOrdersAmountResponse;
  }
}
