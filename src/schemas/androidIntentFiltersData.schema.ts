/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category androidIntentFiltersDataSchema
 * @since 0.1.1
 */
export const androidIntentFiltersDataSchema = z.object({
  scheme: z.string().optional(),
  host: z.string().optional(),
  port: z.string().optional(),
  path: z.string().optional(),
  pathPattern: z.string().optional(),
  pathPrefix: z.string().optional(),
  mimeType: z.string().optional(),
});
