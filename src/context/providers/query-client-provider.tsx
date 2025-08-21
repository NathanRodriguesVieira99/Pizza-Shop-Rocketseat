import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { client } from '@/lib/react-query';

export const QueryClientProviders = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
