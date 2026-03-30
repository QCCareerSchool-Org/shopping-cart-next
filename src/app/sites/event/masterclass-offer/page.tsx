import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { ProfitPivotPromo } from './promo';
import { TwoFreeEventSpecialtyEDDynamicMessage } from '@/components/dynamicCourseMessages/twoFreeEventSpecialtyED';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import { moveCourse } from '@/lib/moveCourse';
import type { PageComponent } from '@/serverComponent';

const customizedCourseGroup = moveCourse(courseGroups, 'ED', 'Foundation Courses', 'Specialty Courses');

const ProfitPivotPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <>
      <ProfitPivotPromo />
      <Form
        date={date}
        courseGroups={customizedCourseGroup}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        dynamicCourseMessages={[ TwoFreeEventSpecialtyEDDynamicMessage ]}
        visualPaymentPlans
        promoCodeDefault="PROFITPIVOT"
      />
    </>
  );
};

export default ProfitPivotPage;
