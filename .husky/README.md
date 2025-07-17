# Pasta .husky 🐶

Armazena hooks de git automatizados, como pre-commit e pre-push.
Usado para rodar scripts de lint, testes e garantir qualidade do código antes de subir alterações para o repositório.

Utiliza Husky para garantir que ações importantes sejam executadas antes de commits ou push, aumentando a qualidade do código.

Arquivos comuns:

- `pre-commit`: Executa scripts antes do commit (ex: lint, testes).
- `pre-push`: Executa scripts antes do push (ex: testes unitários).
- `commit-msg`: Valida a mensagem do commit.

Exemplo de hook pre-commit:

```sh
#!/bin/sh
pnpm lint
pnpm test:unit
```

> **Dica:** Adicione novos hooks conforme a necessidade do fluxo de trabalho do projeto.

Coloque scripts em arquivos como `.husky/pre-commit` para rodar automaticamente antes do commit.
