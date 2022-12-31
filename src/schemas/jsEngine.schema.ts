/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category jsEngineSchema
 * @since 0.1.1
 */
export const jsEngineSchema = z.union([z.literal('hermes'), z.literal('jsc')]);
