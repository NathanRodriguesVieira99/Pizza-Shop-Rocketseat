/** biome-ignore-all lint/suspicious/noArrayIndexKey: idk*/
/** biome-ignore-all lint/style/noNestedTernary: i want do this */
import { BarChart } from 'lucide-react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import colors from 'tailwindcss/colors';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const COLORS: string[] = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
];

const data = [
  {
    product: ' Peperoni',
    amount: 40,
  },
  {
    product: ' 4 queijos',
    amount: 59,
  },
  {
    product: ' Frango ',
    amount: 12,
  },
  {
    product: ' Portuguesa',
    amount: 26,
  },
  {
    product: ' Bacon',
    amount: 33,
  },
];

export const PopularOrdersChart = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className=" pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="font-medium text-base ">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer height={240} width="100%">
          <PieChart style={{ fontsize: 12 }}>
            <Pie
              cx="50%"
              cy="50%"
              data={data}
              dataKey="amount"
              innerRadius={64}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const safeMidAngle = midAngle ?? 0; // IA me ajudou a validar pois poderia ser undefined
                const x = cx + radius * Math.cos(-safeMidAngle * RADIAN);
                const y = cy + radius * Math.sin(-safeMidAngle * RADIAN);

                return (
                  <text
                    className="fill-muted-foreground text-xs"
                    dominantBaseline="central"
                    textAnchor={x > cx ? 'start' : 'end'}
                    x={x}
                    y={y}
                  >
                    {typeof index === 'number' && data[index]?.product // IA ajudou a validar pois poderia ser undefined
                      ? data[index].product.length > 12
                        ? data[index].product.substring(0, 12).concat('...')
                        : data[index].product
                      : ''}
                    ({value})
                  </text>
                );
              }}
              labelLine={false}
              nameKey="product"
              outerRadius={86}
              strokeWidth={8}
            >
              {data.map((_, i) => {
                return (
                  <Cell
                    className="stroke-background hover:opacity-80"
                    fill={COLORS[i]}
                    key={`cell-${i}`}
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
