import type { FC } from 'react';

import { DesignFallbackPromo } from './promo';
import { agreementLinks } from '../../agreementLinks';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../guarantee';
import { FreeColorConsultantMessage } from '@/components/dynamicCourseMessages/freeColorConsultant';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const DesignFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <DesignFallbackPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="FREECOLOR"
        dynamicCourseMessages={[ FreeColorConsultantMessage ]}
      />
    </>
  );
};
