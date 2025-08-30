import { HttpClient } from '@/infra/http/HttpClient';
import { GetOrdersService as GetOrdersServicesClass } from '@/services/api/get-orders';
import { useOrdersModel } from './OrdersModel';
import { OrdersView } from './OrdersView';

export const OrdersPage = () => {
  const httpClient = HttpClient.create();
  const GetOrdersService = new GetOrdersServicesClass(httpClient);
  const methods = useOrdersModel({ GetOrdersService });
  return <OrdersView {...methods} />;
};
