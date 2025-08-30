import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import z from 'zod';
import type { OrdersModelProps } from './orders-types';

export const useOrdersModel = ({ GetOrdersService }: OrdersModelProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get('orderId');
  const customerName = searchParams.get('customerName');
  const status = searchParams.get('status');

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1');

  const { data: result, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['orders', pageIndex, orderId, customerName, status],
    queryFn: () =>
      GetOrdersService.exec({
        pageIndex,
        orderId,
        customerName,
        status: status === 'all' ? null : status,
      }),
  });

  // biome-ignore lint/nursery/noShadow: not necessary
  // biome-ignore lint/suspicious/useAwait: not necessary
  const handlePaginate = async (pageIndex: number) => {
    setSearchParams((prev) => {
      prev.set('page', (pageIndex + 1).toString());
      return prev;
    });
  };

  return { result, handlePaginate, isLoadingOrders };
};
