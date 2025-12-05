type MissingEmptyInvalid = 'missing' | 'empty' | 'invalid';
type MissingEmpty = 'missing' | 'empty';
type MissingInvalid = 'missing' | 'invalid';

type Address = {
  title?: MissingEmptyInvalid;
  firstName?: MissingEmptyInvalid;
  lastName?: MissingEmptyInvalid;
  address1?: MissingEmptyInvalid;
  address2?: MissingInvalid;
  city?: MissingEmptyInvalid;
  countryCode?: MissingEmptyInvalid;
  provinceCode?: MissingEmptyInvalid;
  postalCode?: MissingEmptyInvalid;
  telephoneNumber?: MissingEmpty;
  emailAddress?: MissingEmptyInvalid;
};

type ConsentErrors = {
  subscribe?: MissingEmpty;
  terms?: MissingEmpty;
};

export type EnrollmentErrors = {
  courses?: MissingEmptyInvalid;
  studentAddress: Address;
  billingAddress: Address;
  paymentPlan?: MissingEmptyInvalid;
  paymentDay?: MissingEmptyInvalid;
  captchaToken?: MissingInvalid;
  consent?: ConsentErrors;
};

export const isEnrollmentErrors = (obj: unknown): obj is EnrollmentErrors => {
  return obj !== null && typeof obj === 'object' &&
    (('courses' in obj && (isMissingEmptyInvalid(obj.courses) || typeof obj.courses === 'undefined')) || !('courses' in obj)) &&
    'studentAddress' in obj && isAddress(obj.studentAddress) &&
    'billingAddress' in obj && isAddress(obj.billingAddress) &&
    (('paymentPlan' in obj && (isMissingEmptyInvalid(obj.paymentPlan) || typeof obj.paymentPlan === 'undefined')) || !('paymentPlan' in obj)) &&
    (('paymentDay' in obj && (isMissingEmptyInvalid(obj.paymentDay) || typeof obj.paymentDay === 'undefined')) || !('paymentDay' in obj)) &&
    (('consent' in obj && (isConsent(obj.consent) || typeof obj.consent === 'undefined')) || !('consent' in obj));
};

const isAddress = (obj: unknown): obj is Address => {
  return obj !== null && typeof obj === 'object' &&
  (('title' in obj && (isMissingEmptyInvalid(obj.title) || typeof obj.title === 'undefined')) || !('title' in obj)) &&
  (('firstName' in obj && (isMissingEmptyInvalid(obj.firstName) || typeof obj.firstName === 'undefined')) || !('firstName' in obj)) &&
  (('lastName' in obj && (isMissingEmptyInvalid(obj.lastName) || typeof obj.lastName === 'undefined')) || !('lastName' in obj)) &&
  (('address1' in obj && (isMissingEmptyInvalid(obj.address1) || typeof obj.address1 === 'undefined')) || !('address1' in obj)) &&
  (('address2' in obj && (isMissingInvalid(obj.address2) || typeof obj.address2 === 'undefined')) || !('address2' in obj)) &&
  (('city' in obj && (isMissingEmptyInvalid(obj.city) || typeof obj.city === 'undefined')) || !('city' in obj)) &&
  (('countryCode' in obj && (isMissingEmptyInvalid(obj.countryCode) || typeof obj.countryCode === 'undefined')) || !('countryCode' in obj)) &&
  (('provinceCode' in obj && (isMissingEmptyInvalid(obj.provinceCode) || typeof obj.provinceCode === 'undefined')) || !('provinceCode' in obj)) &&
  (('postalCode' in obj && (isMissingEmptyInvalid(obj.postalCode) || typeof obj.postalCode === 'undefined')) || !('postalCode' in obj)) &&
  (('telephoneNumber' in obj && (isMissingEmpty(obj.telephoneNumber) || typeof obj.telephoneNumber === 'undefined')) || !('telephoneNumber' in obj)) &&
  (('emailAddress' in obj && (isMissingEmptyInvalid(obj.emailAddress) || typeof obj.emailAddress === 'undefined')) || !('emailAddress' in obj));
};

const isMissingEmptyInvalid = (obj: unknown): obj is EnrollmentErrors['courses'] => {
  return typeof obj === 'string' && (obj === 'missing' || obj === 'empty' || obj === 'invalid');
};

const isMissingEmpty = (obj: unknown): obj is EnrollmentErrors['courses'] => {
  return typeof obj === 'string' && (obj === 'missing' || obj === 'empty');
};

const isMissingInvalid = (obj: unknown): obj is EnrollmentErrors['courses'] => {
  return typeof obj === 'string' && (obj === 'missing' || obj === 'invalid');
};

const isConsent = (obj: unknown): obj is ConsentErrors => {
  return obj !== null && typeof obj === 'object' &&
    (('subscribe' in obj && (isMissingEmpty(obj.subscribe) || typeof obj.subscribe === 'undefined')) || !('subscribe' in obj)) &&
    (('terms' in obj && (isMissingEmpty(obj.terms) || typeof obj.terms === 'undefined')) || !('terms' in obj));
};
