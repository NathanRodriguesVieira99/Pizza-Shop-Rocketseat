import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';
import {
  type OrderFilterSchema,
  orderFilterSchema,
} from './order-table-filter.schema';

export const useOrderTableFilterModel = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get('orderId');
  const customerName = searchParams.get('customerName');
  const status = searchParams.get('status');

  const { register, handleSubmit, control, reset } = useForm<OrderFilterSchema>(
    {
      resolver: zodResolver(orderFilterSchema),
      defaultValues: {
        orderId: orderId ?? '',
        customerName: customerName ?? '',
        status: status ?? 'all',
      },
    }
  );

  // biome-ignore lint/nursery/noShadow: i don't need this
  const onFilter = ({ orderId, customerName, status }: OrderFilterSchema) => {
    setSearchParams((state) => {
      if (orderId) {
        state.set('orderId', orderId);
      } else {
        state.delete('orderId');
      }

      if (customerName) {
        state.set('customerName', customerName);
      } else {
        state.delete('customerName');
      }

      if (status) {
        state.set('status', status);
      } else {
        state.delete('status');
      }

      state.set('page', '1');

      return state;
    });
  };

  const handleClearFilters = () => {
    setSearchParams((state) => {
      state.delete('orderId');
      state.delete('customerName');
      state.delete('status');
      state.set('page', '1');

      return state;
    });

    reset({
      orderId: '',
      customerName: '',
      status: '',
    });
  };

  const handleFilter = handleSubmit(onFilter);

  return { register, handleFilter, control, handleClearFilters };
};
