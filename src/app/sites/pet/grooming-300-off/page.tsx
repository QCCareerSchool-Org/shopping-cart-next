import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { PetCoursesSubtitleBogoFirstAid } from '../petCoursesSubtitleBogoFirstAid';
import { DynamicMessage } from './dynamicMessage';
import { PetGrooming300OffPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetGrooming300OffPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <>
      <PetGrooming300OffPromo />
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
        promoCodeDefault="DG300"
        dynamicCourseMessages={[ DynamicMessage ]}
      />
    </>
  );
};

export default PetGrooming300OffPage;
