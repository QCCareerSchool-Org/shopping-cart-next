import type { FC } from 'react';

import { MakeupStudent20250614Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { PortfolioDevelopment60DynamicMessage } from '@/components/dynamicCourseMessages/portfolioDevelopment60';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const MakeupStudent20250614: FC<Props> = ({ date }) => {
  return (
    <>
      <MakeupStudent20250614Promo date={date} />
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
        dynamicCourseMessages={[ PortfolioDevelopment60DynamicMessage ]}
        promoCodeDefault="PORTDEV60"
      />
    </>
  );
};
