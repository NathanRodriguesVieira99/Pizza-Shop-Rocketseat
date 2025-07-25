import type { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const ReactHelmetProvider = ({ children }: { children: ReactNode }) => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      {children}
    </HelmetProvider>
  );
};
