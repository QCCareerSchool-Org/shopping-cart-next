import type { FC } from 'react';

import { Design20260423Promo } from './promo';
import { agreementLinks } from '@/app/sites/design/agreementLinks';
import { courseGroups } from '@/app/sites/design/courseGroups';
import { Guarantee } from '@/app/sites/design/guarantee';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';
import type { LastChancePeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const Design20260423: FC<Props> = ({ date, period }) => {
  return (
    <>
      <Design20260423Promo date={date} period={period} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        dynamicCourseMessages={[ Save50CourseMessage ]}
      />
    </>
  );
};
