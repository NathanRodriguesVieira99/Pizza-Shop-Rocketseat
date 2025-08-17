import { Helmet } from 'react-helmet-async';
import type { useDashboardModel } from './DashboardModel';

type DashboardViewProps = ReturnType<typeof useDashboardModel>;

// biome-ignore lint/correctness/noEmptyPattern: I'll fix this soon
export const DashboardView = ({}: DashboardViewProps) => {
  return (
    <>
      <Helmet title="Dashboard" />
      <h1>Dashboard</h1>
    </>
  );
};
