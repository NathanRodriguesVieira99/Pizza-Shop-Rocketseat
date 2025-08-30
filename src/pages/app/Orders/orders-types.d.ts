import type { IGetOrdersService } from '@/services/api/get-orders';

export interface OrdersModelProps {
  GetOrdersService: IGetOrdersService;
}

export interface OrderTableRowProps {
  order: {
    orderId: string;
    createdAt: string;
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered';
    customerName: string;
    total: number;
  };
}

export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered';

export interface OrderStatusProps {
  status: OrderStatus;
}
