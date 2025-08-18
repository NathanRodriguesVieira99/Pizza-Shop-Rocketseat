import type { ReactNode } from 'react';
import { QueryClientProviders } from './providers/query-client-provider';
import { ReactHelmetProvider } from './providers/react-helmet-async-provider';
import { ToastProvider } from './providers/toast-provider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProviders>
      <ReactHelmetProvider>
        <ToastProvider>{children}</ToastProvider>
      </ReactHelmetProvider>
    </QueryClientProviders>
  );
};
