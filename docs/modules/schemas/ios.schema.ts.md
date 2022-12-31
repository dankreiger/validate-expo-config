---
title: schemas/ios.schema.ts
nav_order: 13
parent: Modules
---

## ios.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [iosSchema](#iosschema)
  - [iosSchema](#iosschema-1)

---

# iosSchema

## iosSchema

**Signature**

```ts
export declare const iosSchema: z.ZodObject<
  {
    publishManifestPath: z.ZodOptional<z.ZodString>
    publishBundlePath: z.ZodOptional<z.ZodString>
    bundleIdentifier: z.ZodOptional<z.ZodString>
    buildNumber: z.ZodOptional<z.ZodString>
    backgroundColor: z.ZodOptional<z.ZodString>
    icon: z.ZodOptional<z.ZodString>
    merchantId: z.ZodOptional<z.ZodString>
    appStoreUrl: z.ZodOptional<z.ZodString>
    bitcode: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>
    config: z.ZodOptional<
      z.ZodObject<
        {
          branch: z.ZodOptional<
            z.ZodObject<
              { apiKey: z.ZodOptional<z.ZodString> },
              'strip',
              z.ZodTypeAny,
              { apiKey?: string | undefined },
              { apiKey?: string | undefined }
            >
          >
          usesNonExemptEncryption: z.ZodOptional<z.ZodBoolean>
          googleMapsApiKey: z.ZodOptional<z.ZodString>
          googleMobileAdsAppId: z.ZodOptional<z.ZodString>
          googleMobileAdsAutoInit: z.ZodOptional<z.ZodBoolean>
          googleSignIn: z.ZodOptional<
            z.ZodObject<
              { reservedClientId: z.ZodOptional<z.ZodString> },
              'strip',
              z.ZodTypeAny,
              { reservedClientId?: string | undefined },
              { reservedClientId?: string | undefined }
            >
          >
        },
        'strip',
        z.ZodTypeAny,
        {
          branch?: { apiKey?: string | undefined } | undefined
          usesNonExemptEncryption?: boolean | undefined
          googleMapsApiKey?: string | undefined
          googleMobileAdsAppId?: string | undefined
          googleMobileAdsAutoInit?: boolean | undefined
          googleSignIn?: { reservedClientId?: string | undefined } | undefined
        },
        {
          branch?: { apiKey?: string | undefined } | undefined
          usesNonExemptEncryption?: boolean | undefined
          googleMapsApiKey?: string | undefined
          googleMobileAdsAppId?: string | undefined
          googleMobileAdsAutoInit?: boolean | undefined
          googleSignIn?: { reservedClientId?: string | undefined } | undefined
        }
      >
    >
    googleServicesFile: z.ZodOptional<z.ZodString>
    supportsTablet: z.ZodOptional<z.ZodBoolean>
    isTabletOnly: z.ZodOptional<z.ZodBoolean>
    requireFullScreen: z.ZodOptional<z.ZodBoolean>
    userInterfaceStyle: z.ZodOptional<
      z.ZodUnion<[z.ZodLiteral<'light'>, z.ZodLiteral<'dark'>, z.ZodLiteral<'automatic'>]>
    >
    infoPlist: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>
    entitlements: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>
    associatedDomains: z.ZodOptional<z.ZodArray<z.ZodString, 'many'>>
    usesIcloudStorage: z.ZodOptional<z.ZodBoolean>
    usesAppleSignIn: z.ZodOptional<z.ZodBoolean>
    accessesContactNotes: z.ZodOptional<z.ZodBoolean>
    splash: z.ZodOptional<
      z.ZodIntersection<
        z.ZodIntersection<
          z.ZodRecord<z.ZodString, z.ZodAny>,
          z.ZodObject<
            {
              backgroundColor: z.ZodOptional<z.ZodString>
              resizeMode: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'cover'>, z.ZodLiteral<'contain'>]>>
              image: z.ZodOptional<z.ZodString>
            },
            'strip',
            z.ZodTypeAny,
            {
              backgroundColor?: string | undefined
              resizeMode?: 'cover' | 'contain' | undefined
              image?: string | undefined
            },
            {
              backgroundColor?: string | undefined
              resizeMode?: 'cover' | 'contain' | undefined
              image?: string | undefined
            }
          >
        >,
        z.ZodObject<
          { tabletImage: z.ZodOptional<z.ZodString> },
          'strip',
          z.ZodTypeAny,
          { tabletImage?: string | undefined },
          { tabletImage?: string | undefined }
        >
      >
    >
    jsEngine: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'hermes'>, z.ZodLiteral<'jsc'>]>>
    runtimeVersion: z.ZodOptional<
      z.ZodUnion<
        [
          z.ZodString,
          z.ZodObject<
            {
              policy: z.ZodUnion<
                [z.ZodLiteral<'sdkVersion'>, z.ZodLiteral<'nativeVersion'>, z.ZodLiteral<'appVersion'>]
              >
            },
            'strip',
            z.ZodTypeAny,
            { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' },
            { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' }
          >
        ]
      >
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    backgroundColor?: string | undefined
    splash?:
      | (Record<string, any> & {
          backgroundColor?: string | undefined
          resizeMode?: 'cover' | 'contain' | undefined
          image?: string | undefined
        } & { tabletImage?: string | undefined })
      | undefined
    config?:
      | {
          branch?: { apiKey?: string | undefined } | undefined
          usesNonExemptEncryption?: boolean | undefined
          googleMapsApiKey?: string | undefined
          googleMobileAdsAppId?: string | undefined
          googleMobileAdsAutoInit?: boolean | undefined
          googleSignIn?: { reservedClientId?: string | undefined } | undefined
        }
      | undefined
    icon?: string | undefined
    publishManifestPath?: string | undefined
    publishBundlePath?: string | undefined
    bundleIdentifier?: string | undefined
    buildNumber?: string | undefined
    merchantId?: string | undefined
    appStoreUrl?: string | undefined
    bitcode?: string | boolean | undefined
    googleServicesFile?: string | undefined
    supportsTablet?: boolean | undefined
    isTabletOnly?: boolean | undefined
    requireFullScreen?: boolean | undefined
    userInterfaceStyle?: 'light' | 'dark' | 'automatic' | undefined
    infoPlist?: Record<string, any> | undefined
    entitlements?: Record<string, any> | undefined
    associatedDomains?: string[] | undefined
    usesIcloudStorage?: boolean | undefined
    usesAppleSignIn?: boolean | undefined
    accessesContactNotes?: boolean | undefined
    jsEngine?: 'hermes' | 'jsc' | undefined
    runtimeVersion?: string | { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' } | undefined
  },
  {
    backgroundColor?: string | undefined
    splash?:
      | (Record<string, any> & {
          backgroundColor?: string | undefined
          resizeMode?: 'cover' | 'contain' | undefined
          image?: string | undefined
        } & { tabletImage?: string | undefined })
      | undefined
    config?:
      | {
          branch?: { apiKey?: string | undefined } | undefined
          usesNonExemptEncryption?: boolean | undefined
          googleMapsApiKey?: string | undefined
          googleMobileAdsAppId?: string | undefined
          googleMobileAdsAutoInit?: boolean | undefined
          googleSignIn?: { reservedClientId?: string | undefined } | undefined
        }
      | undefined
    icon?: string | undefined
    publishManifestPath?: string | undefined
    publishBundlePath?: string | undefined
    bundleIdentifier?: string | undefined
    buildNumber?: string | undefined
    merchantId?: string | undefined
    appStoreUrl?: string | undefined
    bitcode?: string | boolean | undefined
    googleServicesFile?: string | undefined
    supportsTablet?: boolean | undefined
    isTabletOnly?: boolean | undefined
    requireFullScreen?: boolean | undefined
    userInterfaceStyle?: 'light' | 'dark' | 'automatic' | undefined
    infoPlist?: Record<string, any> | undefined
    entitlements?: Record<string, any> | undefined
    associatedDomains?: string[] | undefined
    usesIcloudStorage?: boolean | undefined
    usesAppleSignIn?: boolean | undefined
    accessesContactNotes?: boolean | undefined
    jsEngine?: 'hermes' | 'jsc' | undefined
    runtimeVersion?: string | { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' } | undefined
  }
>
```

Added in v0.1.1
