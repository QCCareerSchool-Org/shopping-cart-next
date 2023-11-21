import type { FC } from 'react';

import { agreementLinks } from '../../../agreementLinks';
import { courseGroups } from '../../../courseGroups';
import { Guarantee } from '../../../guarantee';
import { PetCoursesSubtitleBogoFirstAid } from '../../../petCoursesSubtitleBogoFirstAid';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Design202310: FC<Props> = ({ date }) => (
  <>
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={Guarantee}
      coursesSubtitle={PetCoursesSubtitleBogoFirstAid}
      successLink="https://www.qcdesignschool.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="SHOW"
      visualPaymentPlans
      dynamicCourseMessages={[ Save50CourseMessage ]}
    />
  </>
);
