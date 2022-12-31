---
title: schemas/internal.schema.ts
nav_order: 12
parent: Modules
---

## internal.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [internalSchema](#internalschema)
  - [internalSchema](#internalschema-1)

---

# internalSchema

## internalSchema

**Signature**

```ts
export declare const internalSchema: z.ZodIntersection<
  z.ZodRecord<z.ZodString, z.ZodAny>,
  z.ZodObject<
    { pluginHistory: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>> },
    'strip',
    z.ZodTypeAny,
    { pluginHistory?: Record<string, any> | undefined },
    { pluginHistory?: Record<string, any> | undefined }
  >
>
```

Added in v0.1.1
