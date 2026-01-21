import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC, MouseEventHandler, PropsWithChildren } from 'react';

import FallbackBadgeImage from './badge.png';
import styles from './banner.module.scss';
import FallbackLastChanceImage from './last-chance.png';

interface Props {
  variant?: 'lastChance';
  onClick: () => void;
  backgroundColor?: CSSProperties['backgroundColor'];
  badgeImageSrc?: StaticImageData | null;
  lastChanceImageSrc?: StaticImageData | null;
  hideLink?: boolean;
}

export const Banner: FC<PropsWithChildren<Props>> = ({ variant, onClick, backgroundColor, badgeImageSrc, lastChanceImageSrc, hideLink, children }) => {
  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    onClick();
  };

  const badgeImage = badgeImageSrc === null ? null : badgeImageSrc ?? FallbackBadgeImage;
  const lastChanceImage = lastChanceImageSrc === null ? null : lastChanceImageSrc ?? FallbackLastChanceImage;

  return (
    <div className={styles.wrapper} onClick={handleClick} style={{ backgroundColor: backgroundColor ?? 'black' }}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 64 }}>
            {variant === 'lastChance'
              ? <>{lastChanceImage !== null && <div className="me-2"><Image src={lastChanceImage} height="64" alt="Last Chance" /></div>}</>
              : <>{badgeImage !== null && <div className="me-2"><Image src={badgeImage} height="48" alt="" /></div>}</>
            }
          </div>
          <div className="d-flex">
            <span className="text-center"><span className="me-2">{children}</span>{!hideLink && <><span className="me-2">|</span><a href="#">Learn More</a></>}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
