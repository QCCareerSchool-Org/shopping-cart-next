import { agreementLinks } from '../agreementLinks';
import { Guarantee } from '../guarantee';
import { AllAccessPromo } from './promo';
import { Form } from '@/components/form';
import type { CourseGroup } from '@/domain/courseGroup';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const coursesOverride = [ 'AD' ];
const courseGroups: CourseGroup[] = [
  {
    items: [ { name: 'All-Access Program', code: 'AD' } ],
  },
];

const AllAccessPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <>
      <AllAccessPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        coursesOverride={coursesOverride}
        hideCourseSelection
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
      />
    </>
  );
};

export default AllAccessPage;
