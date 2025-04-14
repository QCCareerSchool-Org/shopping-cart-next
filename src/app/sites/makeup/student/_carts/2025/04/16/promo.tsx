'use client';

import type { FC } from 'react';

import { Hero20250416 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#333845';
const lastChanceDate = Date.UTC(2025, 3, 18, 7); // 2025-04-18T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 3, 19, 7); // 2025-04-19T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const MakeupStudent20250416Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20250416 />
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
