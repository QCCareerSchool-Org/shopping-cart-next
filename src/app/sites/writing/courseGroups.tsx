import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import MostPopular from '../../most-pop.svg';
import type { CourseGroup } from '@/domain/courseGroup';

export const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'WS', name: 'Creative Writing', badge: <Image src={MostPopular as StaticImageData} width="81" height="28" style={{ marginTop: -4, marginBottom: -5, marginLeft: 6 }} alt="Most Popular" /> },
      { code: 'NV', name: 'Novel Writing' },
      { code: 'RM', name: 'Romance Writing' },
      { code: 'CH', name: 'Writing For Children' },
      { code: 'BC', name: 'Business Communications' },
      { code: 'FH', name: 'Memoir Writing' },
      { code: 'SC', name: 'Screenwriting' },
    ],
  },
];
