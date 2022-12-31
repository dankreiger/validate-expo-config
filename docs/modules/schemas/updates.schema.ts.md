---
title: schemas/updates.schema.ts
nav_order: 27
parent: Modules
---

## updates.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [updatesSchema](#updatesschema)
  - [updatesSchema](#updatesschema-1)

---

# updatesSchema

## updatesSchema

**Signature**

```ts
export declare const updatesSchema: z.ZodObject<
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
```

Added in v0.1.1
