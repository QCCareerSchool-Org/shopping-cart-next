import type { FC } from 'react';

import { Makeup20250416Promo } from './promo';
import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Guarantee } from '@/app/sites/makeup/guarantee';
import { FreeSkincareDynamicMessage } from '@/components/dynamicCourseMessages/freeSkincare';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Makeup20250416: FC<Props> = ({ date }) => (
  <>
    <Makeup20250416Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={Guarantee}
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      visualPaymentPlans={true}
      dynamicCourseDescriptions="SHOW"
      promoCodeDefault="SKINCARE100"
      dynamicCourseMessages={[ FreeSkincareDynamicMessage ]}
    />
  </>
);
