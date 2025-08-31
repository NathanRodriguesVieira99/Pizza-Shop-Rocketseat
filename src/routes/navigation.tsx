import { createBrowserRouter, RouterProvider } from 'react-router';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';
import { DashboardPage } from '@/pages/app/Dashboard/DashboardPage';
import { OrdersPage } from '@/pages/app/Orders/OrdersPage';
import { SignInPage } from '@/pages/auth/Sign-In/SignInPage';
import { SignUpPage } from '@/pages/auth/SignUp/SignUpPage';
import { ErrorPage } from '@/pages/error/error';

export const RoutesPath = {
  signIn: '/sign-in',
  signUp: '/sign-up',
  Orders: '/orders',
  Error: '*',
} as const;

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: RoutesPath.Orders,
        element: <OrdersPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: RoutesPath.signIn, element: <SignInPage /> },
      {
        path: RoutesPath.signUp,
        element: <SignUpPage />,
      },
    ],
  },
  { path: RoutesPath.Error, element: <ErrorPage /> },
]);

export const Navigation = () => <RouterProvider router={router} />;
