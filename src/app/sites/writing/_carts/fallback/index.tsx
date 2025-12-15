import type { FC } from 'react';

import { WritingFallbackPromo } from './promo';
import { agreementLinks } from '../../agreementLinks';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../guarantee';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const WritingFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <WritingFallbackPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="Winghill Writing School"
        guarantee={Guarantee}
        successLink="https://www.winghill.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        dynamicCourseMessages={[ Save50CourseMessage ]}
      />
    </>
  );
};
