/**
 * @since 0.1.1
 */
import { z } from 'zod';
import { publishHookSchema } from './publishHook.schema';

/**
 * @since 0.1.1
 * @category hooksSchema
 */
export const hooksSchema = z.object({
  postPublish: z.array(publishHookSchema).optional(),
  postExport: z.array(publishHookSchema).optional(),
});
