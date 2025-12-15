import type { FC } from 'react';

import { DesignStudent20240821Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const DesignStudent20240821: FC<Props> = ({ date }) => {
  return (
    <>
      <DesignStudent20240821Promo date={date} />
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
        promoCodeDefault="FANDECK50"
      />
    </>
  );
};
