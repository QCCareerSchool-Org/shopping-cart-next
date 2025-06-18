import type { FC } from 'react';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';

const delayMs = 4_000;
const interval = 300;

type Props = {
  scrollPosition: number;
  maxScroll: number;
};

export const Icon: FC<Props> = ({ scrollPosition, maxScroll }) => {
  const [ elapsedTime, setElapsedTime ] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setElapsedTime(e => e + interval), interval);
    const listener = (): void => setElapsedTime(0);
    window.addEventListener('keypress', listener);
    window.addEventListener('scroll', listener);
    return () => {
      clearInterval(id);
      window.removeEventListener('keypress', listener);
      window.removeEventListener('scroll', listener);
    };
  }, []);

  if (elapsedTime >= delayMs && scrollPosition <= maxScroll) {
    return (
      <div className={styles.container}>
        <div className={styles.arrow} />
        <div className={styles.arrow} />
      </div>
    );
  }
};
