import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/infra/http/HttpClient';
import { GetMonthOrdersAmountService } from '@/services/api/get-month-orders-amount';

const httpClient = HttpClient.create();
const getMonthOrdersAmountService = new GetMonthOrdersAmountService(httpClient);

export const useMonthOrdersAmountCardModel = () => {
  const { data: monthOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: () => getMonthOrdersAmountService.exec(),
  });

  return { monthOrdersAmount };
};
