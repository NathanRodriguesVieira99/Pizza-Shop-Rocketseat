import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';
import { DashboardPage } from '@/pages/app/Dashboard/DashboardPage';
import { OrdersPage } from '@/pages/app/Orders/OrdersPage';
import { SignInPage } from '@/pages/auth/Sign-In/SignInPage';
import { SignUpPage } from '@/pages/auth/SignUp/SignUpPage';

export const RoutesPath = {
  signIn: '/signIn',
  signUp: '/signUp',
  Orders: '/orders',
} as const;

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<DashboardPage />} index />
          <Route element={<OrdersPage />} path={RoutesPath.Orders} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route element={<SignInPage />} path={RoutesPath.signIn} />
          <Route element={<SignUpPage />} path={RoutesPath.signUp} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
