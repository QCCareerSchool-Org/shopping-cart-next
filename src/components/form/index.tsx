'use client';

import type { FC } from 'react';
import { useEffect } from 'react';

import { Address } from './address';
import { CourseSelection } from './courseSelection';
import type { AgreementLinks } from '@/domain/agreementLinks';
import type { CourseGroup } from '@/domain/courses';
import type { School } from '@/domain/school';
import { useGlobalState } from '@/hooks/useGlobalState';
import { fetchPrice } from '@/lib/fetch';

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
  /** display the visual payment plans */
  visualPaymentPlans?: boolean;
  /** enable the billing address section */
  billingAddress?: boolean;
};

export const Form: FC<Props> = props => {
  const [ globalState, setGlobalState ] = useGlobalState();

  useEffect(() => {
    const controller = new AbortController();
    fetchPrice(globalState.countryCode, globalState.provinceCode, globalState.courses, globalState.promoCode ?? props.promoCodeDefault, controller).then(p => {
      if (!p) {
        throw Error('Unable to fetch price');
      }
      setGlobalState(s => ({ ...s, price: p }));
    }).catch(err => {
      console.error(err);
    });
    return () => controller.abort();
  }, [ setGlobalState, globalState.countryCode, globalState.provinceCode, globalState.courses, globalState.promoCode, props.promoCodeDefault ]);

  return (
    <>
      <CourseSelection courseGroups={props.courseGroups} dynamicCourseMessages={props.dynamicCourseMessages} />
      <Address />
      {props.guarantee && <props.guarantee />}
    </>
  );
};
