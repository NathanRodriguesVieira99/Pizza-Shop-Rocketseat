import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Essa função roda automaticamente depois de cada teste
// Serve pra limpar tudo e evitar que um teste interfira no outro
afterEach(() => {
  // Limpa o DOM entre os testes (remove o que foi renderizado)
  cleanup();

  // Reseta todos os spies e mocks do Vitest (`vi.fn`, `vi.spyOn`, etc.)
  // Garante que os testes sejam independentes e não tenham "lixo" de execuções anteriores
  vi.resetAllMocks();
});
