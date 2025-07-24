/// <reference types="vitest" />

import path from 'node:path';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Define o ambiente de testes como jsdom
    // (simula o DOM no Node.js, ideal para testes de componentes React)
    environment: 'jsdom',

    // Permite usar funções como `describe`, `it`, `expect`
    // sem importar manualmente
    globals: true,

    // Rodar testes em paralelo (comportamento padrão do Vitest)
    // Mantido explícito caso algum teste com acesso ao SQLite
    // gere conflito em constraints únicas (ex: UNIQUE constraint)
    fileParallelism: false,

    // Arquivo executado antes de cada **arquivo de teste**
    // (ideal para configuração global como jest-dom e cleanup)
    setupFiles: ['vitest.setup.ts'],

    // Executado uma única vez antes (setup) e depois (tearDown) da suíte
    // inteira de testes
    globalSetup: ['vitest.global.setup.ts'],

    // Define quais arquivos serão considerados testes
    // Testes de integração: .test.ts(x) | Testes Unitários: .spec.ts(x)
    include: ['src/**/*.{spec,test}.{ts,tsx}'],

    // Tempo máximo para cada teste (em milissegundos)
    // antes de ser considerado travado ou falho
    testTimeout: 10_000,

    // Configuração de cobertura de testes
    coverage: {
      // Pasta onde os relatórios de cobertura serão gerados
      reportsDirectory: './coverage',

      // Usa o mecanismo de coverage nativo do Node.js
      provider: 'v8',

      // Quais arquivos serão analisados para cobertura de código
      include: ['src/**/*.{ts,tsx}'],

      // Arquivos e pastas que serão ignorados no relatório de cobertura
      exclude: [
        // Ignora arquivos de teste
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',

        // Ignora arquivos que TEM APENAS types ou interfaces
        '**/types/**',
        '**/*.d.ts',

        // Ignora arquivos e pastas de mocks e utilitários de testes
        '**/mocks/**',
        '**/*.test-utils.{ts,tsx}',

        // Ignora arquivos e pastas do Storybook
        '**/*.stories.{ts,tsx}',
      ],
    },
  },

  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
