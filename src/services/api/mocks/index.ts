import { setupWorker } from 'msw/browser';
import { env } from '@/config/env/config';
import { handlers } from './handlers';

// passa os mocks dentro dessa função via spread (...handlers)
export const worker = setupWorker(...handlers);

export const enableMSW = async () => {
  if (env.VITE_ENV !== 'test') {
    return;
  }
  await worker.start();
};
