# Pasta `env`

Arquivo para validação e configuração de variáveis de ambiente do projeto.

## Sobre `config.ts`

Valida variáveis de ambiente do frontend usando [Zod](https://zod.dev/). O schema pode exigir qualquer variável necessária ao projeto, não apenas `VITE_ENV`.

Se alguma variável obrigatória estiver ausente ou inválida, o app lança erro ao iniciar.

## Como usar

Importe o objeto `env` para acessar variáveis já validadas:

```ts
import { env } from "./env/config";
console.log(env.VITE_ENV);
```

Adicione as variáveis necessárias nos arquivos `.env` do projeto.

---

> **Nota:** No Vite, apenas variáveis prefixadas com `VITE_` ficam disponíveis no frontend via `import.meta.env`.
