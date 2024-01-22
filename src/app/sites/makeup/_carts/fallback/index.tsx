import type { FC } from 'react';

import { agreementLinks } from '../../agreementLinks';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../guarantee';
import { MakeupFallbackPromo } from './promo';
import { FreeProMakeupDynamicMessage } from '@/components/dynamicCourseMessages/freeProMakeup';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const MakeupFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <MakeupFallbackPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        promoCodeDefault="PROLUMINOUS"
        visualPaymentPlans
        dynamicCourseMessages={[ FreeProMakeupDynamicMessage, Save50CourseMessage ]}
      />
    </>
  );
};
