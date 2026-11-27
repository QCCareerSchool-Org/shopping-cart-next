'use client';

import type { FC } from 'react';

import { HeroStudent20261128 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#fff';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const PetStudent20261128Promo: FC<Props> = ({ date, period }) => {

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <HeroStudent20261128 />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={period.lastChance}
        endDate={period.end}
        message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};
