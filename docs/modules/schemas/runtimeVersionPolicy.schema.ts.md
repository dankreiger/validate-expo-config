---
title: schemas/runtimeVersionPolicy.schema.ts
nav_order: 24
parent: Modules
---

## runtimeVersionPolicy.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [runtimeVersionPolicySchema](#runtimeversionpolicyschema)
  - [runtimeVersionPolicySchema](#runtimeversionpolicyschema-1)

---

# runtimeVersionPolicySchema

## runtimeVersionPolicySchema

**Signature**

```ts
export declare const runtimeVersionPolicySchema: z.ZodUnion<
  [
    z.ZodString,
    z.ZodObject<
      { policy: z.ZodUnion<[z.ZodLiteral<'sdkVersion'>, z.ZodLiteral<'nativeVersion'>, z.ZodLiteral<'appVersion'>]> },
      'strip',
      z.ZodTypeAny,
      { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' },
      { policy: 'sdkVersion' | 'nativeVersion' | 'appVersion' }
    >
  ]
>
```

Added in v0.1.1
