# Pasta tests/utils 🧪

Centraliza utilitários para testes, como custom render do Testing Library e wrappers de providers globais (ex: React Query , AuthContext , ThemeProvider ). Isso garante que todos os testes de componentes tenham acesso ao contexto necessário, evitando duplicação e facilitando manutenção.

Importe `render` e `userEvent` daqui para garantir consistência e boas práticas nos testes de componentes.

Arquivos comuns:

- `test-utils.tsx`: Exporta o render customizado, já incluindo providers globais, além de helpers como `userEvent` para simular interações.

Exemplo de uso:

```ts
// src/tests/components/MeuComponente.test.tsx
import { render, userEvent, screen } from "@/tests/utils";
import MeuComponente from "../MeuComponente";

describe("MeuComponente", () => {
  it("deve renderizar com providers e interagir", () => {
    render(<MeuComponente />);
    // O componente já tem acesso a providers como React Query, AuthContext, etc.
    userEvent.click(screen.getByText("Botão"));
    expect(screen.getByText("Sucesso!"))
      .toBeInTheDocument();
  });
});
```

> **Dica:** Se precisar adicionar novos providers (ex: ThemeProvider), basta ajustar a função Providers em `test-utils.tsx` para que todos os testes passem a ter acesso automaticamente.
