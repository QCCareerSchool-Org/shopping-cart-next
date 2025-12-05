'use client';

import type { FC } from 'react';
import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

import { Address } from './address';
import { CourseSelection } from './courseSelection';
import { ErrorModal } from './errorModal';
import { Payment } from './payment';
import { ScrollIndicator } from './scrollIndicator';
import { Summary } from './summary';
import { FormStyleVariantProvider, type FormStyleVariant } from './formStyleContext';
import type { AgreementLinks } from '@/domain/agreementLinks';
import type { CourseGroup } from '@/domain/courseGroup';
import { type School, type SchoolVariant, validVariant } from '@/domain/school';
import { useAddressState } from '@/hooks/useAddressState';
import { useCoursesState } from '@/hooks/useCoursesState';
import { useEnroll } from '@/hooks/useEnroll';
import { useInitialData } from '@/hooks/useInitialData';
import { useMetaDispatch } from '@/hooks/useMetaDispatch';
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

const Internal = lazy(async () => import('./internal').then(m => ({ default: m.Internal })));
const Overrides = lazy(async () => import('./overrides').then(m => ({ default: m.Overrides })));
const BillingAddress = lazy(async () => import('./billingAddress').then(m => ({ default: m.BillingAddress })));
const ConfirmPopup = lazy(async () => import('./confirmPopup').then(m => ({ default: m.ConfirmPopup })));
const PaysafeModal = lazy(async () => import('./paysafeModal').then(m => ({ default: m.PaysafeModal })));

declare const paysafe: Paysafe | undefined;

export type DynamicCourseDescriptions = 'SHOW' | 'HIDE' | 'REPLACE';

type Props = {
  date: number;
  courseGroups: CourseGroup[];
  showHiddenCourses?: boolean;
  school: School;
  schoolVariant?: SchoolVariant;
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
  /** the default setting for "same as student address" */
  billingAddressDefault?: 'same' | 'different';
  hideCourseTable?: boolean;
  hideCourseSelection?: boolean;
  fieldStyleVariant?: FormStyleVariant;
};

const showBillingAddress = (school: School, billingAddressDefault?: 'same' | 'different'): boolean => {
  return typeof billingAddressDefault !== 'undefined' || school === 'QC Pet Studies';
};

export const Form: FC<Props> = props => {
  const fieldStyleVariant = props.fieldStyleVariant ?? 'default';
  useEffect(() => {
    if (typeof paysafe === 'undefined') {
      if (window.confirm('There was an error loading required resources. Do you want to retry?')) {
        window.location.reload();
      } else {
        throw Error('Paysafe.js is not loaded');
      }
    }
  }, []);

  useInitialData(props.school, props.schoolVariant, !!props.student, props.courseGroups, props.coursesOverride, props.billingAddressDefault);
  usePriceUpdater(props.date, !!props.internal, props.school, props.schoolVariant, props.promoCodeDefault, props.coursesOverride);

  const [ showConfirmationPopup, toggleConfirmationPopup ] = useToggle(false);
  const [ showPaysafeForm, togglePaysafeForm ] = useToggle(false);
  const [ refreshCaptcha, setRefreshCaptcha ] = useState(false);

  const coursesState = useCoursesState();
  const addressState = useAddressState();
  const priceState = usePriceState();
  const paymentState = usePaymentState();
  const metaState = useMetaState();
  const metaDispatch = useMetaDispatch();

  const paysafeCompany = priceState ? getPaysafeCompany(priceState.currency.code) : undefined;

  const [ addToDatabase, handleCharge ] = useEnroll(!!props.internal, props.school, props.schoolVariant, props.successLink, props.promoCodeDefault);

  if (!validVariant(props.school, props.schoolVariant)) {
    throw Error('Invalid variant');
  }

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
      setRefreshCaptcha(r => !r);
      if (result) {
        togglePaysafeForm();
      }
    });
  };

  const handleRecaptchaVerify = useCallback((token: string): void => {
    metaDispatch({ type: 'SET_CAPTCHA_TOKEN', payload: token });
  }, [ metaDispatch ]);

  useEffect(() => {
    // refresh the token periodically because it only lasts for two minutes
    const id = setInterval(() => {
      setRefreshCaptcha(r => !r);
    }, 105_000); // 1.75 minutes

    return () => clearInterval(id);
  });

  const [ paymentButtonVisible, setPaymentButtonVisible ] = useState(false);
  const handleButtonVisiblityChange = setPaymentButtonVisible;

  return (
    <FormStyleVariantProvider value={fieldStyleVariant}>
      <div data-form-variant={fieldStyleVariant}>
      <GoogleReCaptcha onVerify={handleRecaptchaVerify} refreshReCaptcha={refreshCaptcha} />
      <Suspense>{!!props.internal && <Internal school={props.school} />}</Suspense>
      <CourseSelection
        internal={!!props.internal}
        courseGroups={props.courseGroups}
        showHiddenCourses={props.showHiddenCourses}
        dynamicCourseDescriptions={props.dynamicCourseDescriptions}
        dynamicCourseMessages={props.dynamicCourseMessages}
        discountName={props.discountName}
        coursesSubtitle={props.coursesSubtitle}
        coursesOverride={!!props.coursesOverride}
        hideCourseTable={!!props.hideCourseTable}
        hide={props.hideCourseSelection}
      />
      <Address school={props.school} schoolVariant={props.schoolVariant} />
      <Suspense>{showBillingAddress(props.school, props.billingAddressDefault) && <BillingAddress />}</Suspense>
      <Payment date={props.date} school={props.school} showPromoCodeInput={!!props.showPromoCodeInput && !props.promoCodeDefault} visualPaymentPlans={!!props.visualPaymentPlans} discountName={props.discountName} courseGroups={props.courseGroups} />
      <Suspense>{!!props.internal && <Overrides />}</Suspense>
      <Summary onSubmit={handleSubmit} agreementLinks={props.agreementLinks} showPromoCodeInput={!!props.showPromoCodeInput} guarantee={props.guarantee} courseGroups={props.courseGroups} onButtonVisibilityChange={handleButtonVisiblityChange} />
      <Suspense>{props.confirmation && <ConfirmPopup show={showConfirmationPopup} onCancel={handleConfirmationCancel} onProceed={handleConfirmationProceed} body={props.confirmation.body} heading={props.confirmation.heading} />}</Suspense>
      <Suspense>{paysafeCompany && <PaysafeModal company={paysafeCompany} show={showPaysafeForm} onHide={handlePaymentFormHide} onCharge={handleCharge} />}</Suspense>
      <ScrollIndicator scrolledFarEnough={paymentButtonVisible} />
      <ErrorModal />
      </div>
    </FormStyleVariantProvider>
  );
};
