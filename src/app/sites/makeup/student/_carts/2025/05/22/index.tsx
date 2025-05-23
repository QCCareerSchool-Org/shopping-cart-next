import type { FC } from 'react';

import { MakeupStudent20250522Promo } from './promo';
import { agreementLinks } from '../../../../../agreementLinks';
import { courseGroups } from '../../../../../courseGroups';
import { Guarantee } from '../../../../../guarantee';
import { PersonalStyling60DynamicMessage } from '@/components/dynamicCourseMessages/personalStyling60';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const MakeupStudent20250522: FC<Props> = ({ date }) => {
  return (
    <>
      <MakeupStudent20250522Promo date={date} />
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
        dynamicCourseMessages={[ PersonalStyling60DynamicMessage ]}
        promoCodeDefault="STYLING60"
      />
    </>
  );
};
