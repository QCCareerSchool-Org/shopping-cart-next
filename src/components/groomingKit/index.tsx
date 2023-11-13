import Image from 'next/image';
import type { FC } from 'react';

import GroominKitImage from './grooming-kit-with-description.jpg';

export const GroomingKit: FC = () => (
  <Image src={GroominKitImage} width="650" height="1056" className="img-fluid" alt="dog grooming starter kit" />
);
