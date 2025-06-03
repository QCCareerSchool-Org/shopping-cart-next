import Image from 'next/image';
import type { CSSProperties, FC } from 'react';
import { useMemo } from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

import { Breakdown } from '../breakdown';
import { Checkmark } from './checkmark';
import { getCornerStyle } from './getCornerStyle';
import styles from './index.module.scss';
import type { KitImage } from './kits';
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

type Props = {
  date: number;
  school: School;
  discountName?: string;
  courseGroups: CourseGroup[];
};

const checkCircleStyle: CSSProperties = { position: 'relative', top: -1 };

export const Desktop: FC<Props> = ({ date, school, discountName, courseGroups }) => {
  const screenWidth = useScreenWidth();
  const priceState = usePriceState();
  const paymentState = usePaymentState();
  const coursesState = useCoursesState();
  const paymentDispatch = usePaymentDispatch();

  const sm = screenWidth >= 576;
  const md = screenWidth >= 768;
  const lg = screenWidth >= 992;
  const xl = screenWidth >= 1200;
  const xxl = screenWidth >= 1400;

  const screenSize = xxl ? 'xxl' : xl ? 'xl' : lg ? 'lg' : md ? 'md' : sm ? 'sm' : 'xs' as const;

  const handleFullClick = (): void => {
    paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
  };

  const handlePartClick = (): void => {
    paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: 'part' });
  };

  const kit = useMemo(() => getKit(date, coursesState.selected, school), [ coursesState.selected, date, school ]);

  if (!md) {
    return null;
  }

  const cornerStyle = getCornerStyle(school);

  const fullStyle: CSSProperties = {
    cursor: 'pointer',
    backgroundColor: kit?.images?.full.backgroundColor,
    color: kit?.images?.full.color,
    borderColor: kit?.images?.full.borderColor,
  };

  const partStyle: CSSProperties = {
    cursor: 'pointer',
    backgroundColor: kit?.images?.part.backgroundColor,
    color: kit?.images?.part.color,
    borderColor: kit?.images?.part.borderColor,
  };

  return (
    <div className="row justify-content-center">

      {/* payment option selection column */}
      <div className="col-12 col-lg-8">
        <div className="row mb-4 mb-lg-0">

          {/* full-payment-option column */}
          <div className={`${styles.fullColumn} col-6`}>
            <div onClick={handleFullClick} className={`${styles.box} ${styles.fullBox} ${cornerStyle ? styles[cornerStyle] : ''} ${styles.rounded} ${paymentState.plan === 'full' ? styles.selected : styles.faded}`} style={fullStyle}>
              <div className={styles.sidePadding}>
                <h3 className={styles.boxTitle}>Pay in Full{paymentState.plan === 'full' && <> <Checkmark /></>}</h3>
                <ul className={styles.planList}>
                  {priceState && priceState.plans.full.discount > 0 && <li><strong>Save {priceState.currency.symbol}{formatCurrency(priceState.plans.full.discount)}</strong></li>}
                  {kit?.fullBullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              {kit?.images
                ? (
                  <>
                    <div style={{ height: kit.images.height[screenSize], position: 'relative' }}>
                      {kit.images.full.src && <Image src={kit.images.full.src} style={{ width: '100%', height: 'auto' }} alt="kit" />}
                      {!kit.images.buttonBelow && (
                        <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: kit.images.buttonOffset[screenSize], width: '100%' }}>
                          <Btn onClick={handleFullClick} active={paymentState.plan === 'full'} variant={kit.images.full.buttonVariant ?? 'primary'} />
                        </div>
                      )}
                    </div>
                    {!!kit.images.buttonBelow && (
                      <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '0.5rem' }}>
                        <Btn onClick={handleFullClick} active={paymentState.plan === 'full'} variant={kit.images.full.buttonVariant ?? 'primary'} />
                      </div>
                    )}
                  </>
                )
                : (
                  <div className="d-flex justify-content-center">
                    <Btn onClick={handleFullClick} active={paymentState.plan === 'full'} variant="primary" />
                  </div>
                )
              }
            </div>
          </div>

          {/* installment-option column */}
          <div className={`${styles.partColumn} col-6`}>
            <div onClick={handlePartClick} className={`${styles.box} ${styles.partBox} ${styles.rounded} ${paymentState.plan !== 'full' ? styles.selected : styles.faded}`} style={partStyle}>
              <div className={styles.sidePadding}>
                <h3 className={styles.boxTitle}>Installment Plan{paymentState.plan === 'part' && <> <Checkmark /></>}</h3>
                <ul className={styles.planList}>
                  {priceState && priceState.plans.full.discount > 0 && <li><strong>Start for {priceState.currency.symbol}{formatCurrency(priceState.plans.part.deposit)}</strong></li>}
                  {kit?.partBullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              {kit?.images
                ? (
                  <>
                    <div style={{ height: kit.images.height[screenSize], position: 'relative' }}>
                      {kit.images.part.src && <Image src={kit.images.part.src} style={{ width: '100%', height: 'auto' }} alt="kit" />}
                      {!kit.images.buttonBelow && (
                        <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: kit.images.buttonOffset[screenSize], width: '100%' }}>
                          <Btn onClick={handlePartClick} active={paymentState.plan !== 'full'} variant={kit.images.part.buttonVariant ?? 'dark-grey'} />
                        </div>
                      )}
                    </div>
                    {!!kit.images.buttonBelow && (
                      <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '0.5rem' }}>
                        <Btn onClick={handlePartClick} active={paymentState.plan !== 'full'} variant={kit.images.part.buttonVariant ?? 'dark-grey'} />
                      </div>
                    )}
                  </>
                )
                : (
                  <div className="d-flex justify-content-center">
                    <Btn onClick={handlePartClick} active={paymentState.plan !== 'full'} variant="dark-grey" />
                  </div>
                )
              }
            </div>
          </div>

          {/* extra details */}
          {kit?.details && (
            <div className="col-12 mt-2">
              {kit.details}
            </div>
          )}

        </div>
      </div>

      {/* result column */}
      <div className="col-12 col-md-6 col-lg-4">
        <Breakdown discountName={discountName} courseGroups={courseGroups} />
        {priceState && priceState.courses.length > 0 && priceState.countryCode === 'CA' && (
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
  );
};

type BtnProps = {
  active: boolean;
  onClick: () => void;
  variant: KitImage['buttonVariant'];
};

const Btn: FC<BtnProps> = props => (
  <button onClick={props.onClick} className={`btn btn-${props.variant} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: props.active ? 'none' : 'auto' }}>
    {props.active ? <><FaCheckCircle style={checkCircleStyle} />&nbsp;Selected</> : 'Select Plan'}
  </button>
);
