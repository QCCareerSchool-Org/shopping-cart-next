import type { FC } from 'react';

import { CourseTableRow } from './courseTableRow';
import { PromotionalDiscountRow } from './promotionalDiscountRow';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  discountName?: string;
};

export const CourseTable: FC<Props> = ({ discountName }) => {
  const priceState = usePriceState();

  if (!priceState) {
    return;
  }

  return (
    <>
      {priceState.courses.length > 0 && (
        <>
          <h3>Selected Courses</h3>
          <table className="w-100">
            <tbody>
              {priceState.courses.map(coursePrice => <CourseTableRow key={coursePrice.code} coursePrice={coursePrice} />)}
              <PromotionalDiscountRow discountName={discountName} />
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
