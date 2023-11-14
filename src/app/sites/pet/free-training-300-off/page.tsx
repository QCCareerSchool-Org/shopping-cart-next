import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { PetCoursesSubtitleBogoFirstAid } from '../petCoursesSubtitleBogoFirstAid';
import { PetFreeTraining300OffPromo } from './promo';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetFreeTraining300OffPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <>
      <PetFreeTraining300OffPromo />
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
};

export default PetFreeTraining300OffPage;
