import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { enableMSW } from './api/mocks/index.ts';
import { AppProvider } from './context/app-provider.tsx';

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
