import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

/** how long to wait before showing the indicator the first time  */
const initialDelayMs = 5_000;
/** how long to wait before showing the indicator subsequent times  */
const subsequentDelayMs = 15_000;
/** how often to update the elapsed time */
const interval = 300;

type Props = {
  scrolledFarEnough: boolean;
};

export const Tracker: FC<PropsWithChildren<Props>> = ({ scrolledFarEnough, children }) => {
  const [ elapsedTime, setElapsedTime ] = useState(0);
  const [ delayMs, setDelayMs ] = useState(initialDelayMs);

  const show = elapsedTime >= delayMs && !scrolledFarEnough;

  useEffect(() => {
    const id = setInterval(() => setElapsedTime(e => e + interval), interval);
    const listener = (): void => {
      setElapsedTime(0);
      if (show) {
        setDelayMs(subsequentDelayMs);
      }
    };
    window.addEventListener('click', listener);
    window.addEventListener('keypress', listener);
    window.addEventListener('scroll', listener);
    return () => {
      clearInterval(id);
      window.removeEventListener('click', listener);
      window.removeEventListener('keypress', listener);
      window.removeEventListener('scroll', listener);
    };
  }, [ show ]);

  if (show) {
    return <>{children}</>;
  }
};
