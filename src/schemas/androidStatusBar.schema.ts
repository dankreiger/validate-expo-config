/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category androidStatusBarSchema
 * @since 0.1.1
 */
export const androidStatusBarSchema = z.object({
  barStyle: z
    .union([z.literal('light-content'), z.literal('dark-content')])
    .optional(),
  backgroundColor: z.string().optional(),
  hidden: z.boolean().optional(),
  translucent: z.boolean().optional(),
});
