/**
 * @since 0.1.0
 */
import { z } from 'zod';

/**
 * @category platformsSchema
 * @since 0.1.0
 *
 */
export const platformsSchema = z.array(
  z.union([z.literal('android'), z.literal('ios'), z.literal('web')])
);
