import { agreementLinks } from '../agreementLinks';
import { Guarantee } from '../guarantee';
import { MakeupCoachingPromo } from './promo';
import { Form } from '@/components/form';
import type { CourseGroup } from '@/domain/courseGroup';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'PA', name: 'Makeup Coaching' },
    ],
  },
];

const MakeupCoachingPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <>
      <MakeupCoachingPromo date={date} />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        showPromoCodeInput
        coursesOverride={[ 'pa' ]}
        hideCourseSelection
      />
    </>
  );
};

export default MakeupCoachingPage;
