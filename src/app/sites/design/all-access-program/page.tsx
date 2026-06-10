import { agreementLinks } from '../agreementLinks';
import { Guarantee } from '../guarantee';
import { AllAccessPromo } from './promo';
import { Form } from '@/components/form';
import type { CourseGroup } from '@/domain/courseGroup';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const coursesOverride = [ 'AA', 'AD', 'ST', 'LD', 'PO', 'CC', 'AP', 'DB', 'VD' ];
const courseGroups: CourseGroup[] = [
  {
    items: [ { name: 'All-Access Program', code: 'AA' } ],
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
        promoCodeDefault="ALLACCESS"
      />
    </>
  );
};

export default AllAccessPage;
