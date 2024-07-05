import { courseGroups } from '../courseGroups';
import { PetEarthwiseAcceleratedGroomingPromo } from './promo';
import { Form } from '@/components/form';
import type { AgreementLinks } from '@/domain/agreementLinks';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const agreementLinks: AgreementLinks = {
  default: 'https://www.qcpetstudies.com/enrollment-agreement-earthwise',
  custom: [],
};

const coursesOverride = [ 'EA' ];

const PetEarthwiseAcceleratedGroomingPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <>
      <PetEarthwiseAcceleratedGroomingPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Pet Studies"
        schoolVariant="EarthWise Pet"
        guarantee={null}
        successLink="https://www.qcpetstudies.com/welcome-to-the-school-third-party"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        coursesOverride={coursesOverride}
        billingAddressDefault="different"
      />
    </>
  );
};

export default PetEarthwiseAcceleratedGroomingPage;
