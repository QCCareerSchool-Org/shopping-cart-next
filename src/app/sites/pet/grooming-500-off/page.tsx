import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { PetCoursesSubtitleBogoFirstAid } from '../petCoursesSubtitleBogoFirstAid';
import { DynamicMessage } from './dynamicMessage';
import { PetGrooming500OffPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetGrooming500OffPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <>
      <PetGrooming500OffPromo />
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
        promoCodeDefault="DG500"
        dynamicCourseMessages={[ DynamicMessage ]}
      />
    </>
  );
};

export default PetGrooming500OffPage;
