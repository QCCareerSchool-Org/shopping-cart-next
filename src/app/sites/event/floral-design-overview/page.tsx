import { FDPromo } from './promo';
import { agreementLinks } from '@/app/sites/event/agreementLinks';
import { courseGroups } from '@/app/sites/event/courseGroups';
import { Guarantee } from '@/app/sites/event/guarantee';
import { Save50CourseMessage } from '@/components/dynamicCourseMessages/save50';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const FloralDesignOverview: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <>
      <FDPromo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        dynamicCourseMessages={[ Save50CourseMessage ]}
        promoCodeDefault="100OFF"
        hideCourseTable
      />
    </>
  );
};

export default FloralDesignOverview;
