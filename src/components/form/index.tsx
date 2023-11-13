'use client';

import type { FC } from 'react';
import { lazy, Suspense, useEffect } from 'react';

import { ConfirmPopup } from './confirmPopup';
import { CourseSelection } from './courseSelection';
import { ErrorModal } from './errorModal';
import { Internal } from './internal';
import { PaysafeModal } from './paysafeModal';
import type { AgreementLinks } from '@/domain/agreementLinks';
import type { CourseGroup } from '@/domain/courseGroup';
import type { School } from '@/domain/school';
import { useAddressState } from '@/hooks/useAddressState';
import { useCoursesState } from '@/hooks/useCoursesState';
import { useEnroll } from '@/hooks/useEnroll';
import { useInitialData } from '@/hooks/useInitialData';
import { useMetaState } from '@/hooks/useMetaState';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';
import { usePriceUpdater } from '@/hooks/usePriceUpdater';
import { useToggle } from '@/hooks/useToggle';
import { getPaysafeCompany } from '@/lib/getPaysafeCompany';
import type { Paysafe } from '@/lib/paysafe';
import type { AddressState } from '@/state/address';
import type { MetaState } from '@/state/meta';
import type { PaymentState } from '@/state/payment';
import type { PriceState } from '@/state/price';

const Address = lazy(async () => import('./address').then(m => ({ default: m.Address })));
const BillingAddress = lazy(async () => import('./billingAddress').then(m => ({ default: m.BillingAddress })));
const Payment = lazy(async () => import('./payment').then(m => ({ default: m.Payment })));
const Overrides = lazy(async () => import('./overrides').then(m => ({ default: m.Overrides })));
const Summary = lazy(async () => import('./summary').then(m => ({ default: m.Summary })));

declare const paysafe: Paysafe | undefined;

export type DynamicCourseDescriptions = 'SHOW' | 'HIDE' | 'REPLACE';

type Props = {
  date: number;
  courseGroups: CourseGroup[];
  showHiddenCourses?: boolean;
  school: School;
  coursesOverride?: string[];
  /** the guarantee component to display in the summary section */
  guarantee: FC | null;
  /** a component to display below the courses title */
  coursesSubtitle?: FC;
  /** where to send the visitor after a sucessfull enrollment */
  successLink: string;
  /** url of enrollment agreement */
  agreementLinks: AgreementLinks;
  /** whether this is an internal shopping cart (allows toggling student status) */
  internal?: boolean;
  /** whether the person enrolling is an existing student or not */
  student?: boolean;
  /** whether to show the promo code input or not */
  showPromoCodeInput?: boolean;
  /** a default promo code */
  promoCodeDefault?: string;
  /** whether to show the dynamic course descriptions */
  dynamicCourseDescriptions?: DynamicCourseDescriptions;
  /** display the visual payment plans */
  visualPaymentPlans?: boolean;
  /** enable the billing address section */
  billingAddress?: boolean;
  /** special name to use for discount */
  discountName?: string;
  /** component to display below the course selection checkboxes */
  dynamicCourseMessages?: FC[];
  confirmation?: {
    /** a function that determines whether we should show a confirmation message before proceeding to payment */
    show: (courses: string[], addressState: AddressState, priceState: PriceState, paymentState: PaymentState, metaState: MetaState) => boolean;
    /** a component for the confirmation message (will appear in a popup) */
    body: FC;
    /** the heading of the confirmation popup */
    heading?: string;
  };
};

const showBillingAddress = (school: School): boolean => {
  return school === 'QC Pet Studies';
};

export const Form: FC<Props> = props => {
  useEffect(() => {
    if (typeof paysafe === 'undefined') {
      if (window.confirm('There was an error loading required resources. Do you want to retry?')) {
        window.location.reload();
      } else {
        throw Error('Paysafe.js is not loaded');
      }
    }
  }, []);

  useInitialData(props.school, !!props.student || !!props.internal, props.coursesOverride);
  usePriceUpdater(props.date, !!props.internal, props.school, props.promoCodeDefault);

  const [ showConfirmationPopup, toggleConfirmationPopup ] = useToggle(false);
  const [ showPaysafeForm, togglePaysafeForm ] = useToggle(false);

  const coursesState = useCoursesState();
  const addressState = useAddressState();
  const priceState = usePriceState();
  const paymentState = usePaymentState();
  const metaState = useMetaState();

  const paysafeCompany = priceState ? getPaysafeCompany(priceState.currency.code) : undefined;

  const [ addToDatabase, handleCharge ] = useEnroll(!!props.internal, props.school, props.successLink, props.promoCodeDefault);

  const handlePaymentFormHide = (): void => {
    togglePaysafeForm();
  };

  const handleSubmit = (): void => {
    if (props.confirmation?.show?.(coursesState.selected, addressState, priceState, paymentState, metaState)) {
      toggleConfirmationPopup();
    } else {
      showPaymentForm();
    }
  };

  const handleConfirmationCancel = (): void => {
    toggleConfirmationPopup();
  };

  const handleConfirmationProceed = (): void => {
    toggleConfirmationPopup();
    showPaymentForm();
  };

  const showPaymentForm = (): void => {
    if (!priceState) {
      return;
    }
    void addToDatabase().then(result => {
      if (result) {
        togglePaysafeForm();
      }
    });
  };

  return (
    <>
      {!!props.internal && <Internal />}
      <CourseSelection
        internal={!!props.internal}
        courseGroups={props.courseGroups}
        showHiddenCourses={props.showHiddenCourses}
        dynamicCourseDescriptions={props.dynamicCourseDescriptions}
        dynamicCourseMessages={props.dynamicCourseMessages}
        discountName={props.discountName}
        coursesSubtitle={props.coursesSubtitle}
        coursesOverride={!!props.coursesOverride}
      />
      <Suspense><Address school={props.school} /></Suspense>
      <Suspense>{showBillingAddress(props.school) && <BillingAddress />}</Suspense>
      <Suspense><Payment date={props.date} school={props.school} showPromoCodeInput={!!props.showPromoCodeInput && !props.promoCodeDefault} visualPaymentPlans={!!props.visualPaymentPlans} /></Suspense>
      <Suspense>{!!props.internal && <Overrides />}</Suspense>
      <Suspense><Summary onSubmit={handleSubmit} agreementLinks={props.agreementLinks} showPromoCodeInput={!!props.showPromoCodeInput} guarantee={props.guarantee} /></Suspense>
      {props.confirmation && <ConfirmPopup show={showConfirmationPopup} onCancel={handleConfirmationCancel} onProceed={handleConfirmationProceed} body={props.confirmation.body} heading={props.confirmation.heading} />}
      {paysafeCompany && <PaysafeModal company={paysafeCompany} show={showPaysafeForm} onHide={handlePaymentFormHide} onCharge={handleCharge} />}
      <ErrorModal />
    </>
  );
};
