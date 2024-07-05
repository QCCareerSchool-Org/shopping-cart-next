import { agreementLinks } from '../agreementLinks';
import { DogGroomingKitTag } from '../dogGroomingKitTag';
import { Guarantee } from '../guarantee';
import { PetCoursesSubtitleFirstAid } from '../petCoursesSubtitleFirstAid';
import { PetStudentPromo } from './promo';
import { Form } from '@/components/form';
import type { CourseGroup } from '@/domain/courseGroup';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'DG', name: 'Dog Grooming', badge: <DogGroomingKitTag /> },
      { code: 'DT', name: 'Dog Training' },
      { code: 'DD', name: 'Dog Daycare' },
      { code: 'DC', name: 'Dog Behavior' },
    ],
  },
];

const PetStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <>
      <PetStudentPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Pet Studies"
        guarantee={Guarantee}
        coursesSubtitle={PetCoursesSubtitleFirstAid}
        successLink="https://www.qcpetstudies.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        student
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
      />
    </>
  );
};

export default PetStudentPage;
