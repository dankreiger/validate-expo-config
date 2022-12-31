/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @since 0.1.1
 * @category orientationSchema
 */
export const orientationSchema = z.union([
  z.literal('default'),
  z.literal('portrait'),
  z.literal('landscape'),
]);
