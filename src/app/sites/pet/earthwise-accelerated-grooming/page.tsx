import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { PetEarthwiseAcceleratedGroomingPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const coursesOverride = [ 'EA' ];

const PetEarthwiseAcceleratedGroomingPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <>
      <PetEarthwiseAcceleratedGroomingPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Pet Studies"
        guarantee={null}
        successLink="https://www.qcpetstudies.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        coursesOverride={coursesOverride}
      />
    </>
  );
};

export default PetEarthwiseAcceleratedGroomingPage;
