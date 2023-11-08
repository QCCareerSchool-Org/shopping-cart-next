import { type EnrollmentErrors, isEnrollmentErrors } from '@/domain/enrollmentErrors';
import type { PaymentPlan } from '@/domain/paymentPlan';
import type { School } from '@/domain/school';
import type { Title } from '@/domain/title';
import type { AddressState } from '@/state/address';
import type { BillingAddressState } from '@/state/billingAddress';
import type { MetaState } from '@/state/meta';
import type { OverridesState } from '@/state/overrides';
import type { PaymentState } from '@/state/payment';

export type EnrollmentPayload = {
  courses: string[];
  studentAddress: {
    title: Title;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    provinceCode: string | null;
    postalCode: string;
    countryCode: string;
    emailAddress: string;
    telephoneNumber: string;
  };
  billingAddress: {
    sameAsShipping: boolean;
    title: Title;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    provinceCode: string | null;
    postalCode: string;
    countryCode: string;
    emailAddress: string;
    telephoneNumber: string;
  };
  paymentPlan: PaymentPlan;
  paymentDay: number;
  school: School;
  url: string;
  discountCode: string;
  campaignId: string | null;
  existingStudent: boolean;
  options?: Options;
};

type Options = {
  discountAll: boolean;
  studentDiscount: boolean;
  school: School;
  promoCode?: string;
  installmentsOverride?: number;
  depositOverrides?: { [key: string]: number };
};

export type AddEnrollmentResponse = { id: number; code: string };

export type AddEnrollmentErrorResponse = {
  errorCode: number;
  errors: EnrollmentErrors;
};

const isAddEnrollmentResponse = (obj: unknown): obj is AddEnrollmentResponse => {
  return obj !== null && typeof obj === 'object' &&
    'id' in obj && typeof obj.id === 'number' &&
    'code' in obj && typeof obj.code === 'string';
};

const isAddEnrollmentErrorResponse = (obj: unknown): obj is AddEnrollmentErrorResponse => {
  return obj !== null && typeof obj === 'object' &&
    'errorCode' in obj && typeof obj.errorCode === 'number' &&
    'errors' in obj && isEnrollmentErrors(obj.errors);
};

export const createEnrollmentPayload = (internal: boolean, school: School, courses: string[], addressState: AddressState, billingAddressState: BillingAddressState, paymentState: PaymentState, overridesState: OverridesState, metaState: MetaState, promoCodeDefault?: string): EnrollmentPayload => {
  const payload: EnrollmentPayload = {
    courses,
    studentAddress: {
      title: addressState.title,
      firstName: addressState.firstName,
      lastName: addressState.lastName,
      address1: addressState.address1,
      address2: addressState.address2,
      city: addressState.city,
      provinceCode: addressState.provinceCode,
      postalCode: addressState.postalCode,
      countryCode: addressState.countryCode,
      emailAddress: addressState.emailAddress,
      telephoneNumber: addressState.telephoneNumber,
    },
    billingAddress: {
      sameAsShipping: billingAddressState.sameAsShipping,
      title: billingAddressState.title,
      firstName: billingAddressState.firstName,
      lastName: billingAddressState.lastName,
      address1: billingAddressState.address1,
      address2: billingAddressState.address2,
      city: billingAddressState.city,
      provinceCode: billingAddressState.provinceCode,
      postalCode: billingAddressState.postalCode,
      countryCode: billingAddressState.countryCode,
      emailAddress: billingAddressState.emailAddress,
      telephoneNumber: billingAddressState.telephoneNumber,
    },
    paymentPlan: paymentState.plan,
    paymentDay: paymentState.day,
    school: school,
    url: window.location.pathname,
    discountCode: '',
    campaignId: null,
    existingStudent: metaState.student,
  };

  const options: Options = {
    discountAll: metaState.student,
    studentDiscount: metaState.studentDiscount,
    school,
    promoCode: promoCodeDefault ?? metaState.promoCode,
  };

  if (internal) {
    options.installmentsOverride = Math.max(1, overridesState.installments);
    options.depositOverrides = overridesState.courses.reduce<{ [key: string]: number }>((prev, cur) => {
      prev[cur.code] = cur.value;
      return prev;
    }, {});
  }

  payload.options = options;

  return payload;
};

const baseUrl = process.env.NEXT_PUBLIC_ENROLLMENT_ENDPOINT ?? 'https://api.qccareerschool.com/enrollments';

export const addEnrollment = async (payload: EnrollmentPayload): Promise<AddEnrollmentResponse> => {
  console.log('c', baseUrl);
  const response = await fetch(baseUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Version': '2',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    if (response.status >= 400 && response.status < 500) {
      const responseBody: unknown = await response.json();
      if (isAddEnrollmentErrorResponse(responseBody)) {
        throw new EnrollmentError(response.status, responseBody.errorCode, responseBody.errors, response.statusText);
      }
    }
    throw Error(response.statusText);
  }
  const responseBody: unknown = await response.json();
  if (!isAddEnrollmentResponse(responseBody)) {
    console.log(responseBody);
    throw Error('Invalid response');
  }
  return responseBody;
};

export const updateEnrollment = async (id: number, payload: EnrollmentPayload): Promise<AddEnrollmentResponse> => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Version': '2',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    if (response.status >= 400 && response.status < 500) {
      const responseBody: unknown = await response.json();
      if (isAddEnrollmentErrorResponse(responseBody)) {
        throw new EnrollmentError(response.status, responseBody.errorCode, responseBody.errors, response.statusText);
      }
    }
    throw Error(response.statusText);
  }
  const responseBody: unknown = await response.json();
  if (!isAddEnrollmentResponse(responseBody)) {
    throw Error('Invalid response');
  }
  return responseBody;
};

export const chargeEnrollment = async (id: number, token: string, company: 'CA' | 'US' | 'GB'): Promise<number> => {
  const response = await fetch(`${baseUrl}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Version': '2',
    },
    body: JSON.stringify({ token, company }),
  });
  if (!response.ok) {
    if (response.status >= 400 && response.status < 500) {
      const responseBody: unknown = await response.json();
      if (responseBody !== null && typeof responseBody === 'object' && 'code' in responseBody && typeof responseBody.code === 'number') {
        if ([ 3009, 3014, 3023, 3024 ].includes(responseBody.code)) { // eslint-disable-line @typescript-eslint/no-magic-numbers
          throw Error('Declined by bank');
        } else if (responseBody.code === 3022) { // eslint-disable-line @typescript-eslint/no-magic-numbers
          throw Error('NSF');
        } else if (responseBody.code === 3016) { // eslint-disable-line @typescript-eslint/no-magic-numbers
          throw Error('Hold card');
        } else if (responseBody.code === 3007) { // eslint-disable-line @typescript-eslint/no-magic-numbers
          throw Error('AVS check failed');
        }
      }
    }
    throw Error(response.statusText);
  }
  const responseBody = response.json();
  if (typeof responseBody !== 'number') {
    throw Error('Invalid response');
  }
  return responseBody;
};

export class EnrollmentError extends Error {
  public constructor(public statusCode: number, public code: number, public enrollmentErrors: EnrollmentErrors, message?: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
