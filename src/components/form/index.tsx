'use client';

import type { FC } from 'react';

import { Address } from './address';
import { BillingAddress } from './billingAddress';
import { CourseSelection } from './courseSelection';
import type { AgreementLinks } from '@/domain/agreementLinks';
import type { CourseGroup } from '@/domain/courseGroup';
import type { School } from '@/domain/school';
import { usePriceUpdater } from '@/hooks/usePriceUpdater';
import { useQueryStringData } from '@/hooks/useQueryStringData';

export type DynamicCourseDescriptions = 'SHOW' | 'HIDE' | 'REPLACE';

type Props = {
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
  usePriceUpdater(!!props.internal, props.school, props.promoCodeDefault);
  useQueryStringData();

  return (
    <>
      <CourseSelection courseGroups={props.courseGroups} dynamicCourseDescriptions={props.dynamicCourseDescriptions} dynamicCourseMessages={props.dynamicCourseMessages} discountName={props.discountName} internal={!!props.internal} coursesOverride={!!props.coursesOverride} />
      <Address school={props.school} />
      {showBillingAddress(props.school) && <BillingAddress />}
      {props.guarantee && <props.guarantee />}
    </>
  );
};
