import type { CourseGroup } from '@/domain/courseGroup';

// const peDisabledMessage = (
//   <p>
//     The <span className="text-primary">Promotional Event Planning</span> course requires corporate event
//     training. Please select the <span className="text-primary">Corporate Event Planning</span> course first.
//   </p>
// );

// const flDisabledMessage = (
//   <p>
//     The <span className="text-primary">Festivals &amp; Live Events</span> course requires corporate event
//     training. Please select the <span className="text-primary">Corporate Event Planning</span> course first.
//   </p>
// );

export const courseGroups: CourseGroup[] = [
  {
    name: 'Best Value',
    items: [
      {
        code: 'AA',
        name: 'All-Access Program',
        badge: <span className="ms-2 badge bg-primary text-uppercase">Most Popular</span>,
        contents: (
          <>
            <strong>Included courses:</strong>
            <ul>
              <li>Event & Wedding Planning</li>
              <li>Corporate Event Planning</li>
              <li>Event Decor</li>
              <li>Luxury Wedding & Event Planning</li>
              <li>Destination Wedding Planning</li>
              <li>Promotional Event Planning</li>
              <li>Festivals & Live Events</li>
              <li>Accelerate Your Business</li>
              <li>Virtual Events Training</li>
            </ul>
          </>
        ),
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
