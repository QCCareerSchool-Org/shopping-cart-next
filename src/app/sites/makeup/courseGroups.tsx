import { AllAccessModalContent } from './allAccessModal/content';
import type { CourseGroup } from '@/domain/courseGroup';

export const courseGroups: CourseGroup[] = [
  {
    name: 'Best Value',
    items: [
      {
        code: 'AM',
        name: 'All-Access Program',
        badge: <span className="ms-2 badge bg-primary text-uppercase">Most Popular</span>,
        contents: {
          body: <AllAccessModalContent />,
          modalSize: 'xl',
        },
      },
    ],
  },
  {
    name: 'Foundation Courses',
    items: [
      {
        code: 'MZ',
        name: 'Master Makeup Artistry',
      },
      {
        code: 'SK',
        name: 'Skincare Consultant',
      },
    ],
  },
  {
    name: 'Specialty Courses',
    items: [
      { code: 'SF', name: 'Special FX Makeup' },
      { code: 'MW', name: 'Pro Makeup Workshop' },
      { code: 'HS', name: 'Hair Styling Essentials' },
      { code: 'AB', name: 'Airbrush Makeup Workshop' },
      { code: 'PW', name: 'Portfolio Development' },
      { code: 'PF', name: 'Personal Styling' },
    ],
  },
];
