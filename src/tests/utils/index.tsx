import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { AppProvider } from '@/context/app-provider';
import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

function Providers({ children }: { children: ReactNode }) {
  // providers vão em volta do children
  return <AppProvider>{children}</AppProvider>;
}

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: Providers,
    ...options,
  });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
