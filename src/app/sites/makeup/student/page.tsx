import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { MakeupStudentPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const newYearsStart = Date.UTC(2023, 11, 26, 14, 30); // Dec 26 at 09:30 (14:30 UTC)
const lastChanceDate = Date.UTC(2024, 0, 5, 5); // Jan 5 at 00:00 (05:00 UTC)
const newYearsEnd = Date.UTC(2024, 0, 6, 5); // Jan 6 at 00:00 (05:00 UTC)

const MakeupStudentPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  const newYears = date >= newYearsStart && date < newYearsEnd;
  return (
    <>
      <MakeupStudentPromo date={date} lastChanceDate={lastChanceDate} endDate={newYearsEnd} newYears={newYears} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault={newYears ? '50OFF' : undefined}
      />
    </>
  );
};

export default MakeupStudentPage;
