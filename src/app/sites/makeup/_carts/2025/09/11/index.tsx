import type { FC } from 'react';

import { Makeup20250911Promo } from './promo';
import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Guarantee } from '@/app/sites/makeup/guarantee';
import { FreeProMakeupDynamicMessage } from '@/components/dynamicCourseMessages/freeProMakeup';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const Makeup20250911: FC<Props> = ({ date }) => (
  <>
    <Makeup20250911Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={Guarantee}
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      visualPaymentPlans={true}
      dynamicCourseDescriptions="SHOW"
      promoCodeDefault="PROLUMINOUS"
      dynamicCourseMessages={[ FreeProMakeupDynamicMessage ]}
    />
  </>
);
