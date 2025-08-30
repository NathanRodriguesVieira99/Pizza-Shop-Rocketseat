import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { TableCell, TableRow } from '@/components/ui/table';
import type { OrderTableRowProps } from '../../orders-types';
import { OrderDetails } from '../order-details/order-details';
import { OrderStatus } from '../order-status';
import { useOrderTableRowModel } from './order-table-row.model';

export const OrderTableRow = ({ order }: OrderTableRowProps) => {
  const {
    isDetailsOpen,
    setIsDetailsOpen,
    cancelOrderFn,
    approveOrderFn,
    deliverOrderFn,
    dispatchOrderFn,
    isApprovingOrder,
    isCancelingOrder,
    isDeliveringOrder,
    isDispatchingOrder,
  } = useOrderTableRowModel();

  return (
    <TableRow>
      <TableCell>
        <Dialog onOpenChange={setIsDetailsOpen} open={isDetailsOpen}>
          <DialogTrigger asChild>
            <Button size={'xs'} variant={'outline'}>
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails open={isDetailsOpen} orderId={order.orderId} />
        </Dialog>
      </TableCell>

      <TableCell className="font-medium font-mono text-xs">
        {order.orderId}
      </TableCell>

      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>

      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>

      <TableCell className="font-medium">{order.customerName}</TableCell>

      <TableCell className="font-medium">
        {order.total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>

      <TableCell>
        {order.status === 'pending' && (
          <Button
            disabled={isApprovingOrder}
            onClick={() => approveOrderFn({ orderId: order.orderId })}
            size="sm"
            variant={'outline'}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Aprovar
          </Button>
        )}

        {order.status === 'processing' && (
          <Button
            disabled={isDispatchingOrder}
            onClick={() => dispatchOrderFn({ orderId: order.orderId })}
            size="sm"
            variant={'outline'}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Em entrega
          </Button>
        )}

        {order.status === 'delivering' && (
          <Button
            disabled={isDeliveringOrder}
            onClick={() => deliverOrderFn({ orderId: order.orderId })}
            size="sm"
            variant={'outline'}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Entregue
          </Button>
        )}
      </TableCell>

      <TableCell>
        <Button
          disabled={
            !['pending', 'processing'].includes(order.status) ||
            isCancelingOrder
          }
          onClick={() => cancelOrderFn({ orderId: order.orderId })}
          size="sm"
          variant="ghost"
        >
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
};
