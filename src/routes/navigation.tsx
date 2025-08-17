import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';
import { DashboardPage } from '@/pages/app/Dashboard/DashboardPage';
import { SignInPage } from '@/pages/auth/Sign-In/SignInPage';

export const RoutesPath = {
  signIn: '/signIn',
} as const;

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<DashboardPage />} index />
        </Route>

        <Route element={<AuthLayout />}>
          <Route element={<SignInPage />} path={RoutesPath.signIn} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
