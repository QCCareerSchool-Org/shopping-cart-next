import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, KeyboardEvent } from 'react';

type Props = {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
  maxWidth?: number;
  quality?: number;
  onClick?: () => void;
};

export const PromoImage: FC<Props> = ({ desktopSrc, mobileSrc, maxWidth = 1200, quality, onClick: handleClick }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (!handleClick) {
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  const isInteractive = Boolean(handleClick);

  return (
    <div
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{ textAlign: 'center', cursor: isInteractive ? 'pointer' : undefined }}
    >
      <Image src={desktopSrc} priority quality={quality} alt="" className="img-fluid d-none d-sm-inline" style={{ width: '100%', maxWidth }} />
      <Image src={mobileSrc} priority quality={quality} alt="" className="img-fluid d-sm-none" style={{ width: '100%' }} />
    </div>
  );
};
