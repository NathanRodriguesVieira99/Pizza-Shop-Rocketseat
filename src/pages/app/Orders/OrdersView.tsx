/** biome-ignore-all lint/suspicious/noArrayIndexKey: is necessary by now use index on array */
import { Helmet } from 'react-helmet-async';
import { Pagination } from '@/components/layout/pagination';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { OrderTableFilter } from './_components/order-table-filter/order-table-filter';
import { OrderTableRow } from './_components/order-table-row/order-table-row';
import { OrderTableSkeleton } from './_components/order-table-skeleton/order-table-skeleton';
import type { useOrdersModel } from './OrdersModel';

type OrdersViewProps = ReturnType<typeof useOrdersModel>;

export const OrdersView = (props: OrdersViewProps) => {
  const { result, handlePaginate, isLoadingOrders } = props;
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl tracking-tight">Pedidos</h1>

        <div className="space-x-2.5 space-y-2.5">
          <OrderTableFilter />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]" />
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead className="">Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]" />
                  <TableHead className="w-[132px]" />
                </TableRow>
              </TableHeader>

              <TableBody>
                {isLoadingOrders && <OrderTableSkeleton />}

                {result?.orders.map((order) => {
                  return <OrderTableRow key={order.orderId} order={order} />;
                })}
              </TableBody>
            </Table>
          </div>
          {result && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={result.meta.pageIndex}
              perPage={result.meta.perPage}
              totalCount={result.meta.totalCount}
            />
          )}
        </div>
      </div>
    </>
  );
};
