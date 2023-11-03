import type { FC } from 'react';

import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  showPromoCodeInput: boolean;
};

export const Disclaimers: FC<Props> = ({ showPromoCodeInput }) => {
  const priceState = usePriceState();

  if (!priceState || !(priceState.disclaimers.length > 0 || (showPromoCodeInput && priceState.promoWarnings.length > 0) || priceState.noShippingMessage)) {
    return;
  }

  return (
    <div className="alert alert-info">
      <h6 className={priceState.disclaimers.length > 1 ? 'mb-3' : ''}>Please Note</h6>
      {priceState.disclaimers.map((d, i) => <p
        key={i}
        className="mt-3 mb-0"
        dangerouslySetInnerHTML={{ __html: d }}
      />)}
      {showPromoCodeInput && priceState.promoWarnings.map((d, i) => <p
        key={i}
        className="mt-3 mb-0"
        dangerouslySetInnerHTML={{ __html: d }}
      />)}
      {priceState.noShippingMessage && <p className="mt-3 mb-0" dangerouslySetInnerHTML={{ __html: priceState.noShippingMessage }} />}
    </div>
  );
};
