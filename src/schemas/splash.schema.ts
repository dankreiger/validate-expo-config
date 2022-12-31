/**
 * @since 0.1.1
 */
import { z } from 'zod';
import { resizeModeSchema } from './resizeMode.schema';

/**
 * The splash schema.
 * @category ExpoConfig
 * @since 0.1.1
 * @see https://docs.expo.io/versions/latest/config/app/#splash
 */
export const splashSchema = z.record(z.any()).and(
  z.object({
    backgroundColor: z.string().optional(),
    resizeMode: resizeModeSchema.optional(),
    image: z.string().optional(),
  })
);
