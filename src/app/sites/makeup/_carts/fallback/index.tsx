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

const newPromoDate = Date.UTC(2024, 2, 16, 4); // March 16, 2024 at 00:00 (04:00 UTC)

export const MakeupFallback: FC<Props> = ({ date }) => {
  const newPromo = date >= newPromoDate;

  return (
    <>
      <MakeupFallbackPromo newPromo={newPromo} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        promoCodeDefault={newPromo ? undefined : 'PROLUMINOUS'}
        visualPaymentPlans
        dynamicCourseMessages={newPromo ? [ Save50CourseMessage ] : [ FreeProMakeupDynamicMessage, Save50CourseMessage ]}
      />
    </>
  );
};
