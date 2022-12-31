---
title: main.ts
nav_order: 1
parent: Modules
---

## main overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [ExpoConfig](#expoconfig)
  - [ExpoConfigSchema](#expoconfigschema)
  - [validateExpoConfig](#validateexpoconfig)

---

# ExpoConfig

## ExpoConfigSchema

**Signature**

```ts
export declare const ExpoConfigSchema: z.ZodObject<
  {
    name: z.ZodString
    slug: z.ZodString
    version: z.ZodOptional<z.ZodString>
    orientation: z.ZodOptional<
      z.ZodUnion<[z.ZodLiteral<'default'>, z.ZodLiteral<'portrait'>, z.ZodLiteral<'landscape'>]>
    >
    icon: z.ZodOptional<z.ZodString>
    userInterfaceStyle: z.ZodOptional<
      z.ZodUnion<[z.ZodLiteral<'light'>, z.ZodLiteral<'dark'>, z.ZodLiteral<'automatic'>]>
    >
    splash: z.ZodOptional<
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
      >
    >
    updates: z.ZodOptional<
      z.ZodObject<
        {
          enabled: z.ZodOptional<z.ZodBoolean>
          checkAutomatically: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'ON_ERROR_RECOVERY'>, z.ZodLiteral<'ON_LOAD'>]>>
          fallbackToCacheTimeout: z.ZodNumber
          url: z.ZodOptional<z.ZodString>
          codeSigningCertificate: z.ZodOptional<z.ZodString>
          codeSigningMetadata: z.ZodOptional<
            z.ZodObject<
              { alg: z.ZodOptional<z.ZodLiteral<'rsa-v1_5-sha256'>>; keyid: z.ZodOptional<z.ZodString> },
              'strip',
              z.ZodTypeAny,
              { alg?: 'rsa-v1_5-sha256' | undefined; keyid?: string | undefined },
              { alg?: 'rsa-v1_5-sha256' | undefined; keyid?: string | undefined }
            >
          >
        },
        'strip',
        z.ZodTypeAny,
        {
          enabled?: boolean | undefined
          checkAutomatically?: 'ON_ERROR_RECOVERY' | 'ON_LOAD' | undefined
          url?: string | undefined
          codeSigningCertificate?: string | undefined
          codeSigningMetadata?: { alg?: 'rsa-v1_5-sha256' | undefined; keyid?: string | undefined } | undefined
          fallbackToCacheTimeout: number
        },
        {
          enabled?: boolean | undefined
          checkAutomatically?: 'ON_ERROR_RECOVERY' | 'ON_LOAD' | undefined
          url?: string | undefined
          codeSigningCertificate?: string | undefined
          codeSigningMetadata?: { alg?: 'rsa-v1_5-sha256' | undefined; keyid?: string | undefined } | undefined
          fallbackToCacheTimeout: number
        }
      >
    >
    assetBundlePatterns: z.ZodOptional<z.ZodArray<z.ZodString, 'many'>>
    ios: z.ZodOptional<
      z.ZodObject<
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
    >
    android: z.ZodObject<
      {
        publishManifestPath: z.ZodOptional<z.ZodString>
        publishBundlePath: z.ZodOptional<z.ZodString>
        package: z.ZodOptional<z.ZodString>
        versionCode: z.ZodOptional<z.ZodNumber>
        backgroundColor: z.ZodOptional<z.ZodString>
        userInterfaceStyle: z.ZodOptional<
          z.ZodUnion<[z.ZodLiteral<'light'>, z.ZodLiteral<'dark'>, z.ZodLiteral<'automatic'>]>
        >
        useNextNotificationsApi: z.ZodOptional<z.ZodBoolean>
        icon: z.ZodOptional<z.ZodString>
        adaptiveIcon: z.ZodOptional<
          z.ZodObject<
            {
              foregroundImage: z.ZodOptional<z.ZodString>
              backgroundImage: z.ZodOptional<z.ZodString>
              backgroundColor: z.ZodOptional<z.ZodString>
            },
            'strip',
            z.ZodTypeAny,
            {
              backgroundColor?: string | undefined
              foregroundImage?: string | undefined
              backgroundImage?: string | undefined
            },
            {
              backgroundColor?: string | undefined
              foregroundImage?: string | undefined
              backgroundImage?: string | undefined
            }
          >
        >
        playStoreUrl: z.ZodOptional<z.ZodString>
        permissions: z.ZodOptional<z.ZodArray<z.ZodString, 'many'>>
        blockedPermissions: z.ZodOptional<z.ZodArray<z.ZodString, 'many'>>
        googleServicesFile: z.ZodOptional<z.ZodString>
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
              googleMaps: z.ZodOptional<
                z.ZodObject<
                  { apiKey: z.ZodOptional<z.ZodString> },
                  'strip',
                  z.ZodTypeAny,
                  { apiKey?: string | undefined },
                  { apiKey?: string | undefined }
                >
              >
              googleMobileAdsAppId: z.ZodOptional<z.ZodString>
              googleMobileAdsAutoInit: z.ZodOptional<z.ZodBoolean>
              googleSignIn: z.ZodOptional<
                z.ZodObject<
                  { apiKey: z.ZodOptional<z.ZodString>; certificateHash: z.ZodOptional<z.ZodString> },
                  'strip',
                  z.ZodTypeAny,
                  { apiKey?: string | undefined; certificateHash?: string | undefined },
                  { apiKey?: string | undefined; certificateHash?: string | undefined }
                >
              >
            },
            'strip',
            z.ZodTypeAny,
            {
              branch?: { apiKey?: string | undefined } | undefined
              googleMobileAdsAppId?: string | undefined
              googleMobileAdsAutoInit?: boolean | undefined
              googleSignIn?: { apiKey?: string | undefined; certificateHash?: string | undefined } | undefined
              googleMaps?: { apiKey?: string | undefined } | undefined
            },
            {
              branch?: { apiKey?: string | undefined } | undefined
              googleMobileAdsAppId?: string | undefined
              googleMobileAdsAutoInit?: boolean | undefined
              googleSignIn?: { apiKey?: string | undefined; certificateHash?: string | undefined } | undefined
              googleMaps?: { apiKey?: string | undefined } | undefined
            }
          >
        >
        splash: z.ZodOptional<
          z.ZodIntersection<
            z.ZodRecord<z.ZodString, z.ZodAny>,
            z.ZodObject<
              {
                backgroundColor: z.ZodOptional<z.ZodString>
                resizeMode: z.ZodOptional<
                  z.ZodUnion<[z.ZodLiteral<'cover'>, z.ZodLiteral<'contain'>, z.ZodLiteral<'native'>]>
                >
                image: z.ZodOptional<z.ZodString>
                mdpi: z.ZodOptional<z.ZodString>
                hdpi: z.ZodOptional<z.ZodString>
                xhdpi: z.ZodOptional<z.ZodString>
                xxhdpi: z.ZodOptional<z.ZodString>
                xxxhdpi: z.ZodOptional<z.ZodString>
              },
              'strip',
              z.ZodTypeAny,
              {
                backgroundColor?: string | undefined
                resizeMode?: 'cover' | 'contain' | 'native' | undefined
                image?: string | undefined
                mdpi?: string | undefined
                hdpi?: string | undefined
                xhdpi?: string | undefined
                xxhdpi?: string | undefined
                xxxhdpi?: string | undefined
              },
              {
                backgroundColor?: string | undefined
                resizeMode?: 'cover' | 'contain' | 'native' | undefined
                image?: string | undefined
                mdpi?: string | undefined
                hdpi?: string | undefined
                xhdpi?: string | undefined
                xxhdpi?: string | undefined
                xxxhdpi?: string | undefined
              }
            >
          >
        >
        intentFilters: z.ZodOptional<
          z.ZodArray<
            z.ZodObject<
              {
                autoVerify: z.ZodOptional<z.ZodBoolean>
                action: z.ZodString
                data: z.ZodOptional<
                  z.ZodUnion<
                    [
                      z.ZodObject<
                        {
                          scheme: z.ZodOptional<z.ZodString>
                          host: z.ZodOptional<z.ZodString>
                          port: z.ZodOptional<z.ZodString>
                          path: z.ZodOptional<z.ZodString>
                          pathPattern: z.ZodOptional<z.ZodString>
                          pathPrefix: z.ZodOptional<z.ZodString>
                          mimeType: z.ZodOptional<z.ZodString>
                        },
                        'strip',
                        z.ZodTypeAny,
                        {
                          path?: string | undefined
                          scheme?: string | undefined
                          host?: string | undefined
                          port?: string | undefined
                          pathPattern?: string | undefined
                          pathPrefix?: string | undefined
                          mimeType?: string | undefined
                        },
                        {
                          path?: string | undefined
                          scheme?: string | undefined
                          host?: string | undefined
                          port?: string | undefined
                          pathPattern?: string | undefined
                          pathPrefix?: string | undefined
                          mimeType?: string | undefined
                        }
                      >,
                      z.ZodArray<
                        z.ZodObject<
                          {
                            scheme: z.ZodOptional<z.ZodString>
                            host: z.ZodOptional<z.ZodString>
                            port: z.ZodOptional<z.ZodString>
                            path: z.ZodOptional<z.ZodString>
                            pathPattern: z.ZodOptional<z.ZodString>
                            pathPrefix: z.ZodOptional<z.ZodString>
                            mimeType: z.ZodOptional<z.ZodString>
                          },
                          'strip',
                          z.ZodTypeAny,
                          {
                            path?: string | undefined
                            scheme?: string | undefined
                            host?: string | undefined
                            port?: string | undefined
                            pathPattern?: string | undefined
                            pathPrefix?: string | undefined
                            mimeType?: string | undefined
                          },
                          {
                            path?: string | undefined
                            scheme?: string | undefined
                            host?: string | undefined
                            port?: string | undefined
                            pathPattern?: string | undefined
                            pathPrefix?: string | undefined
                            mimeType?: string | undefined
                          }
                        >,
                        'many'
                      >
                    ]
                  >
                >
                category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, 'many'>]>>
              },
              'strip',
              z.ZodTypeAny,
              {
                autoVerify?: boolean | undefined
                data?:
                  | {
                      path?: string | undefined
                      scheme?: string | undefined
                      host?: string | undefined
                      port?: string | undefined
                      pathPattern?: string | undefined
                      pathPrefix?: string | undefined
                      mimeType?: string | undefined
                    }
                  | {
                      path?: string | undefined
                      scheme?: string | undefined
                      host?: string | undefined
                      port?: string | undefined
                      pathPattern?: string | undefined
                      pathPrefix?: string | undefined
                      mimeType?: string | undefined
                    }[]
                  | undefined
                category?: string | string[] | undefined
                action: string
              },
              {
                autoVerify?: boolean | undefined
                data?:
                  | {
                      path?: string | undefined
                      scheme?: string | undefined
                      host?: string | undefined
                      port?: string | undefined
                      pathPattern?: string | undefined
                      pathPrefix?: string | undefined
                      mimeType?: string | undefined
                    }
                  | {
                      path?: string | undefined
                      scheme?: string | undefined
                      host?: string | undefined
                      port?: string | undefined
                      pathPattern?: string | undefined
                      pathPrefix?: string | undefined
                      mimeType?: string | undefined
                    }[]
                  | undefined
                category?: string | string[] | undefined
                action: string
              }
            >,
            'many'
          >
        >
        allowBackup: z.ZodOptional<z.ZodBoolean>
        softwareKeyboardLayoutMode: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'resize'>, z.ZodLiteral<'pan'>]>>
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
              resizeMode?: 'cover' | 'contain' | 'native' | undefined
              image?: string | undefined
              mdpi?: string | undefined
              hdpi?: string | undefined
              xhdpi?: string | undefined
              xxhdpi?: string | undefined
              xxxhdpi?: string | undefined
            })
          | undefined
        config?:
          | {
              branch?: { apiKey?: string | undefined } | undefined
              googleMobileAdsAppId?: string | undefined
              googleMobileAdsAutoInit?: boolean | undefined
              googleSignIn?: { apiKey?: string | undefined; certificateHash?: string | undefined } | undefined
              googleMaps?: { apiKey?: string | undefined } | undefined
            }
          | undefined
        icon?: string | undefined
        publishManifestPath?: string | undefined
        publishBundlePath?: string | undefined
        googleServicesFile?: string | undefined
        userInterfaceStyle?: 'light' | 'dark' | 'automatic' | undefined
        jsEngine?: 'hermes' | 'jsc' | undefined
        runtimeVersion?: string | { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' } | undefined
        package?: string | undefined
        versionCode?: number | undefined
        useNextNotificationsApi?: boolean | undefined
        adaptiveIcon?:
          | {
              backgroundColor?: string | undefined
              foregroundImage?: string | undefined
              backgroundImage?: string | undefined
            }
          | undefined
        playStoreUrl?: string | undefined
        permissions?: string[] | undefined
        blockedPermissions?: string[] | undefined
        intentFilters?:
          | {
              autoVerify?: boolean | undefined
              data?:
                | {
                    path?: string | undefined
                    scheme?: string | undefined
                    host?: string | undefined
                    port?: string | undefined
                    pathPattern?: string | undefined
                    pathPrefix?: string | undefined
                    mimeType?: string | undefined
                  }
                | {
                    path?: string | undefined
                    scheme?: string | undefined
                    host?: string | undefined
                    port?: string | undefined
                    pathPattern?: string | undefined
                    pathPrefix?: string | undefined
                    mimeType?: string | undefined
                  }[]
                | undefined
              category?: string | string[] | undefined
              action: string
            }[]
          | undefined
        allowBackup?: boolean | undefined
        softwareKeyboardLayoutMode?: 'resize' | 'pan' | undefined
      },
      {
        backgroundColor?: string | undefined
        splash?:
          | (Record<string, any> & {
              backgroundColor?: string | undefined
              resizeMode?: 'cover' | 'contain' | 'native' | undefined
              image?: string | undefined
              mdpi?: string | undefined
              hdpi?: string | undefined
              xhdpi?: string | undefined
              xxhdpi?: string | undefined
              xxxhdpi?: string | undefined
            })
          | undefined
        config?:
          | {
              branch?: { apiKey?: string | undefined } | undefined
              googleMobileAdsAppId?: string | undefined
              googleMobileAdsAutoInit?: boolean | undefined
              googleSignIn?: { apiKey?: string | undefined; certificateHash?: string | undefined } | undefined
              googleMaps?: { apiKey?: string | undefined } | undefined
            }
          | undefined
        icon?: string | undefined
        publishManifestPath?: string | undefined
        publishBundlePath?: string | undefined
        googleServicesFile?: string | undefined
        userInterfaceStyle?: 'light' | 'dark' | 'automatic' | undefined
        jsEngine?: 'hermes' | 'jsc' | undefined
        runtimeVersion?: string | { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' } | undefined
        package?: string | undefined
        versionCode?: number | undefined
        useNextNotificationsApi?: boolean | undefined
        adaptiveIcon?:
          | {
              backgroundColor?: string | undefined
              foregroundImage?: string | undefined
              backgroundImage?: string | undefined
            }
          | undefined
        playStoreUrl?: string | undefined
        permissions?: string[] | undefined
        blockedPermissions?: string[] | undefined
        intentFilters?:
          | {
              autoVerify?: boolean | undefined
              data?:
                | {
                    path?: string | undefined
                    scheme?: string | undefined
                    host?: string | undefined
                    port?: string | undefined
                    pathPattern?: string | undefined
                    pathPrefix?: string | undefined
                    mimeType?: string | undefined
                  }
                | {
                    path?: string | undefined
                    scheme?: string | undefined
                    host?: string | undefined
                    port?: string | undefined
                    pathPattern?: string | undefined
                    pathPrefix?: string | undefined
                    mimeType?: string | undefined
                  }[]
                | undefined
              category?: string | string[] | undefined
              action: string
            }[]
          | undefined
        allowBackup?: boolean | undefined
        softwareKeyboardLayoutMode?: 'resize' | 'pan' | undefined
      }
    >
    web: z.ZodOptional<
      z.ZodIntersection<
        z.ZodRecord<z.ZodString, z.ZodAny>,
        z.ZodObject<
          {
            favicon: z.ZodOptional<z.ZodString>
            name: z.ZodOptional<z.ZodString>
            shortName: z.ZodOptional<z.ZodString>
            lang: z.ZodOptional<z.ZodString>
            scope: z.ZodOptional<z.ZodString>
            themeColor: z.ZodOptional<z.ZodString>
            description: z.ZodOptional<z.ZodString>
            dir: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'auto'>, z.ZodLiteral<'ltr'>, z.ZodLiteral<'rtl'>]>>
            display: z.ZodOptional<
              z.ZodUnion<
                [
                  z.ZodLiteral<'fullscreen'>,
                  z.ZodLiteral<'standalone'>,
                  z.ZodLiteral<'minimal-ui'>,
                  z.ZodLiteral<'browser'>
                ]
              >
            >
            startUrl: z.ZodOptional<z.ZodString>
            orientation: z.ZodOptional<
              z.ZodUnion<
                [
                  z.ZodLiteral<'any'>,
                  z.ZodLiteral<'natural'>,
                  z.ZodLiteral<'landscape'>,
                  z.ZodLiteral<'landscape-primary'>,
                  z.ZodLiteral<'landscape-secondary'>,
                  z.ZodLiteral<'portrait'>,
                  z.ZodLiteral<'portrait-primary'>,
                  z.ZodLiteral<'portrait-secondary'>
                ]
              >
            >
            backgroundColor: z.ZodOptional<z.ZodString>
            barStyle: z.ZodOptional<
              z.ZodUnion<[z.ZodLiteral<'default'>, z.ZodLiteral<'black'>, z.ZodLiteral<'black-translucent'>]>
            >
            preferRelatedApplications: z.ZodOptional<z.ZodBoolean>
            dangerous: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>
            splash: z.ZodOptional<
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
              >
            >
            config: z.ZodOptional<
              z.ZodIntersection<
                z.ZodRecord<z.ZodString, z.ZodAny>,
                z.ZodObject<
                  {
                    firebase: z.ZodOptional<
                      z.ZodIntersection<
                        z.ZodRecord<z.ZodString, z.ZodAny>,
                        z.ZodObject<
                          {
                            apiKey: z.ZodOptional<z.ZodString>
                            authDomain: z.ZodOptional<z.ZodString>
                            databaseURL: z.ZodOptional<z.ZodString>
                            projectId: z.ZodOptional<z.ZodString>
                            storageBucket: z.ZodOptional<z.ZodString>
                            messagingSenderId: z.ZodOptional<z.ZodString>
                            appId: z.ZodOptional<z.ZodString>
                            measurementId: z.ZodOptional<z.ZodString>
                          },
                          'strip',
                          z.ZodTypeAny,
                          {
                            apiKey?: string | undefined
                            authDomain?: string | undefined
                            databaseURL?: string | undefined
                            projectId?: string | undefined
                            storageBucket?: string | undefined
                            messagingSenderId?: string | undefined
                            appId?: string | undefined
                            measurementId?: string | undefined
                          },
                          {
                            apiKey?: string | undefined
                            authDomain?: string | undefined
                            databaseURL?: string | undefined
                            projectId?: string | undefined
                            storageBucket?: string | undefined
                            messagingSenderId?: string | undefined
                            appId?: string | undefined
                            measurementId?: string | undefined
                          }
                        >
                      >
                    >
                  },
                  'strip',
                  z.ZodTypeAny,
                  {
                    firebase?:
                      | (Record<string, any> & {
                          apiKey?: string | undefined
                          authDomain?: string | undefined
                          databaseURL?: string | undefined
                          projectId?: string | undefined
                          storageBucket?: string | undefined
                          messagingSenderId?: string | undefined
                          appId?: string | undefined
                          measurementId?: string | undefined
                        })
                      | undefined
                  },
                  {
                    firebase?:
                      | (Record<string, any> & {
                          apiKey?: string | undefined
                          authDomain?: string | undefined
                          databaseURL?: string | undefined
                          projectId?: string | undefined
                          storageBucket?: string | undefined
                          messagingSenderId?: string | undefined
                          appId?: string | undefined
                          measurementId?: string | undefined
                        })
                      | undefined
                  }
                >
              >
            >
            bundler: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'webpack'>, z.ZodLiteral<'metro'>]>>
          },
          'strip',
          z.ZodTypeAny,
          {
            backgroundColor?: string | undefined
            favicon?: string | undefined
            name?: string | undefined
            shortName?: string | undefined
            lang?: string | undefined
            scope?: string | undefined
            themeColor?: string | undefined
            description?: string | undefined
            dir?: 'auto' | 'ltr' | 'rtl' | undefined
            display?: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser' | undefined
            startUrl?: string | undefined
            orientation?:
              | 'any'
              | 'natural'
              | 'landscape'
              | 'landscape-primary'
              | 'landscape-secondary'
              | 'portrait'
              | 'portrait-primary'
              | 'portrait-secondary'
              | undefined
            barStyle?: 'default' | 'black' | 'black-translucent' | undefined
            preferRelatedApplications?: boolean | undefined
            dangerous?: Record<string, any> | undefined
            splash?:
              | (Record<string, any> & {
                  backgroundColor?: string | undefined
                  resizeMode?: 'cover' | 'contain' | undefined
                  image?: string | undefined
                })
              | undefined
            config?:
              | (Record<string, any> & {
                  firebase?:
                    | (Record<string, any> & {
                        apiKey?: string | undefined
                        authDomain?: string | undefined
                        databaseURL?: string | undefined
                        projectId?: string | undefined
                        storageBucket?: string | undefined
                        messagingSenderId?: string | undefined
                        appId?: string | undefined
                        measurementId?: string | undefined
                      })
                    | undefined
                })
              | undefined
            bundler?: 'webpack' | 'metro' | undefined
          },
          {
            backgroundColor?: string | undefined
            favicon?: string | undefined
            name?: string | undefined
            shortName?: string | undefined
            lang?: string | undefined
            scope?: string | undefined
            themeColor?: string | undefined
            description?: string | undefined
            dir?: 'auto' | 'ltr' | 'rtl' | undefined
            display?: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser' | undefined
            startUrl?: string | undefined
            orientation?:
              | 'any'
              | 'natural'
              | 'landscape'
              | 'landscape-primary'
              | 'landscape-secondary'
              | 'portrait'
              | 'portrait-primary'
              | 'portrait-secondary'
              | undefined
            barStyle?: 'default' | 'black' | 'black-translucent' | undefined
            preferRelatedApplications?: boolean | undefined
            dangerous?: Record<string, any> | undefined
            splash?:
              | (Record<string, any> & {
                  backgroundColor?: string | undefined
                  resizeMode?: 'cover' | 'contain' | undefined
                  image?: string | undefined
                })
              | undefined
            config?:
              | (Record<string, any> & {
                  firebase?:
                    | (Record<string, any> & {
                        apiKey?: string | undefined
                        authDomain?: string | undefined
                        databaseURL?: string | undefined
                        projectId?: string | undefined
                        storageBucket?: string | undefined
                        messagingSenderId?: string | undefined
                        appId?: string | undefined
                        measurementId?: string | undefined
                      })
                    | undefined
                })
              | undefined
            bundler?: 'webpack' | 'metro' | undefined
          }
        >
      >
    >
    extra: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>
    owner: z.ZodOptional<z.ZodString>
    description: z.ZodOptional<z.ZodString>
    currentFullName: z.ZodOptional<z.ZodString>
    originalFullName: z.ZodOptional<z.ZodString>
    privacy: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'public'>, z.ZodLiteral<'unlisted'>, z.ZodLiteral<'hidden'>]>>
    sdkVersion: z.ZodOptional<z.ZodString>
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
    platforms: z.ZodOptional<
      z.ZodArray<z.ZodUnion<[z.ZodLiteral<'android'>, z.ZodLiteral<'ios'>, z.ZodLiteral<'web'>]>, 'many'>
    >
    githubUrl: z.ZodOptional<z.ZodString>
    backgroundColor: z.ZodOptional<z.ZodString>
    primaryColor: z.ZodOptional<z.ZodString>
    notification: z.ZodOptional<
      z.ZodObject<
        {
          icon: z.ZodOptional<z.ZodString>
          color: z.ZodOptional<z.ZodString>
          iosDisplayInForeground: z.ZodOptional<z.ZodBoolean>
          androidMode: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'default'>, z.ZodLiteral<'collapse'>]>>
          androidCollapsedTitle: z.ZodOptional<z.ZodString>
        },
        'strip',
        z.ZodTypeAny,
        {
          icon?: string | undefined
          color?: string | undefined
          iosDisplayInForeground?: boolean | undefined
          androidMode?: 'default' | 'collapse' | undefined
          androidCollapsedTitle?: string | undefined
        },
        {
          icon?: string | undefined
          color?: string | undefined
          iosDisplayInForeground?: boolean | undefined
          androidMode?: 'default' | 'collapse' | undefined
          androidCollapsedTitle?: string | undefined
        }
      >
    >
    appKey: z.ZodOptional<z.ZodString>
    androidStatusBar: z.ZodOptional<
      z.ZodObject<
        {
          barStyle: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'light-content'>, z.ZodLiteral<'dark-content'>]>>
          backgroundColor: z.ZodOptional<z.ZodString>
          hidden: z.ZodOptional<z.ZodBoolean>
          translucent: z.ZodOptional<z.ZodBoolean>
        },
        'strip',
        z.ZodTypeAny,
        {
          backgroundColor?: string | undefined
          barStyle?: 'light-content' | 'dark-content' | undefined
          hidden?: boolean | undefined
          translucent?: boolean | undefined
        },
        {
          backgroundColor?: string | undefined
          barStyle?: 'light-content' | 'dark-content' | undefined
          hidden?: boolean | undefined
          translucent?: boolean | undefined
        }
      >
    >
    androidNavigationBar: z.ZodOptional<
      z.ZodObject<
        {
          barStyle: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'light-content'>, z.ZodLiteral<'dark-content'>]>>
          backgroundColor: z.ZodOptional<z.ZodString>
          hidden: z.ZodOptional<z.ZodBoolean>
          translucent: z.ZodOptional<z.ZodBoolean>
        },
        'strip',
        z.ZodTypeAny,
        {
          backgroundColor?: string | undefined
          barStyle?: 'light-content' | 'dark-content' | undefined
          hidden?: boolean | undefined
          translucent?: boolean | undefined
        },
        {
          backgroundColor?: string | undefined
          barStyle?: 'light-content' | 'dark-content' | undefined
          hidden?: boolean | undefined
          translucent?: boolean | undefined
        }
      >
    >
    developmentClient: z.ZodOptional<
      z.ZodObject<
        { silentLaunch: z.ZodOptional<z.ZodBoolean> },
        'strip',
        z.ZodTypeAny,
        { silentLaunch?: boolean | undefined },
        { silentLaunch?: boolean | undefined }
      >
    >
    scheme: z.ZodOptional<z.ZodString>
    entryPoint: z.ZodOptional<z.ZodString>
    packagerOpts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>
    locales: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>>
    facebookAppId: z.ZodOptional<z.ZodString>
    facebookAutoInitEnabled: z.ZodOptional<z.ZodBoolean>
    facebookAutoLogAppEventsEnabled: z.ZodOptional<z.ZodBoolean>
    facebookAdvertiserIDCollectionEnabled: z.ZodOptional<z.ZodBoolean>
    facebookDisplayName: z.ZodOptional<z.ZodString>
    facebookScheme: z.ZodOptional<z.ZodString>
    isDetached: z.ZodOptional<z.ZodBoolean>
    detach: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>
    plugins: z.ZodOptional<
      z.ZodArray<
        z.ZodUnion<
          [
            z.ZodString,
            z.ZodTuple<[], null>,
            z.ZodTuple<[z.ZodString], null>,
            z.ZodTuple<[z.ZodString, z.ZodAny], null>
          ]
        >,
        'many'
      >
    >
    jsEngine: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'hermes'>, z.ZodLiteral<'jsc'>]>>
    hooks: z.ZodOptional<
      z.ZodObject<
        {
          postPublish: z.ZodOptional<
            z.ZodArray<
              z.ZodIntersection<
                z.ZodRecord<z.ZodString, z.ZodAny>,
                z.ZodObject<
                  { file: z.ZodOptional<z.ZodString>; config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>> },
                  'strip',
                  z.ZodTypeAny,
                  { config?: Record<string, any> | undefined; file?: string | undefined },
                  { config?: Record<string, any> | undefined; file?: string | undefined }
                >
              >,
              'many'
            >
          >
          postExport: z.ZodOptional<
            z.ZodArray<
              z.ZodIntersection<
                z.ZodRecord<z.ZodString, z.ZodAny>,
                z.ZodObject<
                  { file: z.ZodOptional<z.ZodString>; config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>> },
                  'strip',
                  z.ZodTypeAny,
                  { config?: Record<string, any> | undefined; file?: string | undefined },
                  { config?: Record<string, any> | undefined; file?: string | undefined }
                >
              >,
              'many'
            >
          >
        },
        'strip',
        z.ZodTypeAny,
        {
          postPublish?:
            | (Record<string, any> & { config?: Record<string, any> | undefined; file?: string | undefined })[]
            | undefined
          postExport?:
            | (Record<string, any> & { config?: Record<string, any> | undefined; file?: string | undefined })[]
            | undefined
        },
        {
          postPublish?:
            | (Record<string, any> & { config?: Record<string, any> | undefined; file?: string | undefined })[]
            | undefined
          postExport?:
            | (Record<string, any> & { config?: Record<string, any> | undefined; file?: string | undefined })[]
            | undefined
        }
      >
    >
    experiments: z.ZodOptional<
      z.ZodObject<
        { turboModules: z.ZodOptional<z.ZodBoolean> },
        'strip',
        z.ZodTypeAny,
        { turboModules?: boolean | undefined },
        { turboModules?: boolean | undefined }
      >
    >
    _internal: z.ZodOptional<
      z.ZodIntersection<
        z.ZodRecord<z.ZodString, z.ZodAny>,
        z.ZodObject<
          { pluginHistory: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>> },
          'strip',
          z.ZodTypeAny,
          { pluginHistory?: Record<string, any> | undefined },
          { pluginHistory?: Record<string, any> | undefined }
        >
      >
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    backgroundColor?: string | undefined
    description?: string | undefined
    orientation?: 'landscape' | 'portrait' | 'default' | undefined
    splash?:
      | (Record<string, any> & {
          backgroundColor?: string | undefined
          resizeMode?: 'cover' | 'contain' | undefined
          image?: string | undefined
        })
      | undefined
    sdkVersion?: string | undefined
    ios?:
      | {
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
      | undefined
    web?:
      | (Record<string, any> & {
          backgroundColor?: string | undefined
          favicon?: string | undefined
          name?: string | undefined
          shortName?: string | undefined
          lang?: string | undefined
          scope?: string | undefined
          themeColor?: string | undefined
          description?: string | undefined
          dir?: 'auto' | 'ltr' | 'rtl' | undefined
          display?: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser' | undefined
          startUrl?: string | undefined
          orientation?:
            | 'any'
            | 'natural'
            | 'landscape'
            | 'landscape-primary'
            | 'landscape-secondary'
            | 'portrait'
            | 'portrait-primary'
            | 'portrait-secondary'
            | undefined
          barStyle?: 'default' | 'black' | 'black-translucent' | undefined
          preferRelatedApplications?: boolean | undefined
          dangerous?: Record<string, any> | undefined
          splash?:
            | (Record<string, any> & {
                backgroundColor?: string | undefined
                resizeMode?: 'cover' | 'contain' | undefined
                image?: string | undefined
              })
            | undefined
          config?:
            | (Record<string, any> & {
                firebase?:
                  | (Record<string, any> & {
                      apiKey?: string | undefined
                      authDomain?: string | undefined
                      databaseURL?: string | undefined
                      projectId?: string | undefined
                      storageBucket?: string | undefined
                      messagingSenderId?: string | undefined
                      appId?: string | undefined
                      measurementId?: string | undefined
                    })
                  | undefined
              })
            | undefined
          bundler?: 'webpack' | 'metro' | undefined
        })
      | undefined
    icon?: string | undefined
    userInterfaceStyle?: 'light' | 'dark' | 'automatic' | undefined
    jsEngine?: 'hermes' | 'jsc' | undefined
    runtimeVersion?: string | { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' } | undefined
    scheme?: string | undefined
    version?: string | undefined
    updates?:
      | {
          enabled?: boolean | undefined
          checkAutomatically?: 'ON_ERROR_RECOVERY' | 'ON_LOAD' | undefined
          url?: string | undefined
          codeSigningCertificate?: string | undefined
          codeSigningMetadata?: { alg?: 'rsa-v1_5-sha256' | undefined; keyid?: string | undefined } | undefined
          fallbackToCacheTimeout: number
        }
      | undefined
    assetBundlePatterns?: string[] | undefined
    extra?: Record<string, any> | undefined
    owner?: string | undefined
    currentFullName?: string | undefined
    originalFullName?: string | undefined
    privacy?: 'public' | 'unlisted' | 'hidden' | undefined
    platforms?: ('android' | 'ios' | 'web')[] | undefined
    githubUrl?: string | undefined
    primaryColor?: string | undefined
    notification?:
      | {
          icon?: string | undefined
          color?: string | undefined
          iosDisplayInForeground?: boolean | undefined
          androidMode?: 'default' | 'collapse' | undefined
          androidCollapsedTitle?: string | undefined
        }
      | undefined
    appKey?: string | undefined
    androidStatusBar?:
      | {
          backgroundColor?: string | undefined
          barStyle?: 'light-content' | 'dark-content' | undefined
          hidden?: boolean | undefined
          translucent?: boolean | undefined
        }
      | undefined
    androidNavigationBar?:
      | {
          backgroundColor?: string | undefined
          barStyle?: 'light-content' | 'dark-content' | undefined
          hidden?: boolean | undefined
          translucent?: boolean | undefined
        }
      | undefined
    developmentClient?: { silentLaunch?: boolean | undefined } | undefined
    entryPoint?: string | undefined
    packagerOpts?: Record<string, any> | undefined
    locales?: Record<string, string | Record<string, any>> | undefined
    facebookAppId?: string | undefined
    facebookAutoInitEnabled?: boolean | undefined
    facebookAutoLogAppEventsEnabled?: boolean | undefined
    facebookAdvertiserIDCollectionEnabled?: boolean | undefined
    facebookDisplayName?: string | undefined
    facebookScheme?: string | undefined
    isDetached?: boolean | undefined
    detach?: Record<string, any> | undefined
    plugins?: (string | [string] | [] | [string, any])[] | undefined
    hooks?:
      | {
          postPublish?:
            | (Record<string, any> & { config?: Record<string, any> | undefined; file?: string | undefined })[]
            | undefined
          postExport?:
            | (Record<string, any> & { config?: Record<string, any> | undefined; file?: string | undefined })[]
            | undefined
        }
      | undefined
    experiments?: { turboModules?: boolean | undefined } | undefined
    _internal?: (Record<string, any> & { pluginHistory?: Record<string, any> | undefined }) | undefined
    name: string
    android: {
      backgroundColor?: string | undefined
      splash?:
        | (Record<string, any> & {
            backgroundColor?: string | undefined
            resizeMode?: 'cover' | 'contain' | 'native' | undefined
            image?: string | undefined
            mdpi?: string | undefined
            hdpi?: string | undefined
            xhdpi?: string | undefined
            xxhdpi?: string | undefined
            xxxhdpi?: string | undefined
          })
        | undefined
      config?:
        | {
            branch?: { apiKey?: string | undefined } | undefined
            googleMobileAdsAppId?: string | undefined
            googleMobileAdsAutoInit?: boolean | undefined
            googleSignIn?: { apiKey?: string | undefined; certificateHash?: string | undefined } | undefined
            googleMaps?: { apiKey?: string | undefined } | undefined
          }
        | undefined
      icon?: string | undefined
      publishManifestPath?: string | undefined
      publishBundlePath?: string | undefined
      googleServicesFile?: string | undefined
      userInterfaceStyle?: 'light' | 'dark' | 'automatic' | undefined
      jsEngine?: 'hermes' | 'jsc' | undefined
      runtimeVersion?: string | { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' } | undefined
      package?: string | undefined
      versionCode?: number | undefined
      useNextNotificationsApi?: boolean | undefined
      adaptiveIcon?:
        | {
            backgroundColor?: string | undefined
            foregroundImage?: string | undefined
            backgroundImage?: string | undefined
          }
        | undefined
      playStoreUrl?: string | undefined
      permissions?: string[] | undefined
      blockedPermissions?: string[] | undefined
      intentFilters?:
        | {
            autoVerify?: boolean | undefined
            data?:
              | {
                  path?: string | undefined
                  scheme?: string | undefined
                  host?: string | undefined
                  port?: string | undefined
                  pathPattern?: string | undefined
                  pathPrefix?: string | undefined
                  mimeType?: string | undefined
                }
              | {
                  path?: string | undefined
                  scheme?: string | undefined
                  host?: string | undefined
                  port?: string | undefined
                  pathPattern?: string | undefined
                  pathPrefix?: string | undefined
                  mimeType?: string | undefined
                }[]
              | undefined
            category?: string | string[] | undefined
            action: string
          }[]
        | undefined
      allowBackup?: boolean | undefined
      softwareKeyboardLayoutMode?: 'resize' | 'pan' | undefined
    }
    slug: string
  },
  {
    backgroundColor?: string | undefined
    description?: string | undefined
    orientation?: 'landscape' | 'portrait' | 'default' | undefined
    splash?:
      | (Record<string, any> & {
          backgroundColor?: string | undefined
          resizeMode?: 'cover' | 'contain' | undefined
          image?: string | undefined
        })
      | undefined
    sdkVersion?: string | undefined
    ios?:
      | {
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
      | undefined
    web?:
      | (Record<string, any> & {
          backgroundColor?: string | undefined
          favicon?: string | undefined
          name?: string | undefined
          shortName?: string | undefined
          lang?: string | undefined
          scope?: string | undefined
          themeColor?: string | undefined
          description?: string | undefined
          dir?: 'auto' | 'ltr' | 'rtl' | undefined
          display?: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser' | undefined
          startUrl?: string | undefined
          orientation?:
            | 'any'
            | 'natural'
            | 'landscape'
            | 'landscape-primary'
            | 'landscape-secondary'
            | 'portrait'
            | 'portrait-primary'
            | 'portrait-secondary'
            | undefined
          barStyle?: 'default' | 'black' | 'black-translucent' | undefined
          preferRelatedApplications?: boolean | undefined
          dangerous?: Record<string, any> | undefined
          splash?:
            | (Record<string, any> & {
                backgroundColor?: string | undefined
                resizeMode?: 'cover' | 'contain' | undefined
                image?: string | undefined
              })
            | undefined
          config?:
            | (Record<string, any> & {
                firebase?:
                  | (Record<string, any> & {
                      apiKey?: string | undefined
                      authDomain?: string | undefined
                      databaseURL?: string | undefined
                      projectId?: string | undefined
                      storageBucket?: string | undefined
                      messagingSenderId?: string | undefined
                      appId?: string | undefined
                      measurementId?: string | undefined
                    })
                  | undefined
              })
            | undefined
          bundler?: 'webpack' | 'metro' | undefined
        })
      | undefined
    icon?: string | undefined
    userInterfaceStyle?: 'light' | 'dark' | 'automatic' | undefined
    jsEngine?: 'hermes' | 'jsc' | undefined
    runtimeVersion?: string | { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' } | undefined
    scheme?: string | undefined
    version?: string | undefined
    updates?:
      | {
          enabled?: boolean | undefined
          checkAutomatically?: 'ON_ERROR_RECOVERY' | 'ON_LOAD' | undefined
          url?: string | undefined
          codeSigningCertificate?: string | undefined
          codeSigningMetadata?: { alg?: 'rsa-v1_5-sha256' | undefined; keyid?: string | undefined } | undefined
          fallbackToCacheTimeout: number
        }
      | undefined
    assetBundlePatterns?: string[] | undefined
    extra?: Record<string, any> | undefined
    owner?: string | undefined
    currentFullName?: string | undefined
    originalFullName?: string | undefined
    privacy?: 'public' | 'unlisted' | 'hidden' | undefined
    platforms?: ('android' | 'ios' | 'web')[] | undefined
    githubUrl?: string | undefined
    primaryColor?: string | undefined
    notification?:
      | {
          icon?: string | undefined
          color?: string | undefined
          iosDisplayInForeground?: boolean | undefined
          androidMode?: 'default' | 'collapse' | undefined
          androidCollapsedTitle?: string | undefined
        }
      | undefined
    appKey?: string | undefined
    androidStatusBar?:
      | {
          backgroundColor?: string | undefined
          barStyle?: 'light-content' | 'dark-content' | undefined
          hidden?: boolean | undefined
          translucent?: boolean | undefined
        }
      | undefined
    androidNavigationBar?:
      | {
          backgroundColor?: string | undefined
          barStyle?: 'light-content' | 'dark-content' | undefined
          hidden?: boolean | undefined
          translucent?: boolean | undefined
        }
      | undefined
    developmentClient?: { silentLaunch?: boolean | undefined } | undefined
    entryPoint?: string | undefined
    packagerOpts?: Record<string, any> | undefined
    locales?: Record<string, string | Record<string, any>> | undefined
    facebookAppId?: string | undefined
    facebookAutoInitEnabled?: boolean | undefined
    facebookAutoLogAppEventsEnabled?: boolean | undefined
    facebookAdvertiserIDCollectionEnabled?: boolean | undefined
    facebookDisplayName?: string | undefined
    facebookScheme?: string | undefined
    isDetached?: boolean | undefined
    detach?: Record<string, any> | undefined
    plugins?: (string | [string] | [] | [string, any])[] | undefined
    hooks?:
      | {
          postPublish?:
            | (Record<string, any> & { config?: Record<string, any> | undefined; file?: string | undefined })[]
            | undefined
          postExport?:
            | (Record<string, any> & { config?: Record<string, any> | undefined; file?: string | undefined })[]
            | undefined
        }
      | undefined
    experiments?: { turboModules?: boolean | undefined } | undefined
    _internal?: (Record<string, any> & { pluginHistory?: Record<string, any> | undefined }) | undefined
    name: string
    android: {
      backgroundColor?: string | undefined
      splash?:
        | (Record<string, any> & {
            backgroundColor?: string | undefined
            resizeMode?: 'cover' | 'contain' | 'native' | undefined
            image?: string | undefined
            mdpi?: string | undefined
            hdpi?: string | undefined
            xhdpi?: string | undefined
            xxhdpi?: string | undefined
            xxxhdpi?: string | undefined
          })
        | undefined
      config?:
        | {
            branch?: { apiKey?: string | undefined } | undefined
            googleMobileAdsAppId?: string | undefined
            googleMobileAdsAutoInit?: boolean | undefined
            googleSignIn?: { apiKey?: string | undefined; certificateHash?: string | undefined } | undefined
            googleMaps?: { apiKey?: string | undefined } | undefined
          }
        | undefined
      icon?: string | undefined
      publishManifestPath?: string | undefined
      publishBundlePath?: string | undefined
      googleServicesFile?: string | undefined
      userInterfaceStyle?: 'light' | 'dark' | 'automatic' | undefined
      jsEngine?: 'hermes' | 'jsc' | undefined
      runtimeVersion?: string | { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' } | undefined
      package?: string | undefined
      versionCode?: number | undefined
      useNextNotificationsApi?: boolean | undefined
      adaptiveIcon?:
        | {
            backgroundColor?: string | undefined
            foregroundImage?: string | undefined
            backgroundImage?: string | undefined
          }
        | undefined
      playStoreUrl?: string | undefined
      permissions?: string[] | undefined
      blockedPermissions?: string[] | undefined
      intentFilters?:
        | {
            autoVerify?: boolean | undefined
            data?:
              | {
                  path?: string | undefined
                  scheme?: string | undefined
                  host?: string | undefined
                  port?: string | undefined
                  pathPattern?: string | undefined
                  pathPrefix?: string | undefined
                  mimeType?: string | undefined
                }
              | {
                  path?: string | undefined
                  scheme?: string | undefined
                  host?: string | undefined
                  port?: string | undefined
                  pathPattern?: string | undefined
                  pathPrefix?: string | undefined
                  mimeType?: string | undefined
                }[]
              | undefined
            category?: string | string[] | undefined
            action: string
          }[]
        | undefined
      allowBackup?: boolean | undefined
      softwareKeyboardLayoutMode?: 'resize' | 'pan' | undefined
    }
    slug: string
  }
>
```

Added in v0.1.1
The zod schema for the Expo config.
(Zod equivalent of the `ExpoConfig` type)

## validateExpoConfig

Validates the provided `config` object against the [Expo Configuration Schema](https://docs.expo.io/versions/latest/workflow/configuration).

**Signature**

```ts
export declare function validateExpoConfig(config: ExpoConfig)
```

Added in v0.1.0
