import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';
import { useMemo } from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

import { Breakdown } from '../breakdown';
import { getCornerStyle } from './getCornerStyle';
import styles from './index.module.scss';
import { getKit } from './kits';
import { CanadaTaxCredits } from '@/components/canadaTaxCredits';
import type { CourseGroup } from '@/domain/courseGroup';
import type { School } from '@/domain/school';
import { useCoursesState } from '@/hooks/useCoursesState';
import { usePaymentDispatch } from '@/hooks/usePaymentDispatch';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { formatCurrency } from '@/lib/formatCurrency';

interface Props {
  date: number;
  school: School;
  discountName?: string;
  courseGroups: CourseGroup[];
  hideTaxRefund?: boolean;
}

export const Mobile: FC<Props> = ({ date, school, discountName, courseGroups, hideTaxRefund }) => {
  const screenWidth = useScreenWidth();
  const priceState = usePriceState();
  const paymentState = usePaymentState();
  const coursesState = useCoursesState();
  const paymentDispatch = usePaymentDispatch();

  const md = screenWidth >= 768;

  const handleFullClick: MouseEventHandler = e => {
    e.preventDefault();
    paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
  };

  const handlePartClick: MouseEventHandler = e => {
    e.preventDefault();
    paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: 'part' });
  };

  const kit = useMemo(() => getKit(date, coursesState.selected, school), [ coursesState.selected, date, school ]);

  if (md) {
    return null;
  }

  const cornerStyle = getCornerStyle(school);

  return (
    <>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-9 mb-4" style={{ maxWidth: 405, margin: '0 auto' }}>

          <ul className={`nav ${styles.navTabs}`}>
            <li className={styles.navItem}>
              <a className={`${styles.navLink} ${styles.fullNavLink} ${paymentState.plan === 'full' ? styles.active : ''}`} style={{ backgroundColor: kit?.images?.full.backgroundColor, color: kit?.images?.full.color, borderColor: kit?.images?.full.borderColor }} href="#" onClick={handleFullClick}>
                {paymentState.plan === 'full' ? <FaCheckCircle className="text-primary" style={{ position: 'relative', top: -1 }} /> : <FaCircle className={styles.muted} style={{ position: 'relative', top: -1 }} />}<span style={{ marginLeft: 8 }}>Pay in Full</span>
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={`${styles.navLink} ${styles.partNavLink} ${paymentState.plan !== 'full' ? styles.active : ''}`} style={{ backgroundColor: kit?.images?.part.backgroundColor, color: kit?.images?.part.color, borderColor: kit?.images?.part.borderColor }} href="#" onClick={handlePartClick}>
                {paymentState.plan !== 'full' ? <FaCheckCircle className="text-primary" style={{ position: 'relative', top: -1 }} /> : <FaCircle className={styles.muted} style={{ position: 'relative', top: -1 }} />}<span style={{ marginLeft: 8 }}>{screenWidth > 382 ? 'Installment Plan' : 'Installments'}</span>
              </a>
            </li>
          </ul>
          {paymentState.plan === 'full' || typeof priceState?.plans.part === 'undefined'
            ? (
              <div className={`${styles.box} ${styles.fullBox} ${cornerStyle ? styles[cornerStyle] : ''} ${styles.roundedBottom}`} style={{ backgroundColor: kit?.images?.full.backgroundColor, color: kit?.images?.full.color, borderColor: kit?.images?.full.borderColor }}>
                <div className={styles.sidePadding}>
                  <h3 className={styles.boxTitle}>Pay in Full</h3>
                  <ul className={`${styles.planList} mb-0`}>
                    {priceState && priceState.plans.full.discount > 0 && <li><strong>Save {priceState.currency.symbol}{formatCurrency(priceState.plans.full.discount)}</strong></li>}
                    {kit?.fullBullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
                {kit?.images?.full.src && (
                  <div className="mt-3">
                    <Image src={kit.images.full.src} style={{ width: '100%', height: 'auto' }} alt="kit" />
                  </div>
                )}
              </div>
            )
            : (
              <div className={`${styles.box} ${styles.partBox} ${styles.roundedBottom}`} style={{ backgroundColor: kit?.images?.part.backgroundColor, color: kit?.images?.part.color, borderColor: kit?.images?.part.borderColor }}>
                <div className={styles.sidePadding}>
                  <h3 className={styles.boxTitle}>Installment Plan</h3>
                  <ul className={`${styles.planList} mb-0`}>
                    {priceState && priceState.plans.full.discount > 0 && <li><strong>Start for {priceState.currency.symbol}{formatCurrency(priceState.plans.part.deposit)}</strong></li>}
                    {kit?.partBullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
                {kit?.images?.part.src && (
                  <div className="mt-3">
                    <Image src={kit.images.part.src} style={{ width: '100%', height: 'auto' }} alt="kit" />
                  </div>
                )}
              </div>
            )
          }
          {kit?.details && (
            <div className="mt-2">
              {kit.details}
            </div>
          )}
        </div>
        <div className="col-12 col-sm-10">
          <Breakdown discountName={discountName} courseGroups={courseGroups} />
          {priceState && priceState.courses.length > 0 && !hideTaxRefund && priceState?.countryCode === 'CA' && (
            <div>
              <Card className="mt-4 text-center" style={{ marginLeft: 'auto' }}>
                <CardBody>
                  <CanadaTaxCredits />
                </CardBody>
              </Card>
            </div>
          )}
        </div>
      </div>

    </>
  );
};
