/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category resizeModeSchema
 * @since 0.1.1
 * @see https://docs.expo.io/versions/latest/config/app/#resizemode
 */
export const resizeModeSchema = z.union([
  z.literal('cover'),
  z.literal('contain'),
]);
