import type { ReactNode } from 'react';
import { QueryClientProviders } from './providers/query-client-provider';
import { ReactHelmetProvider } from './providers/react-helmet-async-provider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProviders>
      <ReactHelmetProvider>{children}</ReactHelmetProvider>
    </QueryClientProviders>
  );
};
