import type { Currency } from './currency';
import type { NoShipping } from './noShipping';

type Plan = {
  /** the discount based on the payment plan */
  discount: number;
  /** the amount to be paid today */
  deposit: number;
  /** the size of the installments  */
  installmentSize: number;
  /** the number of installments */
  installments: number;
  /** any amount left over due to rounding */
  remainder: number;
  /** the final price after discounts */
  total: number;
  /** the original deposit, before overrides */
  originalDeposit: number;
  /** the original number of installments, before overrides */
  originalInstallments: number;
};

type PriceDetails = {
  /** the base price before any discounts */
  cost: number;
  /** the discount on courses after the first course */
  multiCourseDiscount: number;
  /** additional promotional discount */
  promoDiscount: number;
  /** the discount for not shipping materials */
  shippingDiscount: number;
  /** the discounted price (before payment plan discount) */
  discountedCost: number;
  /** the payment plans */
  plans: { full: Plan; part: Plan };
  /** what our cost for shipping would be if we shipped */
  shipping: number;
};

export type Price = {
  countryCode: string;
  provinceCode?: string;
  currency: Currency;
  disclaimers: string[];
  notes: string[];
  promoWarnings: string[];
  noShipping: NoShipping;
  noShippingMessage?: string;
  promoCodeRecognized?: boolean;
  promoCode?: string;
  courses: CoursePrice[];
} & PriceDetails;

export type CoursePrice = {
  code: string;
  name: string;
  primary: boolean;
  free: boolean;
  discountMessage: string | null;
} & PriceDetails;

// export interface PriceRow {
//   noShipping: number;
//   currencyCode: string;
//   cost: number;
//   multiCourseDiscountRate: number;
//   deposit: number;
//   discount: number;
//   installments: number;
//   courseCode: string;
//   courseName: string;
//   shipping: number;
// }

export const isPrice = (obj: unknown): obj is Price => {
  return true;
};
