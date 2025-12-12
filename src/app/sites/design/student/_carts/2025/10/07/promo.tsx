'use client';

import type { FC } from 'react';

import { Hero20251007 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#0f141a';
const lastChanceDate = Date.UTC(2025, 7, 1, 7); // 2025-08-01T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 7, 2, 7); // 2025-08-02T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const DesignStudent20251007Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20251007 />
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
