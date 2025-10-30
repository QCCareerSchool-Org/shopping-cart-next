import type { FC } from 'react';

import { Makeup20251103Promo } from './promo';
import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { courseGroups } from '@/app/sites/makeup/courseGroups';
import { Guarantee } from '@/app/sites/makeup/guarantee';
import { FreeSpecialFXDynamicMessage } from '@/components/dynamicCourseMessages/freeSpecialFX';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Makeup20251103: FC<Props> = ({ date }) => (
  <>
    <Makeup20251103Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={Guarantee}
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      visualPaymentPlans={true}
      dynamicCourseDescriptions="SHOW"
      promoCodeDefault="HALLOWEENSFX"
      dynamicCourseMessages={[ FreeSpecialFXDynamicMessage ]}
    />
  </>
);
