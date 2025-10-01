'use client';

import type { FC } from 'react';

import { Hero20251007 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#030406';
const lastChanceDate = Date.UTC(2025, 9, 17, 7); // 2025-10-17T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 9, 18, 7); // 2025-10-18T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const PetStudent20251007Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20251007 />
    </Section>
    <CountDownTimerWrapper
      date={date}
      showDate={lastChanceDate}
      endDate={endDate}
      message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This special offer ends soon!</span>}
      className="bg-primary text-light"
    />
  </>
);
