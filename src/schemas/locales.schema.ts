/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category localesSchema
 * @since 0.1.1
 */
export const localesSchema = z.record(z.union([z.string(), z.record(z.any())]));
