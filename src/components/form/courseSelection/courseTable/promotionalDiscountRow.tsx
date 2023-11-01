import type { FC } from 'react';

import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  discountName?: string;
};

export const PromotionalDiscountRow: FC<Props> = ({ discountName }) => {
  const priceState = usePriceState();

  if (!priceState) {
    return;
  }

  if (priceState.promoDiscount <= 0) {
    return;
  }

  return (
    <>
      <tr><td colSpan={2}><hr /></td></tr>
      <tr>
        <td>{discountName ?? 'Promotional Discount'}</td>
        <td className="text-end text-nowrap align-bottom">&minus; {priceState.currency.symbol}{priceState.promoDiscount.toFixed(2)}</td>
      </tr>
    </>
  );
};
