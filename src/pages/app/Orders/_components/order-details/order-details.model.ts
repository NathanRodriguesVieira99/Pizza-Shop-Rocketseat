import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/infra/http/HttpClient';
import { GetOrderDetailsService } from '@/services/api/get-order-details';
import type { OrderDetailsProps } from './order-details.types';

const httpClient = HttpClient.create();
const getOrdersDetailsService = new GetOrderDetailsService(httpClient);

export const useOrderDetailsModel = ({ orderId, open }: OrderDetailsProps) => {
  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrdersDetailsService.exec({ orderId }),
    enabled: open,
  });

  return { order };
};
