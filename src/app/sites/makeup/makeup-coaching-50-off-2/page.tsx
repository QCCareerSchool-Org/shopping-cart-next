import { agreementLinks } from '../agreementLinks';
import { Guarantee } from '../guarantee';
import { Client } from './client';
import { MakeupCoachingPromo } from '../makeup-coaching-50-off/promo';
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

const coursesOverride = [ 'pa' ];

const MakeupCoachingPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <>
      <MakeupCoachingPromo date={date} />
      <Client
        date={date}
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={Guarantee}
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        showPromoCodeInput
        coursesOverride={coursesOverride}
        hideCourseSelection
      />
    </>
  );

};

export default MakeupCoachingPage;
