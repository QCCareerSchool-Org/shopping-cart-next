import type { FC } from 'react';
import React, { memo } from 'react';

import { calculateParts } from './calculateParts';
import { CountDownDigits } from './countDownDigits';
import styles from './countDownTimer.module.css';

type Props = {
  now: number;
  endDate: number;
};

export const CountDownTimer: FC<Props> = memo(({ now, endDate }) => {
  const timeRemaining = endDate - now;

  if (timeRemaining <= 0) {
    return null;
  }

  const { days, hours, minutes, seconds } = calculateParts(timeRemaining);

  const daysMuted = days === 0;
  const hoursMuted = daysMuted && hours === 0;
  const minutesMuted = hoursMuted && minutes === 0;

  return (
    <div className={styles.timer}>
      <CountDownDigits label="Days" value={days} muted={daysMuted} />
      <CountDownDigits label="Hours" value={hours} muted={hoursMuted} />
      <CountDownDigits label="Minutes" value={minutes} muted={minutesMuted} />
      <CountDownDigits label="Seconds" value={seconds} />
    </div>
  );
});

CountDownTimer.displayName = 'CountDownTimer';
