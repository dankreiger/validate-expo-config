/**
 * @since 0.1.1
 */
import { z } from 'zod';
import { jsEngineSchema } from './jsEngine.schema';
import { runtimeVersionPolicySchema } from './runtimeVersionPolicy.schema';
import { splashSchema } from './splash.schema';
import { userInterfaceStyleSchema } from './userInterfaceStyle.schema';

/**
 * @category iosSchema
 * @since 0.1.1
 */
export const iosSchema = z.object({
  publishManifestPath: z.string().optional(),
  publishBundlePath: z.string().optional(),
  bundleIdentifier: z.string().optional(),
  buildNumber: z.string().optional(),
  backgroundColor: z.string().optional(),
  icon: z.string().optional(),
  merchantId: z.string().optional(),
  appStoreUrl: z.string().optional(),
  bitcode: z.union([z.boolean(), z.string()]).optional(),
  config: z
    .object({
      branch: z
        .object({
          apiKey: z.string().optional(),
        })
        .optional(),
      usesNonExemptEncryption: z.boolean().optional(),
      googleMapsApiKey: z.string().optional(),
      googleMobileAdsAppId: z.string().optional(),
      googleMobileAdsAutoInit: z.boolean().optional(),
      googleSignIn: z
        .object({
          reservedClientId: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
  googleServicesFile: z.string().optional(),
  supportsTablet: z.boolean().optional(),
  isTabletOnly: z.boolean().optional(),
  requireFullScreen: z.boolean().optional(),
  userInterfaceStyle: userInterfaceStyleSchema.optional(),
  infoPlist: z.record(z.any()).optional(),
  entitlements: z.record(z.any()).optional(),
  associatedDomains: z.array(z.string()).optional(),
  usesIcloudStorage: z.boolean().optional(),
  usesAppleSignIn: z.boolean().optional(),
  accessesContactNotes: z.boolean().optional(),
  splash: splashSchema.and(
    z.object({
      tabletImage: z.string().optional(),
    })
  ),
  jsEngine: jsEngineSchema.optional(),
  runtimeVersion: runtimeVersionPolicySchema.optional(),
});
