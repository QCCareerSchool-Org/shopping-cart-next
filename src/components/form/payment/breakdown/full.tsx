import { Big } from 'big.js';
import type { FC } from 'react';
import { Fragment } from 'react';

import styles from './index.module.css';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  discountName?: string;
};

export const Full: FC<Props> = ({ discountName }) => {
  const priceState = usePriceState();

  if (!priceState) {
    return;
  }

  return (
    <>
      {((priceState.courses.length > 1) || (priceState.courses.length > 0 && (priceState.courses[0].multiCourseDiscount > 0 || priceState.courses[0].free))) && (
        <>
          {priceState.courses.map(course => (
            <Fragment key={course.code}>
              <tr>
                <td className="text-md-end">{course.name}</td>
                <td className="text-end text-nowrap align-bottom">{course.free ? <strong className="text-primary">FREE!</strong> : <>{priceState.currency.symbol}{course.cost.toFixed(2)}</>}</td>
              </tr>
              {!course.free && course.multiCourseDiscount > 0 && (
                <tr>
                  <td className="text-primary text-md-end">{course.discountMessage ? course.discountMessage : <>{Math.round(course.multiCourseDiscount / course.cost * 100)}% Discount</>}</td>
                  <td className="text-primary text-end text-nowrap align-bottom">&minus; {priceState.currency.symbol}{course.multiCourseDiscount.toFixed(2)}</td>
                </tr>
              )}
            </Fragment>
          ))}
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
