# 🍕 Pizza Shop Web

Projeto completo para gerenciamento de pedidos de pizzaria, desenvolvido com Vite + React durante o curso da Rocketseat. O sistema permite cadastro, autenticação, visualização e gestão de pedidos, além de recursos para perfis de loja e relatórios.

## 🚀 Principais Funcionalidades

- Cadastro e autenticação de usuários
- Gestão de pedidos em tempo real
- Visualização de perfil da loja
- Relatórios e dashboards

## 📦 Estrutura do Projeto

- **public/**: Arquivos estáticos (favicon, mockServiceWorker, etc)
- **src/**: Código-fonte principal
   - **components/**: Componentes reutilizáveis (UI, layout, tema)
   - **pages/**: Páginas da aplicação (app, auth, error)
   - **services/**: Integração com APIs
   - **hooks/**: Hooks customizados
   - **context/**: Providers de contexto
   - **infra/**: Implementações de infraestrutura (ex: HttpClient)
   - **lib/**: Utilitários e integrações
   - **config/**: Configurações de ambiente
- **tests/**: Testes E2E e utilitários

## 🛠️ Requisitos

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 8

## ⚡ Instalação

```sh
pnpm install
```

## ▶️ Como rodar

Servidor de desenvolvimento:

```sh
pnpm dev
```

Servidor de testes:

```sh
pnpm dev:test
```

Build de produção:

```sh
pnpm build
```

Visualizar build:

```sh
pnpm preview
```

## 🧪 Testes

- **Unitários**: `pnpm test` (Vitest)
- **End-to-End**: `pnpm test:e2e` (Playwright) / `pnpm test:e2e:ui` (UI do Playwright)
- **Cobertura**: `pnpm test:coverage`

Testes E2E estão em `src/tests/` e cobrem cenários como login, pedidos, cadastro, etc.

## 📚 Storybook

Visualize e documente os componentes UI:

```sh
pnpm storybook
```

Build do Storybook:

```sh
pnpm build-storybook
```

## 🧩 Tecnologias & Bibliotecas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [Shadcn UI](https://ui.shadcn.com/)
- [Zod](https://zod.dev/)
- [Axios](https://axios-http.com/)
- [Radix UI](https://www.radix-ui.com/)
- [TailwindCSS](https://tailwindcss.com/)

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nome-da-feature`)
3. Commit suas alterações (`git commit -m 'feat: minha feature'`)
4. Faça push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

Projeto desenvolvido para fins educacionais no curso da Rocketseat.
