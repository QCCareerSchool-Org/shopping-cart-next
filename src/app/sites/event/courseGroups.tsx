import { AllAccessPopup } from './allAccessPopup';
import type { CourseGroup } from '@/domain/courseGroup';

export const courseGroups: CourseGroup[] = [
  {
    name: 'Best Value',
    items: [
      {
        code: 'AA',
        name: 'All-Access Program',
        badge: <span className="ms-2 badge bg-primary text-uppercase">Most Popular</span>,
        contents: <AllAccessPopup />,
      },
    ],
  },
  {
    name: 'Foundation Courses',
    items: [
      { code: 'EP', name: 'Event & Wedding Planning' },
      { code: 'CP', name: 'Corporate Event Planning' },
      { code: 'CE', name: 'Event Planning' },
      { code: 'WP', name: 'Wedding Planning' },
      { code: 'FD', name: 'Floral Design' },
      { code: 'ED', name: 'Event Decor' },
    ],
  },
  {
    name: 'Specialty Courses',
    items: [
      { code: 'LW', name: 'Luxury Wedding & Event Planning' },
      { code: 'DW', name: 'Destination Wedding Planning' },
      { code: 'PE', name: 'Promotional Event Planning' },
      { code: 'FL', name: 'Festivals & Live Events' },
      { code: 'TT', name: 'Travel & Tourism' },
      { code: 'EB', name: 'Accelerate Your Business Workshop' },
      { code: 'VE', name: 'Virtual Event Training' },
    ],
  },
];
