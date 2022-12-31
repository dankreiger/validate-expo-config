---
title: schemas/androidStatusBar.schema.ts
nav_order: 5
parent: Modules
---

## androidStatusBar.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [androidStatusBarSchema](#androidstatusbarschema)
  - [androidStatusBarSchema](#androidstatusbarschema-1)

---

# androidStatusBarSchema

## androidStatusBarSchema

**Signature**

```ts
export declare const androidStatusBarSchema: z.ZodObject<
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
```

Added in v0.1.1
