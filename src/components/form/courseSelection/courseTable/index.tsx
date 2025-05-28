import type { FC } from 'react';

import { CourseTableRow } from './courseTableRow';
import { PromotionalDiscountRow } from './promotionalDiscountRow';
import type { CourseGroup } from '@/domain/courseGroup';
import { getCourse } from '@/domain/courseGroup';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  discountName?: string;
  courseGroups: CourseGroup[];
};

export const CourseTable: FC<Props> = ({ discountName, courseGroups }) => {
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
              {priceState.courses.map(coursePrice => {
                const course = getCourse(coursePrice.code, courseGroups);
                if (course) {
                  return <CourseTableRow key={coursePrice.code} coursePrice={coursePrice} course={course} />;
                }
                return null;
              })}
              <PromotionalDiscountRow discountName={discountName} />
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
