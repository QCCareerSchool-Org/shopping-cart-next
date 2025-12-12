import type { JSX } from 'react';

import type { GeoLocation } from './geoLocation';

export type GeoLocationFunction<T> = ((geoLocation: GeoLocation) => T) | T;

export interface Course {
  code: string;
  name: GeoLocationFunction<string>;
  description?: string;
  disabledMessage?: GeoLocationFunction<string | JSX.Element>;
  hidden?: GeoLocationFunction<boolean>;
  badge?: JSX.Element;
  alwaysShown?: boolean;
}
