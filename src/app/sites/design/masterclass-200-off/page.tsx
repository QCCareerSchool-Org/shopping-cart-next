import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { DesignMasterclass200OffPromo } from './promo';
import { MasterClassDynamicMessage } from '@/components/dynamicCourseMessages/masterclass';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignMasterclass200OffPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);
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
        dynamicCourseMessages={[ MasterClassDynamicMessage ]}
      />
    </>
  );
};

export default DesignMasterclass200OffPage;
