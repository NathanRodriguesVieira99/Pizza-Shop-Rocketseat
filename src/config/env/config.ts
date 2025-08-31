import { treeifyError, z } from 'zod';

const envSchema = z.object({
  VITE_ENV: z
    .enum(['test', 'development', 'production'])
    .default('development'),
  VITE_API_BASE_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
});

const _env = envSchema.safeParse(import.meta.env);

if (_env.success === false) {
  if (import.meta.env.VITE_ENV !== 'production') {
    console.error('❌ Invalid environment variable', treeifyError(_env.error));
  }
  throw new Error('❌ Invalid environment variable');
}

export const env = _env.data;
