import { agreementLinks } from '../agreementLinks';
import { DogGroomingKitTag } from '../dogGroomingKitTag';
import { Guarantee } from '../guarantee';
import { PetCoursesSubtitleFirstAid } from '../petCoursesSubtitleFirstAid';
import { PetStudent60Promo } from './promo';
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

const PetStudent60Page: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <>
      <PetStudent60Promo date={date} />
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
        promoCodeDefault="SAVE60"
        visualPaymentPlans
      />
    </>
  );
};

export default PetStudent60Page;
