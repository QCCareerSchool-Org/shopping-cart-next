import type { FC } from 'react';

import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { DesignStudent20240925Promo } from './promo';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const DesignStudent20240925: FC<Props> = ({ date }) => {
  return (
    <>
      <DesignStudent20240925Promo date={date} />
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
