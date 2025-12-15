import type { FC } from 'react';

import { Pet20240507Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { PetCoursesSubtitleBogoFirstAid } from '../../../../petCoursesSubtitleBogoFirstAid';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const Pet20240507: FC<Props> = ({ date }) => (
  <>
    <Pet20240507Promo date={date} />
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
      promoCodeDefault="PET200OFF"
      dynamicCourseMessages={[ Save50CourseMessage ]}
    />
  </>
);
