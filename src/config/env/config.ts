import { treeifyError, z } from 'zod';

const envSchema = z.object({
  VITE_ENV: z.enum(['test', 'e2e', 'development', 'production']),
});

const _env = envSchema.safeParse(import.meta.env);

if (_env.success === false) {
  if (import.meta.env.VITE_ENV !== 'production') {
    // biome-ignore lint/suspicious/noConsole: necessary to catch env errors
    console.error('❌ Invalid environment variable', treeifyError(_env.error));
  }
  throw new Error('❌ Invalid environment variable');
}

export const env = _env.data;
