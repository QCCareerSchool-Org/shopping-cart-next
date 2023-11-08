import type { FC } from 'react';
import { Fragment } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';
import { formatCurrency } from '@/lib/formatCurrency';
import type { PriceState } from '@/state/price';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const DetailsModal: FC<Props> = props => {
  const priceState = usePriceState();
  const paymentState = usePaymentState();

  if (!priceState) {
    return;
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <ModalHeader closeButton><strong>Detailed Payment Breakdown</strong></ModalHeader>
      <ModalBody>
        {paymentState.plan === 'full' ? <FullBreakdown price={priceState} /> : <PartBreakdown price={priceState} />}
        <p className="mb-0">All prices are in {priceState.currency.name}.</p>
      </ModalBody>
    </Modal>
  );
};

const FullBreakdown: FC<{ price: PriceState }> = ({ price }) => {
  if (!price) {
    return;
  }

  return (
    <div>
      <p>The total cost of your courses is <strong>{price.currency.symbol}{formatCurrency(price.plans.full.total)}</strong>. Your payments are broken down as follows:</p>
      <table className="w-100">
        <tbody>
          <CostRows price={price} plan="full" />
        </tbody>
      </table>
    </div>
  );
};

const PartBreakdown: FC<{ price: PriceState }> = ({ price }) => {
  if (!price) {
    return;
  }

  return (
    <div>
      <p>The total cost of your courses is <strong>{price.currency.symbol}{price.plans.part.total.toFixed(2)}</strong>. Your payments are broken down as follows:</p>
      <table className="w-100">
        <tbody>
          <CostRows price={price} plan="part" />
        </tbody>
      </table>
      <h6>Deposit</h6>
      <p>When you enroll you&apos;ll be charged a deposit of <strong>{price.currency.symbol}{price.plans.part.deposit.toFixed(2)}</strong>:</p>
      <table className="w-100">
        <tbody>
          <DepositRows price={price} plan="part" />
        </tbody>
      </table>
      <h6>Monthly Installments</h6>
      <p>Each month, for <strong>{price.plans.part.installments} months</strong>, your card will automatically be charged as follows:</p>
      <table className="w-100">
        <tbody>
          <InstallmentRows price={price} plan="part" />
        </tbody>
      </table>
    </div>
  );
};

const CostRows: React.FC<{ price: PriceState; plan: 'full' | 'part' }> = ({ price, plan }) => {
  if (!price) {
    return;
  }

  let key = 0;
  return (
    <>
      {price.courses.filter(course => course.primary).map(course => (
        <Fragment key={key++}>
          <tr>
            <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
            <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{(course.free ? 0 : course.cost).toFixed(2)}</td>
          </tr>
          {course.plans[plan].discount > 0 && (
            <tr>
              <td>Payment Plan Discount</td>
              <td className="text-end text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{course.plans[plan].discount.toFixed(2)}</td>
            </tr>
          )}
          {!course.free && course.multiCourseDiscount > 0 && (
            <tr>
              <td>Multi-Course Discount</td>
              <td className="text-end text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{course.multiCourseDiscount.toFixed(2)}</td>
            </tr>
          )}
        </Fragment>
      ))}
      {price.courses.filter(course => !course.primary).map(course => (
        <Fragment key={key++}>
          <tr>
            <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
            <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{(course.free ? 0 : course.cost).toFixed(2)}</td>
          </tr>
          {course.plans[plan].discount > 0 && (
            <tr>
              <td>Payment Plan Discount</td>
              <td className="text-end text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{course.plans[plan].discount.toFixed(2)}</td>
            </tr>
          )}
          {!course.free && course.multiCourseDiscount > 0 && (
            <tr>
              <td>{Math.round(course.multiCourseDiscount / course.cost * 100)}% Off Discount</td>
              <td className="text-end text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{course.multiCourseDiscount.toFixed(2)}</td>
            </tr>
          )}
        </Fragment>
      ))}
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

const DepositRows: FC<{ price: PriceState; plan: 'full' | 'part' }> = ({ price, plan }) => {
  if (!price) {
    return;
  }

  let key = 0;
  return (
    <>
      {price.courses.filter(course => course.primary).map(course => (
        <tr key={key++}>
          <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
          <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{course.plans[plan].deposit.toFixed(2)}</td>
        </tr>
      ))}
      {price.courses.filter(course => !course.primary).map(course => (
        <tr key={key++}>
          <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
          <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{course.plans[plan].deposit.toFixed(2)}</td>
        </tr>
      ))}
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

const InstallmentRows: FC<{ price: PriceState; plan: 'full' | 'part' }> = ({ price, plan }) => {
  if (!price) {
    return;
  }

  let key = 0;
  return (
    <>
      {price.courses.filter(course => course.primary).map(course => (
        <tr key={key++}>
          <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
          <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{course.plans[plan].installmentSize.toFixed(2)}</td>
        </tr>
      ))}
      {price.courses.filter(course => !course.primary).map(course => (
        <tr key={key++}>
          <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
          <td className="text-end text-nowrap align-bottom">{price.currency.symbol}{course.plans[plan].installmentSize.toFixed(2)}</td>
        </tr>
      ))}
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
