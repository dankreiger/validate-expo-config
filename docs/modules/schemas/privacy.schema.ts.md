---
title: schemas/privacy.schema.ts
nav_order: 21
parent: Modules
---

## privacy.schema overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [privacySchema](#privacyschema)
  - [privacySchema](#privacyschema-1)

---

# privacySchema

## privacySchema

**Signature**

```ts
export declare const privacySchema: z.ZodUnion<
  [z.ZodLiteral<'public'>, z.ZodLiteral<'unlisted'>, z.ZodLiteral<'hidden'>]
>
```

Added in v0.1.0
