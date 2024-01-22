import type { FC } from 'react';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#d7d8dc';
const lastChanceDate = Date.UTC(2023, 11, 11, 5); // 2023-12-11T00:00 (05:00 UTC)
const endDate = Date.UTC(2023, 11, 16, 5); // 2023-12-16T00:00 (05:00 UTC)

type Props = {
  date: number;
};

export const Wellness20231206Promo: FC<Props> = ({ date }) => {
  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero lastChance={date >= lastChanceDate} />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This holiday offer ends soon! 🔔⛄</span>}
        className="bg-black text-light"
      />
    </>
  );
};
