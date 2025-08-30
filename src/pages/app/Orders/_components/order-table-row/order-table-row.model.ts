/** biome-ignore-all lint/suspicious/useAwait: not necessary */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { HttpClient } from '@/infra/http/HttpClient';
import { ApproveOrderService } from '@/services/api/approve-order';
import { CancelOrderService } from '@/services/api/cancel-order';
import { DeliverOrderService } from '@/services/api/deliver-order';
import { DispatchOrderService } from '@/services/api/dispatch-order';
import type { GetOrdersResponse } from '@/services/api/get-orders';
import type { OrderStatus } from '../../orders-types';

const httpClient = HttpClient.create();
const cancelOrderService = new CancelOrderService(httpClient);
const approveOrderService = new ApproveOrderService(httpClient);
const deliverOrderService = new DeliverOrderService(httpClient);
const dispatchOrderService = new DispatchOrderService(httpClient);

export const useOrderTableRowModel = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const queryClient = useQueryClient();

  const updateOrderStatusOnCache = (orderId: string, status: OrderStatus) => {
    const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
      queryKey: ['orders'],
    });

    // biome-ignore lint/complexity/noForEach: not necessary
    ordersListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return;
      }

      queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
          if (order.orderId === orderId) {
            return { ...order, status };
          }
          return order;
        }),
      });
    });
  };

  const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: (data: { orderId: string }) => cancelOrderService.exec(data),
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'canceled');
      },
    });

  const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } =
    useMutation({
      mutationFn: (data: { orderId: string }) => approveOrderService.exec(data),
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'processing');
      },
    });

  const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
    useMutation({
      mutationFn: (data: { orderId: string }) =>
        dispatchOrderService.exec(data),
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'delivering');
      },
    });

  const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } =
    useMutation({
      mutationFn: (data: { orderId: string }) => deliverOrderService.exec(data),

      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'delivered');
      },
    });

  return {
    isDetailsOpen,
    setIsDetailsOpen,
    cancelOrderFn,
    approveOrderFn,
    deliverOrderFn,
    dispatchOrderFn,
    isCancelingOrder,
    isApprovingOrder,
    isDeliveringOrder,
    isDispatchingOrder,
  };
};
