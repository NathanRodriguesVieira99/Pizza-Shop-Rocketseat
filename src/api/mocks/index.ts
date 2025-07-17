import { setupWorker } from 'msw/browser';
import { env } from '../../env/config';

// passa os mocks dentro dessa função
// Exemplo: setupWorker(SignInMock, CreateUserMock)
export const worker = setupWorker();

export const enableMSW = async () => {
  if (env.VITE_ENV !== 'test') {
    return;
  }
  await worker.start();
};
