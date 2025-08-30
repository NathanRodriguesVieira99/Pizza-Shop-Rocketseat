import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface GetDailyRevenueInPeriodQuery {
  from?: Date;
  to?: Date;
}

export type GetDailyRevenueInPeriodResponse = {
  date: string;
  receipt: number;
}[];

export interface IGetDailyRevenueInPeriod {
  exec({
    from,
    to,
  }: GetDailyRevenueInPeriodQuery): Promise<GetDailyRevenueInPeriodResponse>;
}

export class GetDailyRevenueInPeriodService
  implements IGetDailyRevenueInPeriod
{
  constructor(private readonly httpClient: HttpClient) {}

  async exec({ from, to }: GetDailyRevenueInPeriodQuery) {
    const getDailyRevenueInPeriodResponse = await this.httpClient.request<
      GetDailyRevenueInPeriodResponse,
      unknown
    >({
      method: HttpMethod.GET,
      endpoint: '/metrics/daily-receipt-in-period',
      params: {
        from,
        to,
      },
    });

    return getDailyRevenueInPeriodResponse;
  }
}
