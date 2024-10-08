import type { FC } from 'react';

import { Pet20240222Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { PetCoursesSubtitleBogoFirstAid } from '../../../../petCoursesSubtitleBogoFirstAid';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const Pet20240222: FC<Props> = ({ date }) => (
  <>
    <Pet20240222Promo date={date} />
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={Guarantee}
      coursesSubtitle={PetCoursesSubtitleBogoFirstAid}
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="SHOW"
      visualPaymentPlans
      promoCodeDefault="PET300OFF"
      dynamicCourseMessages={[ Save50CourseMessage ]}
    />
  </>
);
