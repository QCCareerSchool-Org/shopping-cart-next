import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
  maxWidth?: number;
  quality?: number;
};

export const PromoImage: FC<Props> = ({ desktopSrc, mobileSrc, maxWidth = 1200, quality }) => (
  <div style={{ textAlign: 'center' }}>
    <Image src={desktopSrc} priority quality={quality} alt="" className="img-fluid d-none d-sm-inline" style={{ width: '100%', maxWidth }} />
    <Image src={mobileSrc} priority quality={quality} alt="" className="img-fluid d-sm-none" style={{ width: '100%' }} />
  </div>
);
