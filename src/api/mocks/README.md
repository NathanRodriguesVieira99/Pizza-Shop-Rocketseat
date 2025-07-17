# Pasta api/mocks 🛠️

Contém arquivos para mocks de APIs durante desenvolvimento e testes.

Utiliza MSW (Mock Service Worker) para interceptar e mockar requisições HTTP, facilitando testes sem backend real.

Exemplo de uso:

```ts
// src/api/mocks/List-TODO-mock.ts
import { http, HttpResponse } from 'msw';

export const ListTODOMock = [
  http.get('URL da sua api / endpoints', () => {
    return HttpResponse.json({
      todos: [
        {
          id: 1,
          todo: 'Do something nice for someone I care about',
          completed: true,
          userId: 26,
        },
      ],
    }, { status: 200 });
  }),
];

// src/api/mocks/index.ts
import { setupWorker } from 'msw/browser';
import { ListTODOMock } from './';

export const worker = setupWorker(ListTODOMock); // adicione os mocks aqui. Ex: (ListTODOMock, SignInMock)
```
