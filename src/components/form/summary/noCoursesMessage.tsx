import type { FC } from 'react';

import { scrollToPosition } from '@/components/scroller';
import { usePriceState } from '@/hooks/usePriceState';

export const NoCoursesMessage: FC = () => {
  const priceState = usePriceState();

  if (priceState && priceState.courses.length === 0) {
    const handleClick = (): void => {
      scrollToPosition('courses');
    };

    return (
      <div className="mb-4 alert alert-secondary" style={{ maxWidth: 520 }}>
        Please <button type="button" className="btn btn-link p-0 align-baseline btn-no-hover-shadow" onClick={handleClick}>select one or more courses</button> before proceeding to payment.
      </div>
    );
  }
};
