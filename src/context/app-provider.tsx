import type { ReactNode } from 'react';
import { QueryClientProviders } from './providers/query-client-provider';
import { ReactHelmetProvider } from './providers/react-helmet-async-provider';
import { ThemeProvider } from './providers/theme/theme-provider';
import { ToastProvider } from './providers/toast-provider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProviders>
      <ReactHelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </ReactHelmetProvider>
    </QueryClientProviders>
  );
};
