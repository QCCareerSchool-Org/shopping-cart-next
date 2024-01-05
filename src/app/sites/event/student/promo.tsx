import type { FC } from 'react';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

type Props = {
  date: number;
  lastChanceDate: number;
  endDate: number;
  newYears: boolean;
};

export const EventStudentPromo: FC<Props> = ({ date, lastChanceDate, endDate, newYears }) => {
  const backgroundColor = newYears ? '#84796c' : '#727274';
  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero newYears={newYears} />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This new year offer ends soon! 🎇🎉</span>}
        className="bg-black text-light"
      />
    </>
  );
};
