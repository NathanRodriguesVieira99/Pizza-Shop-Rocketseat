import { isAxiosError } from 'axios';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Header } from '@/components/layout/header';
import { HttpClient } from '@/infra/http/HttpClient';

export const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const httpClient = HttpClient.create();
    const interceptorId = httpClient.Instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          const code = error.response?.data.code;

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/signin', { replace: true });
          }
        }
      }
    );

    return () => {
      httpClient.Instance.interceptors.request.eject(interceptorId);
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
};
