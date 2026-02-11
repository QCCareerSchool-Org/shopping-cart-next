import type { FC } from 'react';

import { Makeup20260213Promo } from './promo';
import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Guarantee } from '@/app/sites/makeup/guarantee';
import { FreeStyleDynamicMessage } from '@/components/dynamicCourseMessages/freeStyle';
import { Form } from '@/components/form';
import type { PromotionPeriodWithLastChanceObject } from '@/lib/promotionPeriod';

interface Props {
  date: number;
  promotionPeriod: PromotionPeriodWithLastChanceObject;
}

export const Makeup20260213: FC<Props> = ({ date, promotionPeriod }) => (
  <>
    <Makeup20260213Promo date={date} promotionPeriod={promotionPeriod} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={Guarantee}
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      visualPaymentPlans={true}
      dynamicCourseDescriptions="SHOW"
      promoCodeDefault="FREESTYLE"
      dynamicCourseMessages={[ FreeStyleDynamicMessage ]}
    />
  </>
);
