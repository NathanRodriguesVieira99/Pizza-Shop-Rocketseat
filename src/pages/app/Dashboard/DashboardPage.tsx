import { useDashboardModel } from './DashboardModel';
import { DashboardView } from './DashboardView';

export const DashboardPage = () => {
  const methods = useDashboardModel();
  return <DashboardView {...methods} />;
};
