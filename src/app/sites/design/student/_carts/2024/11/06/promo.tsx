import type { FC } from 'react';

import { Hero20241106 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#454344';
const lastChanceDate = Date.UTC(2024, 10, 10, 5); // 2024-11-10T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 10, 13, 5); // 2024-11-13T00:00 (05:00 UTC)

interface Props {
  date: number;
}

export const DesignStudent20241106Promo: FC<Props> = ({ date }) => {
  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero20241106 />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This special offer ends soon!</span>}
        className="bg-black text-light"
      />
    </>
  );
};
