/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category assetBundlePatternsSchema
 * @since 0.1.1
 */
export const assetBundlePatternsSchema = z.array(z.string());
