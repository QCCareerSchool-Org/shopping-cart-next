import type { CurrencyCode } from './currencyCode';
import { isCurrencyCode } from './currencyCode';
import type { PaymentPlan } from './paymentPlan';
import { isPaymentPlan } from './paymentPlan';
import type { School } from './school';
import { isSchool } from './school';
import type { Title } from './title';
import { isTitle } from './title';

interface Course {
  code: string;
  baseCost: number;
  planDiscount: number;
  discount: number;
  deposit: number;
  installment: number;
  name: string;
}

interface Base {
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
}

export type RawEnrollment = Base & {
  /** string date */
  transactionTime: string | null;
};

export type Enrollment = Base & {
  transactionTime: Date | null;
};

export const isRawEnrollment = (obj: unknown): obj is RawEnrollment => {
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
