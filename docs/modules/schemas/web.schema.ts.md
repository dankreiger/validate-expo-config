---
title: schemas/web.schema.ts
nav_order: 29
parent: Modules
---

## web.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [webSchema](#webschema)
  - [webSchema](#webschema-1)

---

# webSchema

## webSchema

**Signature**

```ts
export declare const webSchema: z.ZodIntersection<
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
          [z.ZodLiteral<'fullscreen'>, z.ZodLiteral<'standalone'>, z.ZodLiteral<'minimal-ui'>, z.ZodLiteral<'browser'>]
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
```

Added in v0.1.1
