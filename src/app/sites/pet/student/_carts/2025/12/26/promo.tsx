'use client';

import type { FC } from 'react';

import { Hero20251226 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#ED6E79';
const lastChanceDate = Date.UTC(2026, 0, 2, 8); // 2026-01-02T03:00 (08:00 UTC)
const endDate = Date.UTC(2026, 0, 3, 8); // 2026-01-03T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const PetStudent20251226Promo: FC<Props> = ({ date }) => {

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero20251226 />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};
