import type { ReactNode } from 'react';
import { Toaster } from 'sonner';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster richColors />
      {children}
    </>
  );
};
