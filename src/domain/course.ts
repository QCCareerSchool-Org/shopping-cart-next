import type { GeoLocation } from './geoLocation';

export type GeoLocationFunction<T> = ((geoLocation: GeoLocation) => T) | T;

export type Course = {
  code: string;
  name: GeoLocationFunction<string>;
  description?: string;
  disabledMessage?: GeoLocationFunction<string | JSX.Element>;
  badge?: JSX.Element;
  alwaysShown?: boolean;
};
