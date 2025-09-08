import { DogGroomingKitTag } from './dogGroomingKitTag';
import type { CourseGroup } from '@/domain/courseGroup';

export const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'DG', name: 'Dog Grooming', badge: <DogGroomingKitTag /> },
      // { code: 'DE', name: 'Dog Grooming Externship' },
      { code: 'DT', name: 'Dog Training' },
      {
        code: 'DC',
        name: 'Dog Behavior',
        disabledMessage: (
          <>
            <p>The <span className="text-primary">Dog Behavior</span> course is designed to be taken after the <span className="text-primary">Dog Training</span> course. To enroll in Dog Behavior, please select Dog Training first.</p>
            <p className="mb-0">If you have already taken a comparable course elsewhere, please <a target="_blank" rel="noreferrer" href="https://www.qcpetstudies.com/contact-us">contact the School</a> to confirm your eligibility.</p>
          </>
        ),
      },
      { code: 'DD', name: 'Dog Daycare' },
    ],
  },
];
