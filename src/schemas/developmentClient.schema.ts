/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category developmentClientSchema
 * @since 0.1.1
 */
export const developmentClientSchema = z.object({
  silentLaunch: z.boolean().optional(),
});
