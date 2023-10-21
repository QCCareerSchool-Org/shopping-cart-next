import type { PaymentPlan } from '@/domain/paymentPlan';

export type PaymentState = {
  plan: PaymentPlan;
  day: number;
  noShipping: boolean;
};

export type PaymentAction =
  | { type: 'SET_PAYMENT_PLAN'; payload: PaymentPlan }
  | { type: 'SET_PAYMENT_DATE'; payload: number }
  | { type: 'SET_NO_SHIPPING'; payload: boolean };

export function paymentReducer(state: PaymentState, action: PaymentAction): PaymentState {
  switch (action.type) {
    case 'SET_PAYMENT_PLAN':
      return { ...state, plan: action.payload };
    case 'SET_PAYMENT_DATE': {
      const day = Math.floor(action.payload);
      if (day < 1 || day > 31) {
        throw Error('Invalid day');
      }
      return { ...state, day };
    }
    case 'SET_NO_SHIPPING':
      return { ...state, noShipping: action.payload };
    default:
      return state;
  }
}

export const initialPaymentState: PaymentState = {
  plan: 'part',
  day: new Date().getDate(),
  noShipping: false,
};
