import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { MakeupProMakeupWorkshopPromo } from './promo';
import { FreeProMakeupMasterclassDynamicMessage } from '@/components/dynamicCourseMessages/freeProMakeupMasterclass';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupProMakeupWorkshopPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);
  return (
    <>
      <MakeupProMakeupWorkshopPromo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        dynamicCourseMessages={[ FreeProMakeupMasterclassDynamicMessage ]}
        promoCodeDefault="PROLUMINOUS"
      />
    </>
  );
};

export default MakeupProMakeupWorkshopPage;
