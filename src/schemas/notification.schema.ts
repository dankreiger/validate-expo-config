/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category notificationSchema
 * @since 0.1.1
 */
export const notificationSchema = z.object({
  icon: z.string().optional(),
  color: z.string().optional(),
  iosDisplayInForeground: z.boolean().optional(),
  androidMode: z
    .union([z.literal('default'), z.literal('collapse')])
    .optional(),
  androidCollapsedTitle: z.string().optional(),
});
