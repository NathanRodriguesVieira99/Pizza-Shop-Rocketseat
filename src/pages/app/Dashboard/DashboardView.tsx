import { Helmet } from 'react-helmet-async';
import type { useDashboardModel } from './DashboardModel';

type DashboardViewProps = ReturnType<typeof useDashboardModel>;

export const DashboardView = (props: DashboardViewProps) => {
  // biome-ignore lint/correctness/noEmptyPattern:I'll fix this soon
  const {} = props;
  return (
    <>
      <Helmet title="Dashboard" />
      <h1>Dashboard</h1>
    </>
  );
};
