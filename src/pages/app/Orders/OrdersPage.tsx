import { useOrdersModel } from './OrdersModel';
import { OrdersView } from './OrdersView';

export const OrdersPage = () => {
  const methods = useOrdersModel();
  return <OrdersView {...methods} />;
};
