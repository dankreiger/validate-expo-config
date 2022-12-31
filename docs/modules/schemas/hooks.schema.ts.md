---
title: schemas/hooks.schema.ts
nav_order: 11
parent: Modules
---

## hooks.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [hooksSchema](#hooksschema)
  - [hooksSchema](#hooksschema-1)

---

# hooksSchema

## hooksSchema

**Signature**

```ts
export declare const hooksSchema: z.ZodObject<
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
```

Added in v0.1.1
