import type { Country } from '@/domain/country';
import { isCountries } from '@/domain/country';
import type { GeoLocation } from '@/domain/geoLocation';
import { isGeoLocation } from '@/domain/geoLocation';
import type { Price } from '@/domain/price';
import { isPrice } from '@/domain/price';
import type { Province } from '@/domain/province';
import { isProvinces } from '@/domain/province';

export const fetchGeoLocation = async (controller?: AbortController): Promise<GeoLocation | undefined> => {
  try {
    const url = 'https://api.qccareerschool.com/geoLocation/ip';
    const response = await fetch(url, {
      signal: controller?.signal,
    });
    if (response.ok) {
      const body: unknown = await response.json();
      if (isGeoLocation(body)) {
        return body;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const fetchCountries = async (controller?: AbortController): Promise<Country[] | undefined> => {
  try {
    const url = 'https://api.qccareerschool.com/geoLocation/countries';
    const response = await fetch(url, {
      signal: controller?.signal,
    });
    if (response.ok) {
      const body: unknown = await response.json();
      if (isCountries(body)) {
        return body;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const fetchProvinces = async (countryCode: string, controller?: AbortController): Promise<Province[] | undefined> => {
  try {
    const url = 'https://api.qccareerschool.com/geoLocation/provinces?countryCode=' + encodeURIComponent(countryCode);
    const response = await fetch(url, {
      signal: controller?.signal,
    });
    if (response.ok) {
      const body: unknown = await response.json();
      if (isProvinces(body)) {
        return body;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const fetchPrice = async (countryCode: string, provinceCode: string | null, courses: string[], promoCode?: string, controller?: AbortController): Promise<Price | undefined> => {
  try {
    const urlSearchParams = new URLSearchParams({ countryCode });
    if (provinceCode) {
      urlSearchParams.append('provinceCode', provinceCode);
    }
    if (promoCode) {
      urlSearchParams.append('promoCode', promoCode);
    }
    for (const c of courses) {
      urlSearchParams.append('courses', c);
    }

    const url = 'https://api.qccareerschool.com/prices?' + urlSearchParams.toString();
    const response = await fetch(url, {
      signal: controller?.signal,
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const responseBody: unknown = await response.json();
    if (isPrice(responseBody)) {
      return responseBody;
    }
  } catch (err) {
    if (!controller?.signal.aborted) {
      console.error(err);
    }
  }
};
