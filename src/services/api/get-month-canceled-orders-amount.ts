import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface GetMonthCanceledOrdersAmountResponse {
  amount: number;
  diffFromLastMonth: number;
}

export interface IGetMonthCanceledOrdersAmount {
  exec(): Promise<GetMonthCanceledOrdersAmountResponse>;
}

export class GetMonthCanceledOrdersAmountService
  implements IGetMonthCanceledOrdersAmount
{
  constructor(private readonly httpClient: HttpClient) {}

  async exec() {
    const getMonthCanceledOrdersAmountResponse = await this.httpClient.request<
      GetMonthCanceledOrdersAmountResponse,
      unknown
    >({
      method: HttpMethod.GET,
      endpoint: '/metrics/month-canceled-orders-amount',
    });

    return getMonthCanceledOrdersAmountResponse;
  }
}
