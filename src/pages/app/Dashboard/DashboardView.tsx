import { Helmet } from 'react-helmet-async';
import { DayOrdersAmountCard } from './_components/day-orders-amount-card/day-orders-amount-card';
import { MonthCanceledOrdersAmountCard } from './_components/month-canceled-orders-amount-card/month-canceled-orders-amount-card';
import { MonthOrdersAmountCard } from './_components/month-orders-amount-card/month-orders-amount-card';
import { MonthRevenueCard } from './_components/month-revenue-card/month-revenue-card';
import { PopularOrdersChart } from './_components/popular-orders-chart/popular-orders-chart';
import { RevenueChart } from './_components/revenue-chart/revenue-chart';
// import type { useDashboardModel } from './DashboardModel';

// type DashboardViewProps = ReturnType<typeof useDashboardModel>;

/**
 props: DashboardViewProps
 */
export const DashboardView = () => {
  // const {} = props;
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className=" grid grid-cols-9 gap-4 ">
          <RevenueChart />
          <PopularOrdersChart />
        </div>
      </div>
    </>
  );
};
