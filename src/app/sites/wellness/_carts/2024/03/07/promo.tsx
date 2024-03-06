import type { FC } from 'react';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#d7d8dc';
const lastChanceDate = Date.UTC(2024, 2, 12, 4); // 2024-03-12T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 2, 16, 4); // 2024-03-16T00:00 (04:00 UTC)

type Props = {
  date: number;
};

export const Wellness20240307Promo: FC<Props> = ({ date }) => {
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
