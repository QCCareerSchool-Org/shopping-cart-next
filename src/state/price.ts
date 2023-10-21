import type { Price } from '@/domain/price';

export type PriceState = Price | null;

export type PriceAction =
  | { type: 'SET_PRICE'; payload: PriceState };

export const initialPriceState: PriceState = null;

export const priceReducer = (state: PriceState, action: PriceAction): PriceState => {
  switch (action.type) {
    case 'SET_PRICE':
      return action.payload;
    default:
      return state;
  }
};
