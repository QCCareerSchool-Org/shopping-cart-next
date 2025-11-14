import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC, MouseEventHandler, ReactNode } from 'react';

import FallbackBadgeImage from './badge.png';
import styles from './banner.module.scss';
import FallbackLastChanceImage from './last-chance.png';

type Props = {
  variant?: 'lastChance';
  onClick: () => void;
  backgroundColor?: CSSProperties['backgroundColor'];
  badgeImageSrc?: StaticImageData;
  lastChanceImageSrc?: StaticImageData;
  text: string | ReactNode;
};

export const Banner: FC<Props> = ({ variant, onClick, text, backgroundColor, badgeImageSrc, lastChanceImageSrc }) => {
  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    onClick();
  };

  const badgeImage = badgeImageSrc ?? FallbackBadgeImage;
  const lastChanceImage = lastChanceImageSrc ?? FallbackLastChanceImage;

  return (
    <div className={styles.wrapper} onClick={handleClick} style={{ backgroundColor: backgroundColor ?? 'black' }}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="me-2">
            {variant === 'lastChance'
              ? <Image src={lastChanceImage} height="64" alt="Last Chance" />
              : <Image src={badgeImage} height="48" alt="" />
            }
          </div>
          <div>
            <span className="me-2">{text} |</span><a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};
