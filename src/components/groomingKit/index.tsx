import Image from 'next/image';
import type { FC } from 'react';

import { GroomingKitList } from './groomingKitList';
import GroomingKitImage from './groomingKitList/kit-labelled.jpg';

export const GroomingKit: FC = () => (
  <>
    <Image src={GroomingKitImage} width="669" height="1050" className="img-fluid" alt="dog grooming starter kit" />
    <GroomingKitList />
  </>
);
