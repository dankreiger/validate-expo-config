/**
 * @since 0.1.1
 */
import { z } from 'zod';

/**
 * @category runtimeVersionPolicySchema
 * @since 0.1.1
 * @see https://docs.expo.io/workflow/configuration/#runtimeversion
 */
export const runtimeVersionPolicySchema = z.union([
  z.string(),
  z.object({
    policy: z.union([
      z.literal('sdkVersion'),
      z.literal('nativeVersion'),
      z.literal('appVersion'),
    ]),
  }),
]);
