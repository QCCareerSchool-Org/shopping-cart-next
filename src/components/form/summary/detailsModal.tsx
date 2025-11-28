import type { FC } from 'react';
import { Fragment } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

import type { CourseGroup } from '@/domain/courseGroup';
import { getCourse } from '@/domain/courseGroup';
import { useAddressState } from '@/hooks/useAddressState';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';
import { formatCurrency } from '@/lib/formatCurrency';
import type { PriceState } from '@/state/price';

type Props = {
  show: boolean;
  onHide: () => void;
  courseGroups: CourseGroup[];
};

export const DetailsModal: FC<Props> = props => {
  const priceState = usePriceState();
  const paymentState = usePaymentState();
  const { countryCode, provinceCode } = useAddressState();

  if (!priceState) {
    return;
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <ModalHeader closeButton><strong>Detailed Payment Breakdown</strong></ModalHeader>
      <ModalBody>
        {paymentState.plan === 'full'
          ? <FullBreakdown price={priceState} countryCode={countryCode} provinceCode={provinceCode} courseGroups={props.courseGroups} />
          : <PartBreakdown price={priceState} countryCode={countryCode} provinceCode={provinceCode} courseGroups={props.courseGroups} />
        }
        <p className="mb-0">All prices are in {priceState.currency.name}.</p>
      </ModalBody>
    </Modal>
  );
};

type OuterProps = {
  price: PriceState;
  countryCode: string;
  provinceCode: string | null;
  courseGroups: CourseGroup[];
};

const FullBreakdown: FC<OuterProps> = ({ price, countryCode, provinceCode, courseGroups }) => {
  if (!price) {
    return;
  }

  return (
    <div>
      <p>The total cost of your courses is <strong>{price.currency.symbol}{formatCurrency(price.plans.full.total)}</strong>. Your payments are broken down as follows:</p>
      <table className="w-100">
        <tbody>
          <CostRows price={price} plan="full" countryCode={countryCode} provinceCode={provinceCode} courseGroups={courseGroups} />
        </tbody>
      </table>
    </div>
  );
};

const PartBreakdown: FC<OuterProps> = ({ price, countryCode, provinceCode, courseGroups }) => {
  if (!price) {
    return;
  }

  if (!price.plans.part) {
    return;
  }

  return (
    <div>
      <p>The total cost of your courses is <strong>{price.currency.symbol}{price.plans.part.total.toFixed(2)}</strong>. Your payments are broken down as follows:</p>
      <table className="w-100">
        <tbody>
          <CostRows price={price} plan="part" countryCode={countryCode} provinceCode={provinceCode} courseGroups={courseGroups} />
        </tbody>
      </table>
      <h6>Deposit</h6>
      <p>When you enroll you'll be charged a deposit of <strong>{price.currency.symbol}{price.plans.part.deposit.toFixed(2)}</strong>:</p>
      <table className="w-100">
        <tbody>
          <DepositRows price={price} plan="part" countryCode={countryCode} provinceCode={provinceCode} courseGroups={courseGroups} />
        </tbody>
      </table>
      <h6>Monthly Installments</h6>
      <p>Each month, for <strong>{price.plans.part.installments} months</strong>, your card will automatically be charged as follows:</p>
      <table className="w-100">
        <tbody>
          <InstallmentRows price={price} plan="part" countryCode={countryCode} provinceCode={provinceCode} courseGroups={courseGroups} />
        </tbody>
      </table>
    </div>
  );
};

type InnerProps = {
  price: PriceState;
  plan: 'full' | 'part';
  countryCode: string;
  provinceCode: string | null;
  courseGroups: CourseGroup[];
};

