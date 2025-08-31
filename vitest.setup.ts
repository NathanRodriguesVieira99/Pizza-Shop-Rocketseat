import { cleanup } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import { handlers } from './src/services/api/mocks/handlers';

const server = setupServer(...handlers);

// Essa função roda automaticamente depois de cada teste
// Serve pra limpar tudo e evitar que um teste interfira no outro
afterEach(() => {
  // Limpa o DOM entre os testes (remove o que foi renderizado)
  cleanup();
  
  // Start server before all tests
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

  // Close server after all tests
  afterAll(() => server.close());

  // Reset handlers after each test for test isolation
  afterEach(() => server.resetHandlers());

  // Reseta todos os spies e mocks do Vitest (`vi.fn`, `vi.spyOn`, etc.)
  // Garante que os testes sejam independentes e não tenham "lixo" de execuções anteriores
  vi.resetAllMocks();
});
