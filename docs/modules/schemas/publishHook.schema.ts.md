---
title: schemas/publishHook.schema.ts
nav_order: 22
parent: Modules
---

## publishHook.schema overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [publishHookSchema](#publishhookschema)
  - [publishHookSchema](#publishhookschema-1)

---

# publishHookSchema

## publishHookSchema

**Signature**

```ts
export declare const publishHookSchema: z.ZodIntersection<
  z.ZodRecord<z.ZodString, z.ZodAny>,
  z.ZodObject<
    { file: z.ZodOptional<z.ZodString>; config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>> },
    'strip',
    z.ZodTypeAny,
    { config?: Record<string, any> | undefined; file?: string | undefined },
    { config?: Record<string, any> | undefined; file?: string | undefined }
  >
>
```

Added in v0.1.1
