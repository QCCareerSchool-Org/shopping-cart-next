import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { DesignBogo1Promo } from './promo';
import { BogoDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogo';
import { Form } from '@/components/form';
import type { PageComponent } from '@/serverComponent';

type Props = {
  date: number;
};

const DesignBogo1Page: PageComponent<Props> = ({ date }) => {
  return (
    <>
      <DesignBogo1Promo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="BOGO"
        dynamicCourseMessages={[ BogoDynamicCourseMessage ]}
      />
    </>
  );
};

export default DesignBogo1Page;
