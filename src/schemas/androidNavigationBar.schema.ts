/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category androidNavigationBarSchema
 * @since 0.1.1
 */
export const androidNavigationBarSchema = z.object({
  visible: z
    .union([
      z.literal('leanback'),
      z.literal('immersive'),
      z.literal('sticky-immersive'),
    ])
    .optional(),
  barStyle: z
    .union([z.literal('light-content'), z.literal('dark-content')])
    .optional(),
  backgroundColor: z.string().optional(),
});
