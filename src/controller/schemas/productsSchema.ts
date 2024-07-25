import { z } from 'zod';

export const createProductsSchema = z
  .object({
    name: z.string().min(3).max(255),
    description: z.string().min(3).max(255).optional(),
    price: z.number().min(1),
    stock: z.number().min(0).optional(),
    image: z.string().url().optional(),
  })
  .strict();
