import { HttpResponse, http } from 'msw';
import type { GetMonthRevenueResponse } from '../get-month-revenue';

export const GetMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 59_000,
    diffFromLastMonth: 10,
  });
});
