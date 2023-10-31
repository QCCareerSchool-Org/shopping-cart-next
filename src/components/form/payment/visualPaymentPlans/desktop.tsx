import Image from 'next/image';
import type { CSSProperties, FC, MouseEventHandler } from 'react';
import { useMemo } from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

import { Breakdown } from '../breakdown';
import { CanadaTaxCredits } from '../canadaTaxCredits';
import { Checkmark } from './checkmark';
import styles from './index.module.css';
import { getCourseKits, getSchoolKits } from './kits';
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
};

export const Desktop: FC<Props> = ({ date, school }) => {
  const screenWidth = useScreenWidth();
  const priceState = usePriceState();
  const paymentState = usePaymentState();
  const coursesState = useCoursesState();
  const paymentDispatch = usePaymentDispatch();

  const sm = screenWidth >= 576;
  const md = screenWidth >= 768;
  const lg = screenWidth >= 992;
  const xl = screenWidth >= 1200;

  const screenSize = xl ? 'xl' : lg ? 'lg' : md ? 'md' : sm ? 'sm' : 'xs' as const;

  const handleFullClick: MouseEventHandler = () => {
    paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
  };

  const handlePartClick: MouseEventHandler = () => {
    paymentDispatch({ type: 'SET_PAYMENT_PLAN', payload: 'part' });
  };

  const schoolKit = getSchoolKits(date)[school];

  const courseKit = useMemo(() => {
    for (const c of getCourseKits(date)) {
      if (Array.isArray(c.courseCode) && c.courseCode.some(f => coursesState.selected.includes(f))) {
        return c;
      }
      if (typeof c.courseCode === 'string' && coursesState.selected.includes(c.courseCode)) {
        return c;
      }
    }
    return false;
  }, [ coursesState.selected, date ]);

  if (!md) {
    return null;
  }

  const cornerStyle = getCornerStyle(school);

  const fullStyle: CSSProperties = {
    cursor: 'pointer',
    backgroundColor: schoolKit?.images?.full.backgroundColor ?? (courseKit !== false ? courseKit.images?.full.backgroundColor : undefined),
    color: schoolKit?.images?.full.color ?? (courseKit !== false ? courseKit.images?.full.color : undefined),
    borderColor: schoolKit?.images?.full.borderColor ?? (courseKit !== false ? courseKit.images?.full.borderColor : undefined),
  };

  const partStyle: CSSProperties = {
    cursor: 'pointer',
    backgroundColor: schoolKit?.images?.part.backgroundColor ?? (courseKit !== false ? courseKit.images?.part.backgroundColor : undefined),
    color: schoolKit?.images?.part.color ?? (courseKit !== false ? courseKit.images?.part.color : undefined),
    borderColor: schoolKit?.images?.part.borderColor ?? (courseKit !== false ? courseKit.images?.part.borderColor : undefined),
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <div className="row mb-4 mb-lg-0">
          <div className={`${styles.fullColumn} col-6`}>
            <div onClick={handleFullClick} className={`${styles.box} ${styles.fullBox} ${cornerStyle} ${styles.rounded} ${paymentState.plan === 'full' ? styles.selected : styles.faded}`} style={fullStyle}>
              <div className={styles.sidePadding}>
                <h3 className={styles.boxTitle}>Pay in Full{paymentState.plan === 'full' && <> <Checkmark /></>}</h3>
                <ul className={styles.planList}>
                  {priceState && priceState.plans.full.discount > 0 && <li><strong>Save {priceState.currency.symbol}{formatCurrency(priceState.plans.full.discount)}</strong></li>}
                  {courseKit !== false && courseKit.fullBullets.map((b, i) => <li key={i}>{b}</li>)}
                  {schoolKit?.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              {courseKit !== false && courseKit.images
                ? (
                  <>
                    <div style={{ height: courseKit.images.height[screenSize], position: 'relative' }}>
                      {courseKit.images.full.src
                        ? <Image src={courseKit.images.full.src} style={{ width: '100%', height: 'auto' }} alt="kit" />
                        : <></>
                      }
                      {!courseKit.images.buttonBelow && (
                        <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: courseKit.images.buttonOffset[screenSize], width: '100%' }}>
                          <button onClick={handleFullClick} className={`btn ${courseKit.images.full.buttonVariant ? `btn-${courseKit.images.full.buttonVariant}` : 'btn-primary'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: paymentState.plan === 'full' ? 'none' : 'auto' }}>
                            {paymentState.plan === 'full' ? <><FaCheckCircle />&nbsp;Selected</> : 'Select Plan'}
                          </button>
                        </div>
                      )}
                    </div>
                    {!!courseKit.images.buttonBelow && (
                      <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '0.5rem' }}>
                        <button onClick={handleFullClick} className={`btn ${courseKit.images.full.buttonVariant ? `btn-${courseKit.images.full.buttonVariant}` : 'btn-primary'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: paymentState.plan === 'full' ? 'none' : 'auto' }}>
                          {paymentState.plan === 'full' ? <><FaCheckCircle />&nbsp;Selected</> : 'Select Plan'}
                        </button>
                      </div>
                    )}
                  </>
                )
                : schoolKit?.images
                  ? (
                    <>
                      <div style={{ height: schoolKit.images.height[screenSize], position: 'relative' }}>
                        {schoolKit.images.full.src
                          ? <Image src={schoolKit.images.full.src} style={{ width: '100%', height: 'auto' }} alt="kit" />
                          : <></>
                        }
                        {!schoolKit.images.buttonBelow && (
                          <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: schoolKit.images.buttonOffset[screenSize], width: '100%' }}>
                            <button onClick={handleFullClick} className={`btn ${schoolKit.images.full.buttonVariant ? `btn-${schoolKit.images.full.buttonVariant}` : 'btn-primary'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: paymentState.plan === 'full' ? 'none' : 'auto' }}>
                              {paymentState.plan === 'full' ? <><FaCheckCircle />&nbsp;Selected</> : 'Select Plan'}
                            </button>
                          </div>
                        )}
                      </div>
                      {!!schoolKit.images.buttonBelow && (
                        <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '0.5rem' }}>
                          <button onClick={handleFullClick} className={`btn ${schoolKit.images.full.buttonVariant ? `btn-${schoolKit.images.full.buttonVariant}` : 'btn-primary'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: paymentState.plan === 'full' ? 'none' : 'auto' }}>
                            {paymentState.plan === 'full' ? <><FaCheckCircle />&nbsp;Selected</> : 'Select Plan'}
                          </button>
                        </div>
                      )}
                    </>
                  )
                  : (
                    <div className="d-flex justify-content-center">
                      <button onClick={handleFullClick} className={`btn btn-primary ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: paymentState.plan === 'full' ? 'none' : 'auto' }}>
                        {paymentState.plan === 'full' ? <><FaCheckCircle />&nbsp;Selected</> : 'Select Plan'}
                      </button>
                    </div>
                  )
              }
            </div>
          </div>
          <div className={`${styles.partColumn} col-6`}>
            <div onClick={handlePartClick} className={`${styles.box} ${styles.partBox} ${styles.rounded} ${paymentState.plan !== 'full' ? styles.selected : styles.faded}`} style={partStyle}>
              <div className={styles.sidePadding}>
                <h3 className={styles.boxTitle}>Installment Plan{paymentState.plan === 'part' && <> <Checkmark /></>}</h3>
                <ul className={styles.planList}>
                  {priceState && priceState.plans.full.discount > 0 && <li><strong>Start for {priceState.currency.symbol}{formatCurrency(priceState.plans.part.deposit)}</strong></li>}
                  {courseKit !== false && courseKit.partBullets.map((b, i) => <li key={i}>{b}</li>)}
                  {schoolKit?.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              {courseKit !== false && courseKit.images
                ? (
                  <>
                    <div style={{ height: courseKit.images.height[screenSize], position: 'relative' }}>
                      {courseKit.images.part.src
                        ? <Image src={courseKit.images.part.src} style={{ width: '100%', height: 'auto' }} alt="kit" />
                        : <></>
                      }
                      {!courseKit.images.buttonBelow && (
                        <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: courseKit.images.buttonOffset[screenSize], width: '100%' }}>
                          <button onClick={handlePartClick} className={`btn ${courseKit.images.part.buttonVariant ? `btn-${courseKit.images.part.buttonVariant}` : 'btn-dark-grey'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: paymentState.plan === 'full' ? 'none' : 'auto' }}>
                            {paymentState.plan !== 'full' ? <><FaCheckCircle />&nbsp;Selected</> : 'Select Plan'}
                          </button>
                        </div>
                      )}
                    </div>
                    {!!courseKit.images.buttonBelow && (
                      <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '0.5rem' }}>
                        <button onClick={handlePartClick} className={`btn ${courseKit.images.part.buttonVariant ? `btn-${courseKit.images.part.buttonVariant}` : 'btn-dark-grey'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: paymentState.plan === 'full' ? 'none' : 'auto' }}>
                          {paymentState.plan !== 'full' ? <><FaCheckCircle />&nbsp;Selected</> : 'Select Plan'}
                        </button>
                      </div>
                    )}
                  </>
                )
                : schoolKit?.images
                  ? (
                    <>
                      <div style={{ height: schoolKit.images.height[screenSize], position: 'relative' }}>
                        {schoolKit.images.part.src
                          ? <Image src={schoolKit.images.part.src} style={{ width: '100%', height: 'auto' }} alt="kit" />
                          : <></>
                        }
                        {!schoolKit.images.buttonBelow && (
                          <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: schoolKit.images.buttonOffset[screenSize], width: '100%' }}>
                            <button onClick={handlePartClick} className={`btn ${schoolKit.images.part.buttonVariant ? `btn-${schoolKit.images.part.buttonVariant}` : 'btn-dark-grey'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: paymentState.plan === 'full' ? 'none' : 'auto' }}>
                              {paymentState.plan !== 'full' ? <><FaCheckCircle />&nbsp;Selected</> : 'Select Plan'}
                            </button>
                          </div>
                        )}
                      </div>
                      {!!schoolKit.images.buttonBelow && (
                        <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '0.5rem' }}>
                          <button onClick={handlePartClick} className={`btn ${schoolKit.images.part.buttonVariant ? `btn-${schoolKit.images.part.buttonVariant}` : 'btn-dark-grey'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: paymentState.plan === 'full' ? 'none' : 'auto' }}>
                            {paymentState.plan !== 'full' ? <><FaCheckCircle />&nbsp;Selected</> : 'Select Plan'}
                          </button>
                        </div>
                      )}
                    </>
                  )
                  : (
                    <div className="d-flex justify-content-center">
                      <button onClick={handlePartClick} className={`btn btn-dark-grey ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: paymentState.plan === 'full' ? 'none' : 'auto' }}>
                        {paymentState.plan !== 'full' ? <><FaCheckCircle />&nbsp;Selected</> : 'Select Plan'}
                      </button>
                    </div>
                  )
              }
            </div>
          </div>
          {courseKit !== false && courseKit.details && (
            <div className="col-12 mt-2">
              {courseKit.details}
            </div>
          )}
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <Breakdown />
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

const getCornerStyle = (school: School): string | undefined => {
  switch (school) {
    case 'QC Makeup Academy':
      return styles.makeupCorner;
    case 'QC Design School':
      return styles.designCorner;
    case 'QC Event School':
      return styles.eventCorner;
    case 'QC Pet Studies':
      return styles.petCorner;
    case 'QC Wellness Studies':
      return styles.wellnessCorner;
    case 'Winghill Writing School':
      return styles.writingCorner;
  }
};
