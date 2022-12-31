/**
 * @since 0.1.0
 */
import { z } from 'zod';

/**
 * @category publishHookSchema
 * @since 0.1.1
 * @see https://docs.expo.io/workflow/publishing/#hooks
 */
export const publishHookSchema = z.record(z.any()).and(
  z.object({
    file: z.string().optional(),
    config: z.record(z.any()).optional(),
  })
);
