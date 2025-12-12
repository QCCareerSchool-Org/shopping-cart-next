'use client';

import type { FC } from 'react';

import { Hero20251103 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#0f141a';
const lastChanceDate = Date.UTC(2025, 10, 7, 8); // 2025-11-07T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 10, 8, 8); // 2025-11-08T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const DesignStudent20251103Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20251103 />
    </Section>
    <CountDownTimerWrapper
      date={date}
      showDate={lastChanceDate}
      endDate={endDate}
      message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
      className="bg-black text-light"
    />
  </>
);
