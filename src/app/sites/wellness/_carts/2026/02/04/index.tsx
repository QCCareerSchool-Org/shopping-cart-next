import type { FC } from 'react';

import { Wellness20260204Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { Form } from '@/components/form';
import type { LastChancePeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  promotionPeriod: LastChancePeriodDTO;
}

export const Wellness20260204: FC<Props> = ({ date, promotionPeriod }) => (
  <>
    <Wellness20260204Promo date={date} promotionPeriod={promotionPeriod} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={Guarantee}
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="300OFF"
    />
  </>
);
