import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { MakeupCoachingPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupCoachingPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);
  return (
    <>
      <MakeupCoachingPromo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        showPromoCodeInput
        coursesOverride={[ 'pa' ]}
      />
    </>
  );
};

export default MakeupCoachingPage;
