'use client';

import Link from 'next/link';
import type { FC } from 'react';

import { LDHero } from './hero';
import { LDModal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#010427';
const lastChanceDate = Date.UTC(2025, 8, 19, 7); // 2025-09-19T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 8, 20, 7); // 2025-09-20T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const LDPromo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <LDHero />
        </div>
      </Section>
      <LDModal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-black text-light"
        newHaus
      />
    </>
  );
};
