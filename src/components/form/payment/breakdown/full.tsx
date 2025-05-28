import { Big } from 'big.js';
import type { FC } from 'react';
import { Fragment } from 'react';

import styles from './index.module.css';
import type { CourseGroup } from '@/domain/courseGroup';
import { getCourse } from '@/domain/courseGroup';
import { useAddressState } from '@/hooks/useAddressState';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  discountName?: string;
  courseGroups: CourseGroup[];
};

export const Full: FC<Props> = ({ discountName, courseGroups }) => {
  const priceState = usePriceState();
  const { countryCode, provinceCode } = useAddressState();

  if (!priceState) {
    return;
  }

  return (
    <>
      {((priceState.courses.length > 1) || (priceState.courses.length > 0 && (priceState.courses[0].multiCourseDiscount > 0 || priceState.courses[0].free))) && (
        <>
          {priceState.courses.map(coursePrice => {
            const course = getCourse(coursePrice.code, courseGroups);
            if (!course) {
              return null;
            }
            const name = typeof course.name === 'string' ? course.name : course.name({ countryCode, provinceCode });
            return (
              <Fragment key={coursePrice.code}>
                <tr>
                  <td className="text-md-end">{name}</td>
                  <td className="text-end text-nowrap align-bottom">{coursePrice.free ? <strong className="text-primary">FREE!</strong> : <>{priceState.currency.symbol}{coursePrice.cost.toFixed(2)}</>}</td>
                </tr>
                {!coursePrice.free && coursePrice.multiCourseDiscount > 0 && (
                  <tr>
                    <td className="text-primary text-md-end">{coursePrice.discountMessage ? coursePrice.discountMessage : <>{Math.round(coursePrice.multiCourseDiscount / coursePrice.cost * 100)}% Discount</>}</td>
                    <td className="text-primary text-end text-nowrap align-bottom">&minus; {priceState.currency.symbol}{coursePrice.multiCourseDiscount.toFixed(2)}</td>
                  </tr>
                )}
              </Fragment>
            );
          })}
          <tr><td colSpan={2}><hr className={`${styles.separator} my-1`} /></td></tr>
        </>
      )}
      {(priceState.promoDiscount > 0 || priceState.plans.full.discount > 0) && (
        <>
          <tr>
            <td className="text-md-end">Course Cost:</td>
            <td className="text-end">{priceState.currency.symbol}{Big(priceState.cost).minus(priceState.multiCourseDiscount).toFixed(2)}</td>
          </tr>
          {priceState.promoDiscount > 0 && (
            <tr>
              <td className="text-md-end">{discountName ?? 'Promotional Discount'}:</td>
              <td className="text-end">&minus; {priceState.currency.symbol}{priceState.promoDiscount.toFixed(2)}</td>
            </tr>
          )}
          {priceState.plans.full.discount > 0 && (
            <tr>
              <td className="text-md-end">Full-Payment Discount:</td>
              <td className="text-end">&minus; {priceState.currency.symbol}{priceState.plans.full.discount.toFixed(2)}</td>
            </tr>
          )}
          <tr><td colSpan={2}><hr className={`${styles.separator} my-1`} /></td></tr>
        </>
      )}
      <tr className="font-weight-bold">
        <td className="text-md-end">Total:</td>
        <td className="text-end">{priceState.currency.symbol}{priceState.plans.full.total.toFixed(2)}</td>
      </tr>
    </>
  );
};
