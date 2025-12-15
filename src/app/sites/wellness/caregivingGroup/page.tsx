import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const coursesOverride = [ 'FC' ];

const CaregivingGroupPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={Guarantee}
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
      promoCodeDefault="FC25PERCENT"
      discountName="25% Discount"
      coursesOverride={coursesOverride}
    />
  );
};

export default CaregivingGroupPage;
