import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { Wellness400OffPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const Wellness150OffPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <>
      <Wellness400OffPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Wellness Studies"
        guarantee={Guarantee}
        successLink="https://www.qcwellnessstudies.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        promoCodeDefault="400OFF"
      />
    </>
  );
};

export default Wellness150OffPage;
