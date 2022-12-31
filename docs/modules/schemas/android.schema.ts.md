---
title: schemas/android.schema.ts
nav_order: 2
parent: Modules
---

## android.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [androidSchema](#androidschema)
  - [androidSchema](#androidschema-1)

---

# androidSchema

## androidSchema

**Signature**

```ts
export declare const androidSchema: z.ZodObject<
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
```

Added in v0.1.1
