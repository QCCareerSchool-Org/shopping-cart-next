import type { FC } from 'react';

import { usePriceState } from '@/hooks/usePriceState';

export const NoShippingAlert: FC = () => {
  const price = usePriceState();

  if (price?.noShippingMessage) {
    return (
      <div className="alert alert-info">
        <h6>Please Note</h6>
        <p className="mb-0" dangerouslySetInnerHTML={{ __html: price.noShippingMessage }} />
      </div>
    );
  }
  return null;
};
