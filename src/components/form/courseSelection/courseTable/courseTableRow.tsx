import type { FC } from 'react';

import type { Course } from '@/domain/course';
import type { CoursePrice } from '@/domain/price';
import { useAddressState } from '@/hooks/useAddressState';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  coursePrice: CoursePrice;
  course: Course;
};

export const CourseTableRow: FC<Props> = ({ coursePrice, course }) => {
  const { countryCode, provinceCode } = useAddressState();
  const priceState = usePriceState();

  if (!priceState) {
    return null;
  }

  const name = typeof course.name === 'string' ? course.name : course.name({ countryCode, provinceCode });

  const multiCourseDiscountPercentage = !coursePrice.free && coursePrice.multiCourseDiscount > 0 && Math.round(coursePrice.multiCourseDiscount / coursePrice.cost * 100);
  return (
    <>
      <tr>
        <td>{name}</td>
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
