import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import colors from 'tailwindcss/colors';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { Label } from '@/components/ui/label';
import { useRevenueChartModel } from './revenue-chart.model';

export const RevenueChart = () => {
  const { dateRange, setDateRange, chartData } = useRevenueChartModel();
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="font-medium text-base ">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Label>Período</Label>
          <DateRangePicker date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>
      <CardContent>
        {chartData && (
          <ResponsiveContainer height={240} width="100%">
            <LineChart data={chartData} style={{ fontsize: 12 }}>
              <XAxis axisLine={false} dataKey="date" dy={16} tickLine={false} />
              <YAxis
                axisLine={false}
                stroke="#888"
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
                tickLine={false}
                width={84}
              />
              <CartesianGrid className="stroke-muted" vertical={false} />
              <Line
                dataKey="receipt"
                stroke={colors.violet[500]}
                strokeWidth={2}
                type="linear"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};
