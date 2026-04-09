import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

interface Props {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
  maxWidth?: number;
  quality?: number;
  breakpoint?: Breakpoint;
};

export const PromoImage: FC<Props> = ({ desktopSrc, mobileSrc, maxWidth = 1200, quality, breakpoint = 'sm' }) => {
  const [ desktopClass, mobileClass ] = getClasses(breakpoint);

  return (
    <div style={{ textAlign: 'center' }}>
      <Image src={desktopSrc} priority quality={quality} alt="" className={`img-fluid ${desktopClass}`} style={{ width: '100%', maxWidth }} />
      <Image src={mobileSrc} priority quality={quality} alt="" className={`img-fluid ${mobileClass}`} style={{ width: '100%' }} />
    </div>
  );
};

const getClasses = (breakpoint: Breakpoint): [ string, string ] => {
  switch (breakpoint) {
    case 'sm':
      return [ 'd-none d-sm-inline', 'd-sm-none' ];
    case 'md':
      return [ 'd-none d-md-inline', 'd-md-none' ];
    case 'lg':
      return [ 'd-none d-lg-inline', 'd-lg-none' ];
    case 'xl':
      return [ 'd-none d-xl-inline', 'd-xl-none' ];
    case 'xxl':
      return [ 'd-none d-xxl-inline', 'd-xxl-none' ];
  }
};
