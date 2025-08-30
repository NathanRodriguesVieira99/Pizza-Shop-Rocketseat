import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/infra/http/HttpClient';
import { GetMonthCanceledOrdersAmountService } from '@/services/api/get-month-canceled-orders-amount';

const httpClient = HttpClient.create();
const getMonthCanceledOrdersAmountService =
  new GetMonthCanceledOrdersAmountService(httpClient);

export const useMonthCanceledOrdersAmountCardModel = () => {
  const { data: canceledMonthOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: () => getMonthCanceledOrdersAmountService.exec(),
  });

  return { canceledMonthOrdersAmount };
};
