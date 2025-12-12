export interface GeoLocation {
  countryCode: string;
  provinceCode: string | null;
}

export const isGeoLocation = (obj: unknown): obj is GeoLocation => {
  return obj !== null && typeof obj === 'object' &&
    'countryCode' in obj && typeof obj.countryCode === 'string' &&
    'provinceCode' in obj && (typeof obj.provinceCode === 'string' || obj.provinceCode === null);
};

export const defaultGeoLocation: GeoLocation = {
  countryCode: 'US',
  provinceCode: 'MD',
};
