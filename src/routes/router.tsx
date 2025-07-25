import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';
import { Dashboard } from '@/pages/app/dashboard';
import { SignIn } from '@/pages/auth/sign-in';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<Dashboard />} index />
        </Route>

        <Route element={<AuthLayout />}>
          <Route element={<SignIn />} path="signIn" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
