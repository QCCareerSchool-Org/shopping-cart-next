import type { FC } from 'react';

import styles from './countDownDigits.module.css';

interface Props {
  label: string;
  value: number;
  muted?: boolean;
}

export const CountDownDigits: FC<Props> = ({ label, value, muted = false }) => (
  <div className={styles.digitGroup}>
    <div className={`${styles.digitWrapper} ${muted ? styles.muted : ''}`}>
      <div className={styles.digit}>{firstDigit(value)}</div>
      <div className={styles.digit}>{secondDigit(value)}</div>
    </div>
    <div><small className={styles.label}>{label}</small></div>
  </div>
);

const firstDigit = (n: number): number => {
  return Math.floor(n / 10);
};

const secondDigit = (n: number): number => {
  return n % 10;
};
