import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { DesignStudentPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const newYearsStart = Date.UTC(2023, 11, 26, 14, 30); // Dec 26 at 09:30 (14:30 UTC)
const newYearsEnd = Date.UTC(2024, 0, 6, 5); // Jan 6 at 00:00 (05:00 UTC)

const DesignStudentPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  const newYears = date >= newYearsStart && date < newYearsEnd;
  return (
    <>
      <DesignStudentPromo newYears={newYears} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault={newYears ? '50OFF' : undefined}
      />
    </>
  );
};

export default DesignStudentPage;
