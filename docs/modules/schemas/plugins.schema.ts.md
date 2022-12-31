---
title: schemas/plugins.schema.ts
nav_order: 20
parent: Modules
---

## plugins.schema overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [pluginsSchema](#pluginsschema)
  - [pluginsSchema](#pluginsschema-1)

---

# pluginsSchema

## pluginsSchema

**Signature**

```ts
export declare const pluginsSchema: z.ZodArray<
  z.ZodUnion<
    [z.ZodString, z.ZodTuple<[], null>, z.ZodTuple<[z.ZodString], null>, z.ZodTuple<[z.ZodString, z.ZodAny], null>]
  >,
  'many'
>
```

Added in v0.1.0
