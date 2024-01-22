import type { FC } from 'react';

import { agreementLinks } from '../../agreementLinks';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../guarantee';
import { PetCoursesSubtitleBogoFirstAid } from '../../petCoursesSubtitleBogoFirstAid';
import { PetFallbackPromo } from './promo';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';

type Props = {
  date: number;
};

export const PetFallback: FC<Props> = ({ date }) => {
  return (
    <>
      <PetFallbackPromo />
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
        promoCodeDefault="100OFF"
        dynamicCourseMessages={[ Save50CourseMessage ]}
      />
    </>
  );
};
