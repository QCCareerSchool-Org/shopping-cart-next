import Image from 'next/image';
import type { FC } from 'react';

import LuminousKitImage from './deluxe-kit-with-bag.jpg';

export const LuminousKitWithBag: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div>
      <Image src={LuminousKitImage} className="img-fluid" alt="Luminous Kit" />
    </div>
  </div>
);
