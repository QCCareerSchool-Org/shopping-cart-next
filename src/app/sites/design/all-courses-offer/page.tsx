import { DesignAllCoursesPromo } from './promo';
import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { BogoDynamicCourseMessage } from '@/components/dynamicCourseMessages/bogo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignAllCoursesPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <>
      <DesignAllCoursesPromo date={date} />
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

export default DesignAllCoursesPage;
