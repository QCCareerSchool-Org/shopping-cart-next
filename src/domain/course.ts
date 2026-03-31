import type { JSX, ReactNode } from 'react';

import type { GeoLocation } from './geoLocation';

export type GeoLocationFunction<T> = ((geoLocation: GeoLocation) => T) | T;

export interface Course {
  code: string;
  name: GeoLocationFunction<string | JSX.Element>;
  description?: string;
  disabledMessage?: GeoLocationFunction<string | JSX.Element>;
  hidden?: GeoLocationFunction<boolean>;
  badge?: JSX.Element;
  alwaysShown?: boolean;
  contents?: { heading: string; body: ReactNode };
}
