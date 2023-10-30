import type { FC } from 'react';

import type { CoursePrice } from '@/domain/price';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  coursePrice: CoursePrice;
};

export const CourseTableRow: FC<Props> = ({ coursePrice }) => {
  const priceState = usePriceState();

  if (!priceState) {
    return null;
  }

  const multiCourseDiscountPercentage = !coursePrice.free && coursePrice.multiCourseDiscount > 0 && Math.round(coursePrice.multiCourseDiscount / coursePrice.cost * 100);
  return (
    <>
      <tr>
        <td>{coursePrice.name}</td>
        <td className="text-end text-nowrap align-bottom">{coursePrice.free ? <strong className="text-primary">FREE!</strong> : <>{priceState.currency.symbol}{coursePrice.cost.toFixed(2)}</>}</td>
      </tr>
      {multiCourseDiscountPercentage && (
        <tr className="text-primary">
          <td>{coursePrice.discountMessage ? coursePrice.discountMessage : <>{multiCourseDiscountPercentage}% Discount</>}</td>
          <td className="text-end text-nowrap align-bottom">&minus; {priceState.currency.symbol}{coursePrice.multiCourseDiscount.toFixed(2)}</td>
        </tr>
      )}
    </>
  );
};
