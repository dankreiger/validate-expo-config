---
title: schemas/platforms.schema.ts
nav_order: 19
parent: Modules
---

## platforms.schema overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [platformsSchema](#platformsschema)
  - [platformsSchema](#platformsschema-1)

---

# platformsSchema

## platformsSchema

**Signature**

```ts
export declare const platformsSchema: z.ZodArray<
  z.ZodUnion<[z.ZodLiteral<'android'>, z.ZodLiteral<'ios'>, z.ZodLiteral<'web'>]>,
  'many'
>
```

Added in v0.1.0
