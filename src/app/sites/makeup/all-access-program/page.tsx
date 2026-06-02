import { agreementLinks } from '../agreementLinks';
import { Guarantee } from '../guarantee';
import { MakeupFreeMasterclassPromo } from './promo';
import { Form } from '@/components/form';
import type { CourseGroup } from '@/domain/courseGroup';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupAllAccessPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  const courseGroups: CourseGroup[] = [
    {
      items: [ { name: 'All-Access Program', code: 'AM' } ],
    },
  ];
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
        coursesOverride={[ 'AM' ]}
      />
    </>
  );
};

export default MakeupAllAccessPage;
