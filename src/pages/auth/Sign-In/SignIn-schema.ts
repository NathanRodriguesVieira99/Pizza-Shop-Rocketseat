import z from 'zod';

export const signInFormSchema = z.object({
  email: z.email(),
});

export type SignFormSchema = z.infer<typeof signInFormSchema>;
