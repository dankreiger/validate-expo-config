/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category internalSchema
 * @since 0.1.1
 */
export const internalSchema = z.record(z.any()).and(
  z.object({
    pluginHistory: z.record(z.any()).optional(),
  })
);
