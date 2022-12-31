/**
 * @since 0.1.1
 */
import { z } from 'zod';
import { resizeModeSchema } from './resizeMode.schema';

/**
 * @category webSchema
 * @since 0.1.1
 * @see https://docs.expo.io/versions/latest/config/app/#web
 */
export const webSchema = z.record(z.any()).and(
  z.object({
    favicon: z.string().optional(),
    name: z.string().optional(),
    shortName: z.string().optional(),
    lang: z.string().optional(),
    scope: z.string().optional(),
    themeColor: z.string().optional(),
    description: z.string().optional(),
    dir: z
      .union([z.literal('auto'), z.literal('ltr'), z.literal('rtl')])
      .optional(),
    display: z
      .union([
        z.literal('fullscreen'),
        z.literal('standalone'),
        z.literal('minimal-ui'),
        z.literal('browser'),
      ])
      .optional(),
    startUrl: z.string().optional(),
    orientation: z
      .union([
        z.literal('any'),
        z.literal('natural'),
        z.literal('landscape'),
        z.literal('landscape-primary'),
        z.literal('landscape-secondary'),
        z.literal('portrait'),
        z.literal('portrait-primary'),
        z.literal('portrait-secondary'),
      ])
      .optional(),
    backgroundColor: z.string().optional(),
    barStyle: z
      .union([
        z.literal('default'),
        z.literal('black'),
        z.literal('black-translucent'),
      ])
      .optional(),
    preferRelatedApplications: z.boolean().optional(),
    dangerous: z.record(z.any()).optional(),
    splash: z
      .record(z.any())
      .and(
        z.object({
          backgroundColor: z.string().optional(),
          resizeMode: resizeModeSchema.optional(),
          image: z.string().optional(),
        })
      )
      .optional(),
    config: z
      .record(z.any())
      .and(
        z.object({
          firebase: z
            .record(z.any())
            .and(
              z.object({
                apiKey: z.string().optional(),
                authDomain: z.string().optional(),
                databaseURL: z.string().optional(),
                projectId: z.string().optional(),
                storageBucket: z.string().optional(),
                messagingSenderId: z.string().optional(),
                appId: z.string().optional(),
                measurementId: z.string().optional(),
              })
            )
            .optional(),
        })
      )
      .optional(),
    bundler: z.union([z.literal('webpack'), z.literal('metro')]).optional(),
  })
);
