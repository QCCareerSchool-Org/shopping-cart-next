import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import MostPopular from '../../most-pop.svg';
import type { CourseGroup } from '@/domain/courseGroup';

export const courseGroups: CourseGroup[] = [
  {
    name: 'Foundation Courses',
    items: [
      {
        code: 'MZ',
        name: 'Master Makeup Artistry',
        badge: <Image src={MostPopular as StaticImageData} width="81" height="28" style={{ marginTop: -4, marginBottom: -5, marginLeft: 6 }} alt="Most Popular" />,
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
    ],
  },
];
