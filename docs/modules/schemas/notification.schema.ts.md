---
title: schemas/notification.schema.ts
nav_order: 16
parent: Modules
---

## notification.schema overview

Added in v0.1.1

---

<h2 class="text-delta">Table of contents</h2>

- [notificationSchema](#notificationschema)
  - [notificationSchema](#notificationschema-1)

---

# notificationSchema

## notificationSchema

**Signature**

```ts
export declare const notificationSchema: z.ZodObject<
  {
    icon: z.ZodOptional<z.ZodString>
    color: z.ZodOptional<z.ZodString>
    iosDisplayInForeground: z.ZodOptional<z.ZodBoolean>
    androidMode: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<'default'>, z.ZodLiteral<'collapse'>]>>
    androidCollapsedTitle: z.ZodOptional<z.ZodString>
  },
  'strip',
  z.ZodTypeAny,
  {
    icon?: string | undefined
    color?: string | undefined
    iosDisplayInForeground?: boolean | undefined
    androidMode?: 'default' | 'collapse' | undefined
    androidCollapsedTitle?: string | undefined
  },
  {
    icon?: string | undefined
    color?: string | undefined
    iosDisplayInForeground?: boolean | undefined
    androidMode?: 'default' | 'collapse' | undefined
    androidCollapsedTitle?: string | undefined
  }
>
```

Added in v0.1.1
