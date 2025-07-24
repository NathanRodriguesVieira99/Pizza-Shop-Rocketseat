import type { ReactNode } from 'react';
import { QueryClientProviders } from './providers/query-client-provider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProviders>{children}</QueryClientProviders>;
};
