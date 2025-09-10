import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';

import BadgeImage from './badge.png';
import styles from './banner.module.scss';
import LastChanceImage from './last-chance.png';

type Props = {
  variant?: 'lastChance';
  onClick: () => void;
};

export const Banner: FC<Props> = ({ variant, onClick }) => {
  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    onClick();
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="me-2">
            {variant === 'lastChance'
              ? <Image src={LastChanceImage} height="52" alt="Last Chance" />
              : <Image src={BadgeImage} height="52" alt="" />
            }
          </div>
          <div>
            <span className="me-2"><b>Save up to $550!</b> + <b>Free</b> career essentials collection</span> <a href="#">learn more</a>
          </div>
        </div>
      </div>
    </div>
  );

};
