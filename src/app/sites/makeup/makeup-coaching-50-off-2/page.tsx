import { Client } from './client';
import { Guarantee } from '../makeup-coaching-50-off/guarantee';
import { MakeupCoachingPromo } from '../makeup-coaching-50-off/promo';
import type { AgreementLinks } from '@/domain/agreementLinks';
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

const agreementLinks: AgreementLinks = {
  default: 'https://www.qcmakeupacademy.com/pm-enrollment-agreement.html',
  custom: [],
};

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
        hideTaxRefund
      />
    </>
  );

};

export default MakeupCoachingPage;
