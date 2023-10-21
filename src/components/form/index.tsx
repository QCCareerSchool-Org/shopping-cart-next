'use client';

import type { FC } from 'react';

import { Address } from './address';
import { BillingAddress } from './billingAddress';
import { CourseSelection } from './courseSelection';
import type { AgreementLinks } from '@/domain/agreementLinks';
import type { CourseGroup } from '@/domain/courseGroup';
import type { School } from '@/domain/school';
import { useCourseGroups } from '@/hooks/useCourseGroups';
import { usePriceUpdater } from '@/hooks/usePriceUpdater';
import { useQueryStringData } from '@/hooks/useQueryStringData';

type Props = {
  courseGroups: CourseGroup[];
  school: School;
  courseOverride?: string[];
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
  /** whether MS should be shown regardless of I2 */
  showMS?: boolean;
  /** display the visual payment plans */
  visualPaymentPlans?: boolean;
  /** enable the billing address section */
  billingAddress?: boolean;
};

const showBillingAddress = (school: School): boolean => {
  return school === 'QC Pet Studies';
};

export const Form: FC<Props> = props => {
  usePriceUpdater(!!props.internal, props.school, props.promoCodeDefault);
  useCourseGroups(props.courseGroups, !!props.showMS);
  useQueryStringData(!!props.internal);

  return (
    <>
      <CourseSelection courseGroups={props.courseGroups} dynamicCourseMessages={props.dynamicCourseMessages} />
      <Address school={props.school} />
      {showBillingAddress(props.school) && <BillingAddress />}
      {props.guarantee && <props.guarantee />}
    </>
  );
};
