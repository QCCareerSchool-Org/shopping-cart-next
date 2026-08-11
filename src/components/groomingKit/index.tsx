import Image from 'next/image';
import type { FC } from 'react';

import { GroomingKitList } from './groomingKitList';
import GroomingKitImage from './groomingKitList/kit-labelled.jpg';

interface Props {
  hideScissorsDescription?: boolean;
}

export const GroomingKit: FC<Props> = ({ hideScissorsDescription }) => (
  <>
    <Image src={GroomingKitImage} width="669" height="1050" className="img-fluid" alt="dog grooming starter kit" />
    <GroomingKitList hideScissorsDescription={hideScissorsDescription} />
  </>
);
