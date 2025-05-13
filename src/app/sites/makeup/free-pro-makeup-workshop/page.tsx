import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { MakeupFreeProMakeupWorkshopPromo } from './promo';
import { FreeProMakeupMasterclassDynamicMessage } from '@/components/dynamicCourseMessages/freeProMakeupMasterclass';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupFreeProMakeupWorkshopPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);
  return (
    <>
      <MakeupFreeProMakeupWorkshopPromo date={date} />
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

export default MakeupFreeProMakeupWorkshopPage;
