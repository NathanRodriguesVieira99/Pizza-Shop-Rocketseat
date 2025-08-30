import { Search, X } from 'lucide-react';
import { Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useOrderTableFilterModel } from './order-table-filter.model';

export const OrderTableFilter = () => {
  const { register, handleFilter, control, handleClearFilters } =
    useOrderTableFilterModel();

  return (
    <form className="flex items-center gap-2 " onSubmit={handleFilter}>
      <span className="font-semibold text-sm">Filtros</span>

      <Input
        className="h-8 w-auto"
        placeholder="ID do pedido"
        {...register('orderId')}
      />

      <Input
        className="h-8 w-[320px]"
        {...register('customerName')}
        placeholder="Nome do cliente"
      />

      <Controller
        control={control}
        name="status"
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              disabled={disabled}
              name={name}
              onValueChange={onChange}
              value={value}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          );
        }}
      />

      <Button size="sm" type="submit" variant="secondary">
        <Search className="mr-2 h-4 w-4 " />
        Filtrar resultados
      </Button>

      <Button
        onClick={handleClearFilters}
        size="sm"
        type="button"
        variant="outline"
      >
        <X className="mr-2 h-4 w-4 " />
        Remover filtros
      </Button>
    </form>
  );
};
