import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { HttpClient } from '@/infra/http/HttpClient';
import { GetDailyRevenueInPeriodService } from '@/services/api/get-daily-revenue-in-period';

const httpClient = HttpClient.create();
const getDailyRevenueInPeriodService = new GetDailyRevenueInPeriodService(
  httpClient
);

export const useRevenueChartModel = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });

  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
    queryFn: () =>
      getDailyRevenueInPeriodService.exec({
        from: dateRange?.from,
        to: dateRange?.to,
      }),
  });

  const chartData = useMemo(() => {
    return dailyRevenueInPeriod?.map((chartItem) => {
      return {
        date: chartItem.date,
        receipt: chartItem.receipt / 100,
      };
    });
  }, [dailyRevenueInPeriod]);

  return { dailyRevenueInPeriod, dateRange, setDateRange, chartData };
};
