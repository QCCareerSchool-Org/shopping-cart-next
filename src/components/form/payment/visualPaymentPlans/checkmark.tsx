import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import Check from './check.svg';

export const Checkmark: FC = () => (
  <Image src={Check as StaticImageData} style={{ height: 18, width: 'auto', position: 'relative', top: -2 }} alt="✓" />
);
