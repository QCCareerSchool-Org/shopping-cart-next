import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { PetCoursesSubtitleBogoFirstAid } from '../petCoursesSubtitleBogoFirstAid';
import { DynamicMessage } from './dynamicMessage';
import { PetTraining150OffPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetTraining150OffPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <>
      <PetTraining150OffPromo />
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
        promoCodeDefault="DT150"
        dynamicCourseMessages={[ DynamicMessage ]}
      />
    </>
  );
};

export default PetTraining150OffPage;
