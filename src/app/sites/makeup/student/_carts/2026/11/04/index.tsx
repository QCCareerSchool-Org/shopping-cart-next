import type { FC } from 'react';

import { MakeupStudent20261104Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { Form } from '@/components/form';
import type { LastChanceWithExtensionPeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  period: LastChanceWithExtensionPeriodDTO;
}

export const MakeupStudent20261104: FC<Props> = ({ date, period }) => {
  return (
    <>
      <MakeupStudent20261104Promo date={date} period={period} />
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
