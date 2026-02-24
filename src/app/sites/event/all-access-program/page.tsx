import { agreementLinks } from '../agreementLinks';
import { Guarantee } from '../guarantee';
import { AllAccessPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const coursesOverride = [ 'AA', 'CP', 'ED', 'DW', 'LW', 'PE', 'FL', 'EB', 'VE' ];

const AllAccessPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <>
      <AllAccessPromo />
      <Form
        date={date}
        courseGroups={[]}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
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
