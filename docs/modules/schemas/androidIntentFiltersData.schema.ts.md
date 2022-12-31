---
title: schemas/androidIntentFiltersData.schema.ts
nav_order: 3
parent: Modules
---

## androidIntentFiltersData.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [androidIntentFiltersDataSchema](#androidintentfiltersdataschema)
  - [androidIntentFiltersDataSchema](#androidintentfiltersdataschema-1)

---

# androidIntentFiltersDataSchema

## androidIntentFiltersDataSchema

**Signature**

```ts
export declare const androidIntentFiltersDataSchema: z.ZodObject<
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
>
```

Added in v0.1.1
