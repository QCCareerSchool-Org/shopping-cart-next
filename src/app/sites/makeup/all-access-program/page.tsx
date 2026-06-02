import { agreementLinks } from '../agreementLinks';
import { Guarantee } from '../guarantee';
import { MakeupFreeMasterclassPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupAllAccessPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <>
      <MakeupFreeMasterclassPromo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        hideCourseSelection
        coursesOverride={[ 'am' ]}
      />
    </>
  );
};

export default MakeupAllAccessPage;
