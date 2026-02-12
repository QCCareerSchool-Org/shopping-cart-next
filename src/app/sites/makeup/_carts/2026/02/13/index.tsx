import type { FC } from 'react';

import { Makeup20260213Promo } from './promo';
import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Guarantee } from '@/app/sites/makeup/guarantee';
import { FreeStyleDynamicMessage } from '@/components/dynamicCourseMessages/freeStyle';
import { Form } from '@/components/form';
import type { LastChancePeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Makeup20260213: FC<Props> = ({ date, period }) => (
  <>
    <Makeup20260213Promo date={date} period={period} />
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
