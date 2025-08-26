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
import { OrderTableFilter } from './_components/order-table-filter';
import { OrderTableRow } from './_components/order-table-row';

export const OrdersView = () => {
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
                {Array.from({ length: 10 }).map((_, i) => {
                  return <OrderTableRow key={i} />;
                })}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} perPage={10} totalCount={105} />
        </div>
      </div>
    </>
  );
};
