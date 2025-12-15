import type { FC } from 'react';

import { DesignStudentFallbackPromo } from './promo';
import { agreementLinks } from '../../../agreementLinks';
import { courseGroups } from '../../../courseGroups';
import { Guarantee } from '../../../guarantee';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const DesignStudentFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <DesignStudentFallbackPromo />
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
      />
    </>
  );
};
