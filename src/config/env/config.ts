import { treeifyError, z } from 'zod';

const envSchema = z.object({
  VITE_ENV: z.enum(['test', 'e2e', 'development', 'production']),
  VITE_API_BASE_URL: z.url(),
});

const _env = envSchema.safeParse(import.meta.env);

if (_env.success === false) {
  if (import.meta.env.VITE_ENV !== 'production') {
    console.error('❌ Invalid environment variable', treeifyError(_env.error));
  }
  throw new Error('❌ Invalid environment variable');
}

export const env = _env.data;
