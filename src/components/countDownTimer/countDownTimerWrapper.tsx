'use client';

import { detect } from 'detect-browser';
import type { CSSProperties, FC, ReactElement } from 'react';
import { memo, useEffect, useRef, useState } from 'react';

import { CountDownTimer } from './countDownTimer';
import styles from './countDownTimerWrapper.module.css';

const browser = detect();

interface Props {
  date: number;
  showDate: number;
  endDate: number;
  message?: string | ReactElement;
  buttonInverse?: boolean;
  className?: string;
  style?: CSSProperties;
  newHaus?: boolean;
}

export const CountDownTimerWrapper: FC<Props> = memo(({ date, showDate, endDate, message, buttonInverse = false, className, style, newHaus }) => {
  const [ closed, setClosed ] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [ scrolledPast, setScrolledPast ] = useState(false);
  const [ fixed, setFixed ] = useState(false);

  const [ now, setNow ] = useState(date);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(n => n + 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [ endDate ]);

  useEffect(() => {
    const element = wrapperRef.current;
    if (element) {
      const scrollListener = (): void => {
        const show = element.offsetTop <= window.scrollY + 1;
        if (browser?.os === 'iOS' && browser.name === 'safari') {
          setScrolledPast(show); // set scrolledPast for eventual change
        } else {
          setFixed(show); // set immediately
        }
      };
      scrollListener();
      window.addEventListener('scroll', scrollListener);
      return () => window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  // delay calling setFixed to avoid iOS Safari visual glitch when scrolling up
  useEffect(() => {
    const id = setTimeout(() => {
      setFixed(scrolledPast);
    }, 200);
    return () => clearTimeout(id);
  }, [ scrolledPast ]);

  const showTimer = now >= showDate && now < endDate;

  const handleClick = (): void => {
    setClosed(true);
  };

  return (
    <div ref={wrapperRef} className={`${styles.wrapper} ${className ?? ''} ${fixed && !closed ? styles.fixed : ''} ${newHaus ? styles.newHaus : ''}`} style={style}>
      {showTimer && (
        <div className={styles.padding}>
          {fixed && (
            <div className={styles.button}>
              <button onClick={handleClick} style={{ position: 'relative', top: 2, left: 2 }} className={`${styles.close} btn-close ${buttonInverse ? styles.inverse : ''}`} aria-label="Close" />
            </div>
          )}
          {fixed && message && <div className={styles.message}>{message}</div>}
          <CountDownTimer now={now} endDate={endDate} />
        </div>
      )}
    </div>
  );
});

CountDownTimerWrapper.displayName = 'CountDownTimerWrapper';
