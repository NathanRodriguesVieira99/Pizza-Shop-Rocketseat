import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppProvider } from '@/context/app-provider.tsx';
import { enableMSW } from '@/services/api/mocks/index.ts';
import { App } from './App.tsx';

enableMSW().then(() => {
  // biome-ignore lint/style/noNonNullAssertion: mandatory by React
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </StrictMode>
  );
});
