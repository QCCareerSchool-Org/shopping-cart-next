'use client';

import type { FC } from 'react';
import { lazy, Suspense } from 'react';

// import { Address } from './address';
// import { BillingAddress } from './billingAddress';
// import { CourseSelection } from './courseSelection';
// import { Payment } from './payment';
// import { Overrides } from './overrides';
import type { AgreementLinks } from '@/domain/agreementLinks';
import type { CourseGroup } from '@/domain/courseGroup';
import type { School } from '@/domain/school';
import { usePriceUpdater } from '@/hooks/usePriceUpdater';
import { useQueryStringData } from '@/hooks/useQueryStringData';

const Address = lazy(async () => import('./address').then(m => ({ default: m.Address })));
const BillingAddress = lazy(async () => import('./billingAddress').then(m => ({ default: m.BillingAddress })));
const CourseSelection = lazy(async () => import('./courseSelection').then(m => ({ default: m.CourseSelection })));
const Payment = lazy(async () => import('./payment').then(m => ({ default: m.Payment })));
const Overrides = lazy(async () => import('./overrides').then(m => ({ default: m.Overrides })));

export type DynamicCourseDescriptions = 'SHOW' | 'HIDE' | 'REPLACE';

type Props = {
  date: number;
  courseGroups: CourseGroup[];
  school: School;
  coursesOverride?: string[];
  /** the guarantee component to display in the summary section */
  guarantee: FC | null;
  /** an array of components to display below the course selection checkboxes */
  dynamicCourseMessages?: FC[];
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
};

const showBillingAddress = (school: School): boolean => {
  return school === 'QC Pet Studies';
};

export const Form: FC<Props> = props => {
  usePriceUpdater(props.date, !!props.internal, props.school, props.promoCodeDefault);
  useQueryStringData();

  return (
    <>
      <Suspense><CourseSelection courseGroups={props.courseGroups} dynamicCourseDescriptions={props.dynamicCourseDescriptions} dynamicCourseMessages={props.dynamicCourseMessages} discountName={props.discountName} internal={!!props.internal} coursesOverride={!!props.coursesOverride} /></Suspense>
      <Suspense><Address school={props.school} /></Suspense>
      <Suspense>{showBillingAddress(props.school) && <BillingAddress />}</Suspense>
      <Suspense><Payment date={props.date} school={props.school} showPromoCodeInput={!!props.showPromoCodeInput && !props.promoCodeDefault} visualPaymentPlans={!!props.visualPaymentPlans} /></Suspense>
      <Suspense>{!!props.internal && <Overrides />}</Suspense>
      {props.guarantee && <props.guarantee />}
    </>
  );
};
