import { DogGroomingKitTag } from './dogGroomingKitTag';
import type { CourseGroup } from '@/domain/courseGroup';

export const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'DG', name: 'Dog Grooming', badge: <DogGroomingKitTag /> },
      { code: 'DT', name: 'Dog Training' },
      {
        code: 'DC',
        name: 'Dog Behavior',
        disabledMessage: (
          <>
            The <span className="text-primary">Dog Behavior</span> course is designed to be taken after the <span className="text-primary">Dog Training</span> course. To enroll in Dog Behavior, please select Dog Training first.
          </>
        ),
      },
      { code: 'DD', name: 'Dog Daycare' },
    ],
  },
];
