'use client';

import type { FC } from 'react';

import { Hero20250129 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#84796c';
const lastChanceDate = Date.UTC(2025, 0, 17, 8); // 2025-01-17T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 0, 18, 8); // 2025-01-18T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const DesignStudent20250129Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20250129 />
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
