---
title: schemas/androidNavigationBar.schema.ts
nav_order: 4
parent: Modules
---

## androidNavigationBar.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [androidNavigationBarSchema](#androidnavigationbarschema)
  - [androidNavigationBarSchema](#androidnavigationbarschema-1)

---

# androidNavigationBarSchema

## androidNavigationBarSchema

**Signature**

```ts
export declare const androidNavigationBarSchema: z.ZodObject<
  {
    visible: z.ZodOptional<
      z.ZodUnion<[z.ZodLiteral<'leanback'>, z.ZodLiteral<'immersive'>, z.ZodLiteral<'sticky-immersive'>]>
    >
    barStyle: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'light-content'>, z.ZodLiteral<'dark-content'>]>>
    backgroundColor: z.ZodOptional<z.ZodString>
  },
  'strip',
  z.ZodTypeAny,
  {
    backgroundColor?: string | undefined
    barStyle?: 'light-content' | 'dark-content' | undefined
    visible?: 'leanback' | 'immersive' | 'sticky-immersive' | undefined
  },
  {
    backgroundColor?: string | undefined
    barStyle?: 'light-content' | 'dark-content' | undefined
    visible?: 'leanback' | 'immersive' | 'sticky-immersive' | undefined
  }
>
```

Added in v0.1.1
