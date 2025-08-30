import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/infra/http/HttpClient';
import { GetMonthRevenueService } from '@/services/api/get-month-revenue';

const httpClient = HttpClient.create();
const getMonthRevenueService = new GetMonthRevenueService(httpClient);

export const useMonthRevenueCardModel = () => {
  const { data: monthRevenue } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: () => getMonthRevenueService.exec(),
  });

  return { monthRevenue };
};
