import type { FC } from 'react';

import { MakeupStudent20260401Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { Form } from '@/components/form';
import type { LastChancePeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const MakeupStudent20260401: FC<Props> = ({ date, period }) => {
  return (
    <>
      <MakeupStudent20260401Promo date={date} period={period} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="SAVE60"
      />
    </>
  );
};
