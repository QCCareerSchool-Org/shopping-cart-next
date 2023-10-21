export type PaymentPlan = 'full' | 'part';

export const isPaymentPlan = (obj: unknown): obj is PaymentPlan => {
  return obj === 'full' || obj === 'part';
};
