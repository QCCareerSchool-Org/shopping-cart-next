import type { FC } from 'react';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#d7d8dc';
const lastChanceDate = Date.UTC(2024, 0, 1, 5); // 2024-01-01T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 0, 6, 5); // 2024-01-06T00:00 (05:00 UTC)

interface Props {
  date: number;
}

export const Wellness20231226Promo: FC<Props> = ({ date }) => {
  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero lastChance={date >= lastChanceDate} />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This new year offer ends soon! 🎇🎉</span>}
        className="bg-primary text-light"
      />
    </>
  );
};
