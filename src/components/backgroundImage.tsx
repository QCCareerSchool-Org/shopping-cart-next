import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC } from 'react';
import { memo } from 'react';

interface Props {
  src: StaticImageData;
  objectPosition?: CSSProperties['objectPosition'];
  mobile?: {
    src: StaticImageData;
    /** when to show the standard image, e.g. 'md' means show the standard image on md or larger screens */
    breakpoint: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    objectPosition?: CSSProperties['objectPosition'];
  };
  priority?: boolean;
}

/**
 * Displays a background image with an option to show a different background image on small screens
 */
export const BackgroundImage: FC<Props> = memo(({ src, objectPosition, mobile, priority }) => {
  if (mobile) {
    return (
      <>
        <div className={`d-none d-${mobile.breakpoint}-block`}><Part src={src} objectPosition={objectPosition} priority={priority} /></div>
        <div className={`d-${mobile.breakpoint}-none`}><Part src={mobile.src} objectPosition={mobile.objectPosition} priority={priority} /></div>
      </>
    );
  }
  return <Part src={src} objectPosition={objectPosition} priority={priority} />;
});

BackgroundImage.displayName = 'BackgroundImage';

interface PartProps {
  src: StaticImageData;
  objectPosition: CSSProperties['objectPosition'];
  priority?: boolean;
}

const Part: FC<PartProps> = ({ src, objectPosition, priority }) => <Image src={src} placeholder="blur" alt="" priority={priority} fill sizes="100vw" style={{ objectFit: 'cover', objectPosition }} />;
