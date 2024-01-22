import type { FC } from 'react';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#000';
const lastChanceDate = Date.UTC(2024, 0, 28, 5); // 2024-01-28T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 1, 1, 5); // 2024-02-01T00:00 (05:00 UTC)

type Props = {
  date: number;
};

export const DesignStudent20240124Promo: FC<Props> = ({ date }) => {
  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero />
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
