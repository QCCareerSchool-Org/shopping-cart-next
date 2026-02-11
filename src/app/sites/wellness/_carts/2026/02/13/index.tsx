import type { FC } from 'react';

import { Wellness20260213Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { Form } from '@/components/form';
import type { PromotionPeriodWithLastChanceObject } from '@/lib/promotionPeriod';

interface Props {
  date: number;
  promotionPeriod: PromotionPeriodWithLastChanceObject;
}

export const Wellness20260213: FC<Props> = ({ date, promotionPeriod }) => (
  <>
    <Wellness20260213Promo date={date} promotionPeriod={promotionPeriod} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={Guarantee}
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="400OFF"
    />
  </>
);
