import type { FC } from 'react';

import { MakeupStudent20240420Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const MakeupStudent20240420: FC<Props> = ({ date }) => {
  return (
    <>
      <MakeupStudent20240420Promo date={date} />
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
        promoCodeDefault="BRUSHSET50"
      />
    </>
  );
};
