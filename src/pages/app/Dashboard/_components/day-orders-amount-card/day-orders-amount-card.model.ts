import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/infra/http/HttpClient';
import { GetDayOrdersAmountService } from '@/services/api/get-day-orders-amount';

const httpClient = HttpClient.create();
const getDayOrdersAmountService = new GetDayOrdersAmountService(httpClient);

export const useDayOrdersAmountCardModel = () => {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: () => getDayOrdersAmountService.exec(),
  });

  return { dayOrdersAmount };
};
