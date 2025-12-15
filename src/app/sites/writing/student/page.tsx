import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const WritingStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <Form
      date={date}
      courseGroups={courseGroups}
      school="Winghill Writing School"
      guarantee={Guarantee}
      successLink="https://www.winghill.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      student
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
    />
  );
};

export default WritingStudentPage;
