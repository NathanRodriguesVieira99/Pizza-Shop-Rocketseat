import { HttpResponse, http } from 'msw';
import type {
  GetOrderDetailsParams,
  GetOrdersDetailsResponse,
} from '../get-order-details';

export const GetOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrdersDetailsResponse
  // biome-ignore lint/suspicious/useAwait:not necessary
>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Jhon Doe',
      email: 'jhondoe@acme.com',
      phone: '999999999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 3000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        productName: 'Pizza Calabresa',
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        productName: 'Pizza 4 Queijos',
        quantity: 2,
      },
    ],
  });
});
