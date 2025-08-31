# Pasta tests (E2E) 🎭

Contém testes end-to-end (E2E) para validar fluxos completos da aplicação.

Utiliza Playwright para simular interações reais do usuário e garantir que tudo funcione como esperado.

> Os arquivos de testes E2E seguem o padrão:`.e2e.ts`, ou seja, todo arquivo com extensão será reconhecido como teste end-to-end.

Exemplo de teste:

```ts
// tests/home.e2e.ts
import { test, expect } from '@playwright/test';

test('deve acessar a home e encontrar o título', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /pizza shop/i })).toBeVisible();
});
```

> **Dica:** Use Playwright para criar cenários que simulam o uso real do sistema, cobrindo casos críticos e fluxos principais.
