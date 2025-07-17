import { setupWorker } from 'msw/browser';
import { env } from '../../env/config';

export const worker = setupWorker();

export const enableMSW = async () => {
  if (env.VITE_ENV !== 'test') {
    return;
  }
  await worker.start();
};
