import z from 'zod';

export const orderFilterSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
});

export type OrderFilterSchema = z.infer<typeof orderFilterSchema>;
