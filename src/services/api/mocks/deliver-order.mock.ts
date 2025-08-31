import { HttpResponse, http } from 'msw';
import type { DeliverOrderParams } from '../deliver-order';

export const DeliverOrderMock = http.patch<DeliverOrderParams, never, never>(
  'orders/:orderId/deliver',
  ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  }
);
