import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';
import { Dashboard } from '@/pages/app/Dashboard/DashboardView';
import { SignInView } from '@/pages/auth/Sign-In/Sign-inView';

export const RoutesPath = {
  signIn: '/signIn',
} as const;

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<Dashboard />} index />
        </Route>

        <Route element={<AuthLayout />}>
          <Route element={<SignInView />} path={RoutesPath.signIn} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
