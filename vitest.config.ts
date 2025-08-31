/// <reference types="vitest" />

import path from 'node:path';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    fileParallelism: false,
    setupFiles: ['vitest.setup.ts'],
    globalSetup: ['vitest.global.setup.ts'],
    // Testes de integração: .spec.ts(x) | Testes unitários : .test.ts(x)
    include: ['src/**/*.{spec,test}.{ts,tsx}'],
    testTimeout: 10_000,
    coverage: {
      reportsDirectory: './coverage',
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/types/**',
        '**/*.d.ts',
        '**/mocks/**',
        '**/*.test-utils.{ts,tsx}',
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
