import type { FC } from 'react';

import { Event20260213Promo } from './promo';
import { agreementLinks } from '@/app/sites/event/agreementLinks';
import { courseGroups } from '@/app/sites/event/courseGroups';
import { Guarantee } from '@/app/sites/event/guarantee';
import { TwoFreeEventSpecialtyDynamicMessage } from '@/components/dynamicCourseMessages/twoFreeEventSpecialty';
import { Form } from '@/components/form';
import type { PromotionPeriodWithLastChanceObject } from '@/lib/promotionPeriod';

interface Props {
  date: number;
  promotionPeriod: PromotionPeriodWithLastChanceObject;
}

export const Event20260213: FC<Props> = ({ date, promotionPeriod }) => (
  <>
    <Event20260213Promo date={date} promotionPeriod={promotionPeriod} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={Guarantee}
      successLink="https://www.qceventplanning.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="2SPECIALTY100"
      dynamicCourseMessages={[ TwoFreeEventSpecialtyDynamicMessage ]}
    />
  </>
);
