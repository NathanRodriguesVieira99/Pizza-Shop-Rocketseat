/** biome-ignore-all lint/suspicious/noArrayIndexKey: idk*/
/** biome-ignore-all lint/style/noNestedTernary: i want do this */
import { BarChart, Loader2 } from 'lucide-react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import colors from 'tailwindcss/colors';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePopularOrdersChartModel } from './popular-orders-chart.model';

const COLORS: string[] = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
];

export const PopularOrdersChart = () => {
  const { popularProducts } = usePopularOrdersChartModel();
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
        {popularProducts ? (
          <ResponsiveContainer height={240} width="100%">
            <PieChart style={{ fontsize: 12 }}>
              <Pie
                cx="50%"
                cy="50%"
                data={popularProducts}
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
                      {typeof index === 'number' &&
                      popularProducts[index]?.product // IA ajudou a validar pois poderia ser undefined
                        ? popularProducts[index].product.length > 12
                          ? popularProducts[index].product
                              .substring(0, 12)
                              .concat('...')
                          : popularProducts[index].product
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
                {popularProducts.map((_, i) => {
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
        ) : (
          <div className=" flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
