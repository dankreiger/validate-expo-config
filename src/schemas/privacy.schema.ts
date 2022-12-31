/**
 * @since 0.1.0
 */
import { z } from 'zod';

/**
 * @category privacySchema
 * @since 0.1.0
 * @description Privacy Schema
 */
export const privacySchema = z.union([
  z.literal('public'),
  z.literal('unlisted'),
  z.literal('hidden'),
]);
