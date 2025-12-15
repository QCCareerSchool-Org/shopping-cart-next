import type { FC } from 'react';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#d7d8dc';
const lastChanceDate = Date.UTC(2024, 8, 17, 4); // 2024-09-17T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 8, 21, 4); //  2024-09-21T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const Wellness20240912Promo: FC<Props> = ({ date }) => {
  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero lastChance={date >= lastChanceDate} />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};
