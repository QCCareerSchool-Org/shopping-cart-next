import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { DesignMasterclass200OffPromo } from './promo';
import { Form } from '@/components/form';
import type { PageComponent } from '@/serverComponent';

type Props = {
  date: number;
};

const DesignMasterclass200OffPage: PageComponent<Props> = ({ date }) => {
  return (
    <>
      <DesignMasterclass200OffPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="MASTERCLASS"
      />
    </>
  );
};

export default DesignMasterclass200OffPage;
