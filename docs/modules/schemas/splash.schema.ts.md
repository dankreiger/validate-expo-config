---
title: schemas/splash.schema.ts
nav_order: 26
parent: Modules
---

## splash.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [ExpoConfig](#expoconfig)
  - [splashSchema](#splashschema)

---

# ExpoConfig

## splashSchema

The splash schema.

**Signature**

```ts
export declare const splashSchema: z.ZodIntersection<
  z.ZodRecord<z.ZodString, z.ZodAny>,
  z.ZodObject<
    {
      backgroundColor: z.ZodOptional<z.ZodString>
      resizeMode: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'cover'>, z.ZodLiteral<'contain'>]>>
      image: z.ZodOptional<z.ZodString>
    },
    'strip',
    z.ZodTypeAny,
    { backgroundColor?: string | undefined; resizeMode?: 'cover' | 'contain' | undefined; image?: string | undefined },
    { backgroundColor?: string | undefined; resizeMode?: 'cover' | 'contain' | undefined; image?: string | undefined }
  >
>
```

Added in v0.1.1
