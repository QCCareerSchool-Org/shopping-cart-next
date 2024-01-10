import { DogGroomingKitTag } from './dogGroomingKitTag';
import type { CourseGroup } from '@/domain/courseGroup';

export const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'DG', name: 'Dog Grooming', badge: <DogGroomingKitTag /> },
      { code: 'DT', name: 'Dog Training' },
      { code: 'DC', name: 'Dog Behavior' },
      { code: 'DD', name: 'Dog Daycare' },
    ],
  },
];
