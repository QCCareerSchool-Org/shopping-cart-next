import type { FC } from 'react';

import { DesignAllCoursesPromo } from './promo';
import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const DesignFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <DesignAllCoursesPromo date={date} />
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