const CostRows: React.FC<InnerProps> = ({ price, plan, countryCode, provinceCode, courseGroups }) => {
  if (!price) {
    return;
  }

  if (!price.plans[plan]) {
    return;
  }

  let key = 0;
  return (
    <>
      {price.courses.filter(coursePrice => coursePrice.primary).map(coursePrice => {
        if (!coursePrice.plans[plan]) {
          return null;
        }
        const course = getCourse(coursePrice.code, courseGroups);
        if (!course) {
          return null;
        }
        const name = typeof course.name === 'string' ? course.name : course.name({ countryCode, provinceCode });
        return (
          <Fragment key={key++}>
            <tr>
              <td>{name}{coursePrice.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
              <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{(coursePrice.free ? 0 : coursePrice.cost).toFixed(2)}</td>
            </tr>
            {coursePrice.plans[plan].discount > 0 && (
              <tr>
                <td>Payment Plan Discount</td>
                <td className="text-end text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{coursePrice.plans[plan].discount.toFixed(2)}</td>
              </tr>
            )}
            {!coursePrice.free && coursePrice.multiCourseDiscount > 0 && (
              <tr>
                <td>Multi-Course Discount</td>
                <td className="text-end text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{coursePrice.multiCourseDiscount.toFixed(2)}</td>
              </tr>
            )}
          </Fragment>
        );
      })}
      {price.courses.filter(coursePrice => !coursePrice.primary).map(coursePrice => {
        if (!coursePrice.plans[plan]) {
          return null;
        }
        const course = getCourse(coursePrice.code, courseGroups);
        if (!course) {
          return null;
        }
        const name = typeof course.name === 'string' ? course.name : course.name({ countryCode, provinceCode });
        return (
          <Fragment key={key++}>
            <tr>
              <td>{name}{coursePrice.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
              <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{(coursePrice.free ? 0 : coursePrice.cost).toFixed(2)}</td>
            </tr>
            {coursePrice.plans[plan].discount > 0 && (
              <tr>
                <td>Payment Plan Discount</td>
                <td className="text-end text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{coursePrice.plans[plan].discount.toFixed(2)}</td>
              </tr>
            )}
            {!coursePrice.free && coursePrice.multiCourseDiscount > 0 && (
              <tr>
                <td>{Math.round(coursePrice.multiCourseDiscount / coursePrice.cost * 100)}% Off Discount</td>
                <td className="text-end text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{coursePrice.multiCourseDiscount.toFixed(2)}</td>
              </tr>
            )}
          </Fragment>
        );
      })}
      {price.promoDiscount > 0 && (
        <tr>
          <td>Promo Discount</td>
          <td className="text-end text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{price.promoDiscount.toFixed(2)}</td>
        </tr>
      )}
      {price.shippingDiscount > 0 && (
        <tr>
          <td>{price.noShipping === 'REQUIRED' ? 'No-Shipping' : 'Green'} Discount</td>
          <td className="text-end text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{price.shippingDiscount.toFixed(2)}</td>
        </tr>
      )}
      <tr>
        <td />
        <td><hr className="my-1" /></td>
      </tr>
      <tr>
        <td />
        <td className="text-end text-nowrap align-bottom"><strong>{price.currency.symbol}{price.plans[plan].total.toFixed(2)}</strong></td>
      </tr>
    </>
  );
};

const DepositRows: FC<InnerProps> = ({ price, plan, countryCode, provinceCode, courseGroups }) => {
  if (!price) {
    return;
  }

  if (!price.plans[plan]) {
    return null;
  }

  let key = 0;
  return (
    <>
      {price.courses.filter(coursePrice => coursePrice.primary).map(coursePrice => {
        if (!coursePrice.plans[plan]) {
          return null;
        }
        const course = getCourse(coursePrice.code, courseGroups);
        if (!course) {
          return null;
        }
        const name = typeof course.name === 'string' ? course.name : course.name({ countryCode, provinceCode });
        return (
          <tr key={key++}>
            <td>{name}{coursePrice.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
            <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{coursePrice.plans[plan].deposit.toFixed(2)}</td>
          </tr>
        );
      })}
      {price.courses.filter(coursePrice => !coursePrice.primary).map(coursePrice => {
        if (!coursePrice.plans[plan]) {
          return null;
        }
        const course = getCourse(coursePrice.code, courseGroups);
        if (!course) {
          return null;
        }
        const name = typeof course.name === 'string' ? course.name : course.name({ countryCode, provinceCode });
        return (
          <tr key={key++}>
            <td>{name}{coursePrice.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
            <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{coursePrice.plans[plan].deposit.toFixed(2)}</td>
          </tr>
        );
      })}
      <tr>
        <td />
        <td><hr className="my-1" /></td>
      </tr>
      <tr>
        <td />
        <td className="text-end text-nowrap align-bottom"><strong>{price.currency.symbol}{price.plans[plan].deposit.toFixed(2)}</strong></td>
      </tr>
    </>
  );
};

const InstallmentRows: FC<InnerProps> = ({ price, plan, countryCode, provinceCode, courseGroups }) => {
  if (!price) {
    return;
  }

  if (!price.plans[plan]) {
    return null;
  }

  let key = 0;
  return (
    <>
      {price.courses.filter(coursePrice => coursePrice.primary).map(coursePrice => {
        if (!coursePrice.plans[plan]) {
          return null;
        }
        const course = getCourse(coursePrice.code, courseGroups);
        if (!course) {
          return null;
        }
        const name = typeof course.name === 'string' ? course.name : course.name({ countryCode, provinceCode });
        return (
          <tr key={key++}>
            <td>{name}{coursePrice.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
            <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{coursePrice.plans[plan].installmentSize.toFixed(2)}</td>
          </tr>
        );
      })}
      {price.courses.filter(coursePrice => !coursePrice.primary).map(coursePrice => {
        if (!coursePrice.plans[plan]) {
          return null;
        }
        const course = getCourse(coursePrice.code, courseGroups);
        if (!course) {
          return null;
        }
        const name = typeof course.name === 'string' ? course.name : course.name({ countryCode, provinceCode });
        return (
          <tr key={key++}>
            <td>{name}{coursePrice.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
            <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{coursePrice.plans[plan].installmentSize.toFixed(2)}</td>
          </tr>
        );
      })}
      <tr>
        <td />
        <td><hr className="my-1" /></td>
      </tr>
      <tr>
        <td />
        <td className="text-end text-nowrap align-bottom"><strong>{price.currency.symbol}{price.plans[plan].installmentSize.toFixed(2)}</strong></td>
      </tr>
    </>
  );
};
