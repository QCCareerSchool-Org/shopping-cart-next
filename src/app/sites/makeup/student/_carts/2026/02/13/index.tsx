import type { FC } from 'react';

import { MakeupStudent20260213Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { Form } from '@/components/form';
import type { BaseLastChancePeriod } from '@/lib/period';

interface Props {
  date: number;
  period: BaseLastChancePeriod;
}

export const MakeupStudent20260213: FC<Props> = ({ date, period }) => {
  return (
    <>
      <MakeupStudent20260213Promo date={date} period={period} />
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
        promoCodeDefault="STYLING60"
      />
    </>
  );
};
