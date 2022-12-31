/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category updatesSchema
 * @since 0.1.1
 * @see https://docs.expo.io/versions/latest/config/app/#updates
 */
export const updatesSchema = z.object({
  enabled: z.boolean().optional(),
  checkAutomatically: z
    .union([z.literal('ON_ERROR_RECOVERY'), z.literal('ON_LOAD')])
    .optional(),
  fallbackToCacheTimeout: z.number(),
  url: z.string().optional(),
  codeSigningCertificate: z.string().optional(),
  codeSigningMetadata: z
    .object({
      alg: z.literal('rsa-v1_5-sha256').optional(),
      keyid: z.string().optional(),
    })
    .optional(),
});
