import qs from 'qs';

import type { Country } from '@/domain/country';
import { isCountries } from '@/domain/country';
import type { CurrencyCode } from '@/domain/currencyCode';
import type { GeoLocation } from '@/domain/geoLocation';
import { isGeoLocation } from '@/domain/geoLocation';
import type { Price } from '@/domain/price';
import { isPrice } from '@/domain/price';
import type { Province } from '@/domain/province';
import { isProvinces } from '@/domain/province';
import type { School } from '@/domain/school';

const pricesUrl = process.env.NEXT_PUBLIC_PRICES_ENDPOINT;

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

export const fetchPrice = async (priceQuery: PriceQuery, controller?: AbortController): Promise<Price | undefined> => {
  try {
    const url = pricesUrl + '?' + qs.stringify(priceQuery);
    const response = await fetch(url, {
      headers: { 'X-API-Version': '2' },
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

export interface PriceQuery {
  courses: string[];
  countryCode: string;
  provinceCode?: string;
  options?: PriceQueryOptions;
}

type PriceQueryOptions = {
  noShipping?: boolean;
  discountAll?: boolean;
  discount?: { [d in CurrencyCode]?: number } & { default: number };
  discountSignature?: string;
  depositOverrides?: { [code: string]: number };
  installmentsOverride?: number;
  studentDiscount?: boolean;
  school?: School;
  promoCode?: string;
  dateOverride?: Date;
};
