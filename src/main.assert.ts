// assert shape matches currently defined ExpoConfig type
/*eslint prefer-const: ["off"]*/

import type { ExpoConfig } from '@expo/config-types';
import { z } from 'zod';
import type { ExpoConfigSchema } from './main';
let expoSource: ExpoConfig;
declare const lib: z.infer<typeof ExpoConfigSchema>;

expoSource = lib;
