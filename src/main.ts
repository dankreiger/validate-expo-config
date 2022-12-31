/**
 * @category main
 * @since 0.1.1
 */
import type { ExpoConfig } from '@expo/config-types';
import { z } from 'zod';

import {
  androidSchema,
  androidStatusBarSchema,
  assetBundlePatternsSchema,
  boolean,
  detachSchema,
  developmentClientSchema,
  experimentsSchema,
  extrasSchema,
  hooksSchema,
  internalSchema,
  iosSchema,
  jsEngineSchema,
  localesSchema,
  notificationSchema,
  orientationSchema,
  packagerOptsSchema,
  platformsSchema,
  pluginsSchema,
  privacySchema,
  runtimeVersionPolicySchema,
  splashSchema,
  string,
  updatesSchema,
  userInterfaceStyleSchema,
  webSchema,
} from './schemas';

/**
 * @category ExpoConfig
 * @since 0.1.1
 * The zod schema for the Expo config.
 * (Zod equivalent of the `ExpoConfig` type)
 *
 * @const
 */
export const ExpoConfigSchema = z.object({
  name: string,
  slug: string,
  version: string.optional(),
  orientation: orientationSchema.optional(),
  icon: string.optional(),
  userInterfaceStyle: userInterfaceStyleSchema.optional(),
  splash: splashSchema.optional(),
  updates: updatesSchema.optional(),
  assetBundlePatterns: assetBundlePatternsSchema.optional(),
  ios: iosSchema.optional(),
  android: androidSchema,
  web: webSchema.optional(),
  extra: extrasSchema.optional(),
  owner: string.optional(),
  description: string.optional(),
  currentFullName: string.optional(),
  originalFullName: string.optional(),
  privacy: privacySchema.optional(),
  sdkVersion: string.optional(),
  runtimeVersion: runtimeVersionPolicySchema.optional(),
  platforms: platformsSchema.optional(),
  githubUrl: string.optional(),
  backgroundColor: string.optional(),
  primaryColor: string.optional(),
  notification: notificationSchema.optional(),
  appKey: string.optional(),
  androidStatusBar: androidStatusBarSchema.optional(),
  androidNavigationBar: androidStatusBarSchema.optional(),
  developmentClient: developmentClientSchema.optional(),
  scheme: string.optional(),
  entryPoint: string.optional(),
  packagerOpts: packagerOptsSchema.optional(),
  locales: localesSchema.optional(),
  facebookAppId: string.optional(),
  facebookAutoInitEnabled: boolean.optional(),
  facebookAutoLogAppEventsEnabled: boolean.optional(),
  facebookAdvertiserIDCollectionEnabled: boolean.optional(),
  facebookDisplayName: string.optional(),
  facebookScheme: string.optional(),
  isDetached: boolean.optional(),
  detach: detachSchema.optional(),
  plugins: pluginsSchema.optional(),
  jsEngine: jsEngineSchema.optional(),
  hooks: hooksSchema.optional(),
  experiments: experimentsSchema.optional(),
  _internal: internalSchema.optional(),
});

/**
 * Validates the provided `config` object against the [Expo Configuration Schema](https://docs.expo.io/versions/latest/workflow/configuration).
 *
 * @since 0.1.0
 * @category ExpoConfig
 * @param {ExpoConfig} config - An object representing the Expo configuration for an app. It should conform to the [Expo Configuration Schema](https://docs.expo.io/versions/latest/workflow/configuration).
 * @param {'parse' | 'safeParse'} [method='parse'] - The method to use for validating the `config` object.
 * @returns {true | Object} - If the `config` object is valid, the function returns `true`. If the `config` object is invalid, the function returns an object with details about the validation errors.
 *
 * @example
 * import { validateExpoConfig } from './validateExpoConfig';
 *
 * const config = {
 *   name: 'My App',
 *   displayName: 'My App',
 *   slug: 'my-app',
 *   version: '1.0.0',
 *   orientation: 'portrait',
 *   icon: './assets/icon.png',
 *   splash: {
 *     image: './assets/splash.png',
 *     resizeMode: 'contain',
 *     backgroundColor: '#ffffff',
 *   },
 *   updates: {
 *     fallbackToCacheTimeout: 0,
 *   },
 *   ios: {
 *     supportsTablet: true,
 *   },
 *   android: {
 *     package: 'com.example.myapp',
 *   },
 *   web: {
 *     favicon: './assets/favicon.png',
 *   },
 * };
 *
 * const validationResult = validateExpoConfig(config);
 *
 * if (validationResult === true) {
 *   console.log('The config object is valid');
 * } else {
 *   console.log('The config object is invalid:', validationResult);
 * }
 */
export function validateExpoConfig(config: ExpoConfig): ExpoConfig {
  const result = ExpoConfigSchema.safeParse(config);
  if (result.success) {
    return result.data;
  }
  throw result.error;
}
