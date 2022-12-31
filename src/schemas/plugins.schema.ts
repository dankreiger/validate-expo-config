/**
 * @since 0.1.0
 */
import { z } from 'zod';

/**
 * @category pluginsSchema
 * @since 0.1.0
 * @example
 */
export const pluginsSchema = z.array(
  z.union([
    z.string(),
    z.tuple([]),
    z.tuple([z.string()]),
    z.tuple([z.string(), z.any()]),
  ])
);
