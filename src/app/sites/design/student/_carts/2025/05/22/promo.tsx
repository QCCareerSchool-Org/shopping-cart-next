'use client';

import type { FC } from 'react';

import { Hero20250522 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#88817b';
const lastChanceDate = Date.UTC(2025, 4, 30, 7); // 2025-05-30T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 4, 31, 7); // 2025-05-31T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const DesignStudent20250522Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20250522 />
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
