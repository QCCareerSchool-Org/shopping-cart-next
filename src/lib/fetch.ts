import { stringify } from 'qs';

import type { Country } from '@/domain/country';
import { isCountries } from '@/domain/country';
import { type CurrencyCode, isCurrencyCode } from '@/domain/currencyCode';
import type { GeoLocation } from '@/domain/geoLocation';
import { isGeoLocation } from '@/domain/geoLocation';
import { isPaymentPlan, type PaymentPlan } from '@/domain/paymentPlan';
import type { Price } from '@/domain/price';
import { isPrice } from '@/domain/price';
import type { Province } from '@/domain/province';
import { isProvinces } from '@/domain/province';
import type { School, SchoolVariant } from '@/domain/school';
import { isSchool } from '@/domain/school';
import type { Title } from '@/domain/title';
import { isTitle } from '@/domain/title';

const pricesUrl = process.env.NEXT_PUBLIC_PRICES_ENDPOINT;

export const fetchGeoLocation = async (headers: Record<string, string>, controller?: AbortController): Promise<GeoLocation | undefined> => {
  try {
    const url = 'https://api.qccareerschool.com/geoLocation/ip';
    const response = await fetch(url, {
      headers,
      signal: controller?.signal,
    });
    if (response.ok) {
      const body: unknown = await response.json();
      if (isGeoLocation(body)) {
        return body;
      }
    }
  } catch (err) {
    if (!controller?.signal.aborted) {
      console.error(err);
    }
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
    if (!controller?.signal.aborted) {
      console.error(err);
    }
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
    if (!controller?.signal.aborted) {
      console.error(err);
    }
  }
};

export const fetchPrice = async (priceQuery: PriceQuery, controller?: AbortController): Promise<Price | undefined> => {
  try {
    const url = pricesUrl + '?' + stringify(priceQuery);
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
  withoutTools?: boolean;
  school?: School;
  schoolVariant?: SchoolVariant;
  promoCode?: string;
  dateOverride?: Date;
};

export const getEnrollment = async (id: number, code: string): Promise<EnrollmentResponse> => {
  const url = `${process.env.NEXT_PUBLIC_ENROLLMENT_ENDPOINT}/${id}?code=${encodeURIComponent(code)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const responseBody: unknown = await response.json();
  if (!isRawEnrollmentResponse(responseBody)) {
    throw Error('Invalid reponse');
  }
  return {
    ...responseBody,
    transactionTime: responseBody.transactionTime === null ? null : new Date(responseBody.transactionTime),
  };
};

type Course = {
  code: string;
  baseCost: number;
  planDiscount: number;
  discount: number;
  deposit: number;
  installment: number;
  name: string;
};

type BaseResponse = {
  id: number;
  school: School;
  noShipping: boolean;
  complete: boolean;
  success: boolean;
  emailed: boolean;
  deleted: boolean;
  url: string;
  title: Title;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  provinceCode: string | null;
  provinceName: string | null;
  postalCode: string | null;
  countryCode: string;
  countryName: string;
  telephoneNumber: string;
  emailAddress: string;
  paymentPlan: PaymentPlan;
  currencyCode: CurrencyCode;
  cost: number;
  deposit: number;
  installment: number;
  authorizationId: string | null;
  authCode: string | null;
  maskedPan: string | null;
  currencySymbol: string | null;
  currencyName: string | null;
  currencyExchangeRate: number | null;
  courses: Course[];
};

type RawEnrollmentResponse = BaseResponse & {
  /** string date */
  transactionTime: string | null;
};

export type EnrollmentResponse = BaseResponse & {
  transactionTime: Date | null;
};

const isRawEnrollmentResponse = (obj: unknown): obj is RawEnrollmentResponse => {
  return obj !== null && typeof obj === 'object' &&
    'id' in obj && typeof obj.id === 'number' &&
    'school' in obj && isSchool(obj.school) &&
    'noShipping' in obj && typeof obj.noShipping === 'boolean' &&
    'complete' in obj && typeof obj.complete === 'boolean' &&
    'success' in obj && typeof obj.success === 'boolean' &&
    'emailed' in obj && typeof obj.emailed === 'boolean' &&
    'deleted' in obj && typeof obj.deleted === 'boolean' &&
    'url' in obj && typeof obj.url === 'string' &&
    'title' in obj && isTitle(obj.title) &&
    'firstName' in obj && typeof obj.firstName === 'string' &&
    'lastName' in obj && typeof obj.lastName === 'string' &&
    'address1' in obj && typeof obj.address1 === 'string' &&
    'address2' in obj && typeof obj.address2 === 'string' &&
    'city' in obj && typeof obj.city === 'string' &&
    'provinceCode' in obj && (obj.provinceCode === null || typeof obj.provinceCode === 'string') &&
    'provinceName' in obj && (obj.provinceName === null || typeof obj.provinceName === 'string') &&
    'postalCode' in obj && (obj.postalCode === null || typeof obj.postalCode === 'string') &&
    'countryCode' in obj && typeof obj.countryCode === 'string' &&
    'countryName' in obj && typeof obj.countryName === 'string' &&
    'telephoneNumber' in obj && typeof obj.telephoneNumber === 'string' &&
    'emailAddress' in obj && typeof obj.emailAddress === 'string' &&
    'paymentPlan' in obj && isPaymentPlan(obj.paymentPlan) &&
    'currencyCode' in obj && isCurrencyCode(obj.currencyCode) &&
    'cost' in obj && typeof obj.cost === 'number' &&
    'deposit' in obj && typeof obj.deposit === 'number' &&
    'installment' in obj && typeof obj.installment === 'number' &&
    'authorizationId' in obj && (obj.authorizationId === null || typeof obj.authorizationId === 'string') &&
    'authCode' in obj && (obj.authCode === null || typeof obj.authCode === 'string') &&
    'maskedPan' in obj && (obj.maskedPan === null || typeof obj.maskedPan === 'string') &&
    'currencySymbol' in obj && (obj.currencySymbol === null || typeof obj.currencySymbol === 'string') &&
    'currencyName' in obj && (obj.currencyName === null || typeof obj.currencyName === 'string') &&
    'currencyExchangeRate' in obj && (obj.currencyExchangeRate === null || typeof obj.currencyExchangeRate === 'number') &&
    'courses' in obj && isCourses(obj.courses);
};

const isCourse = (obj: unknown): obj is Course => {
  return obj !== null && typeof obj === 'object' &&
  'code' in obj && typeof obj.code === 'string' &&
  'baseCost' in obj && typeof obj.baseCost === 'number' &&
  'planDiscount' in obj && typeof obj.planDiscount === 'number' &&
  'discount' in obj && typeof obj.discount === 'number' &&
  'deposit' in obj && typeof obj.deposit === 'number' &&
  'installment' in obj && typeof obj.installment === 'number' &&
  'name' in obj && typeof obj.name === 'string';
};

const isCourses = (obj: unknown): obj is Course => {
  return Array.isArray(obj) && obj.every(isCourse);
};
