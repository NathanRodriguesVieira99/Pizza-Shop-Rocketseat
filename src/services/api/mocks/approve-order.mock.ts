import { HttpResponse, http } from 'msw';
import type { ApproveOrderParams } from '../approve-order';

export const ApproveOrderMock = http.patch<ApproveOrderParams, never, never>(
  'orders/:orderId/approve',
  ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  }
);
