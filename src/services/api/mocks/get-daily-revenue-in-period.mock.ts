import { HttpResponse, http } from 'msw';
import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period';

export const GetDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2025', receipt: 59 },
    { date: '02/01/2025', receipt: 5900 },
    { date: '03/01/2025', receipt: 5900 },
    { date: '04/01/2025', receipt: 59 },
    { date: '05/01/2025', receipt: 5 },
    { date: '06/01/2025', receipt: 9 },
    { date: '07/01/2025', receipt: 59 },
  ]);
});
