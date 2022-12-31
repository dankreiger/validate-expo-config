/**
 * @since 0.1.1
 */
import { z } from 'zod';
import { androidIntentFiltersDataSchema } from './androidIntentFiltersData.schema';
import { jsEngineSchema } from './jsEngine.schema';
import { runtimeVersionPolicySchema } from './runtimeVersionPolicy.schema';
import { userInterfaceStyleSchema } from './userInterfaceStyle.schema';

/**
 * @category androidSchema
 * @since 0.1.1
 */
export const androidSchema = z.object({
  publishManifestPath: z.string().optional(),
  publishBundlePath: z.string().optional(),
  package: z.string().optional(),
  versionCode: z.number().optional(),
  backgroundColor: z.string().optional(),
  userInterfaceStyle: userInterfaceStyleSchema.optional(),
  useNextNotificationsApi: z.boolean().optional(),
  icon: z.string().optional(),
  adaptiveIcon: z
    .object({
      foregroundImage: z.string().optional(),
      backgroundImage: z.string().optional(),
      backgroundColor: z.string().optional(),
    })
    .optional(),
  playStoreUrl: z.string().optional(),
  permissions: z.array(z.string()).optional(),
  blockedPermissions: z.array(z.string()).optional(),
  googleServicesFile: z.string().optional(),
  config: z
    .object({
      branch: z
        .object({
          apiKey: z.string().optional(),
        })
        .optional(),
      googleMaps: z
        .object({
          apiKey: z.string().optional(),
        })
        .optional(),
      googleMobileAdsAppId: z.string().optional(),
      googleMobileAdsAutoInit: z.boolean().optional(),
      googleSignIn: z
        .object({
          apiKey: z.string().optional(),
          certificateHash: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
  splash: z
    .record(z.any())
    .and(
      z.object({
        backgroundColor: z.string().optional(),
        resizeMode: z
          .union([
            z.literal('cover'),
            z.literal('contain'),
            z.literal('native'),
          ])
          .optional(),
        image: z.string().optional(),
        mdpi: z.string().optional(),
        hdpi: z.string().optional(),
        xhdpi: z.string().optional(),
        xxhdpi: z.string().optional(),
        xxxhdpi: z.string().optional(),
      })
    )
    .optional(),
  intentFilters: z
    .array(
      z.object({
        autoVerify: z.boolean().optional(),
        action: z.string(),
        data: z
          .union([
            androidIntentFiltersDataSchema,
            z.array(androidIntentFiltersDataSchema),
          ])
          .optional(),
        category: z.union([z.string(), z.array(z.string())]).optional(),
      })
    )
    .optional(),
  allowBackup: z.boolean().optional(),
  softwareKeyboardLayoutMode: z
    .union([z.literal('resize'), z.literal('pan')])
    .optional(),
  jsEngine: jsEngineSchema.optional(),
  runtimeVersion: runtimeVersionPolicySchema.optional(),
});
