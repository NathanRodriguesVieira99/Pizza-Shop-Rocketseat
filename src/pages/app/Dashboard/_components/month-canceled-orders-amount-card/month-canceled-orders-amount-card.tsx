import { DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MetricCardSkeleton } from '../metric-card-skeleton/metric-card-skeleton';
import { useMonthCanceledOrdersAmountCardModel } from './month-canceled-orders-amount-card.model';

export const MonthCanceledOrdersAmountCard = () => {
  const { canceledMonthOrdersAmount } = useMonthCanceledOrdersAmountCardModel();
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-semibold text-base">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {canceledMonthOrdersAmount ? (
          <>
            <span className="font-bold text-2xl tracking-tight">
              {canceledMonthOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-muted-foreground text-xs">
              {canceledMonthOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {canceledMonthOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  +{canceledMonthOrdersAmount.diffFromLastMonth}%
                </span>
              )}{' '}
              em relação a ontem
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
};
