# Pasta tests/utils 🧪

Centraliza utilitários para testes, como custom render do Testing Library e wrappers de providers globais (ex: React Query , AuthContext , ThemeProvider ). Isso garante que todos os testes de componentes tenham acesso ao contexto necessário, evitando duplicação e facilitando manutenção.

Importe `render` e `userEvent` daqui para garantir consistência e boas práticas nos testes de componentes.

Arquivos comuns:

- `index.tsx`: Exporta o render customizado, já incluindo providers globais, além de helpers como `userEvent` para simular interações.
