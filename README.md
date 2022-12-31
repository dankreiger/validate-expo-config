# @expo-tools/validate-config

Provides Zod schema for `app.config.{json|js|ts}` in an expo app.

- Main <https://docs.expo.dev/workflow/configuration/>
- TS specific: <https://docs.expo.dev/workflow/configuration/#using-typescript-for-configuration-appconfigts-instead-of-appconfigjs>

## Installation

1. Install package

   ```sh
   npm install expo-tools
   ```

## API Reference

### `validateExpoConfig`

For more fine-grained control, you can use the `ExpoConfigSchema` directly.

```ts
import type { ExpoConfig } from '@expo/config';
import { validateExpoConfig } from '@expo-tools/validate-config';

validateExpoConfig(config: ExpoConfig); // throws if invalid
```

| Parameter | Type         | Description                                              |
| :-------- | :----------- | :------------------------------------------------------- |
| `config`  | `ExpoConfig` | **Required**. Expo App config object from `@expo/config` |

### `ExpoConfigSchema`

Returns a Zod schema for `app.config.{json|js|ts}`.

Example with `.parse`:

```ts
// app.config.ts
import { z } from 'zod';
import { ExpoConfigSchema } from '@expo-tools/validate-config';

const AppConfig = {
  // ...
};

// use schema with any zod methods
/**
 * use schema with any zod:
 * - schema methods
 *   @see https://github.com/colinhacks/zod#schema-methods
 */
// e.g. `parse` method
const config = ExpoConfigSchema.parse(AppConfig);

/*
 * - object methods
 *  @see https://github.com/colinhacks/zod#objects
 */

// e.g. `merge` method
const config = ExpoConfigSchema.merge(
  z.object({
    name: z.literal('my-app'),
    slug: z.literal('my-app'),
    version: z.literal('1.0.0'),
    extra: {
      ...ExpoConfigSchema.extra,
      apiKey: z.literal('1234'),
      baseUrl: z.literal('https://my-app.com'),
    },
  })
);
```
