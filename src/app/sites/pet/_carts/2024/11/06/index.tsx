import type { FC } from 'react';

import { Pet20241106Promo } from './promo';
import { agreementLinks } from '../../../../agreementLinks';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../guarantee';
import { PetCoursesSubtitleBogoFirstAid } from '../../../../petCoursesSubtitleBogoFirstAid';
import { FreeDaycareMessage } from '@/components/dynamicCourseMessages/freeDaycare';
import { Form } from '@/components/form';

interface Props {
  date: number;
}

export const Pet20241106: FC<Props> = ({ date }) => (
  <>
    <Pet20241106Promo date={date} />
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
      promoCodeDefault="DAYCARE300"
      dynamicCourseMessages={[ FreeDaycareMessage ]}
    />
  </>
);
