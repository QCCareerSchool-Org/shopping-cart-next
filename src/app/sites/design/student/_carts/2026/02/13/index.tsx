import type { FC } from 'react';

import { DesignStudent20260213Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { Form } from '@/components/form';
import type { BaseLastChancePeriod } from '@/lib/period';

interface Props {
  date: number;
  promotionPeriod: BaseLastChancePeriod;
}

export const DesignStudent20260213: FC<Props> = ({ date, promotionPeriod }) => {
  return (
    <>
      <DesignStudent20260213Promo date={date} promotionPeriod={promotionPeriod} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="SAVE60"
      />
    </>
  );
};
