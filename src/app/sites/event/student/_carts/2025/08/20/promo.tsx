'use client';

import type { FC } from 'react';

import { Hero20250820 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#4a5059';
const lastChanceDate = Date.UTC(2025, 7, 1, 7); // 2025-08-01T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 7, 2, 7); // 2025-08-02T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const EventStudent20250820Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20250820 />
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
