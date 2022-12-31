/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category experimentsSchema
 * @since 0.1.1
 *
 */
export const experimentsSchema = z.object({
  turboModules: z.boolean().optional(),
});
