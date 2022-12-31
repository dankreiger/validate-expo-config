/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * The user interface style schema.
 * @category ExpoConfig
 * @since 0.1.1
 * @see https://docs.expo.io/versions/latest/config/app/#userinterfacestyle
 */
export const userInterfaceStyleSchema = z.union([
  z.literal('light'),
  z.literal('dark'),
  z.literal('automatic'),
]);
