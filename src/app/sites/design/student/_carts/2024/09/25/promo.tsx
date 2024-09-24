'use client';

import type { FC } from 'react';
import { useMemo } from 'react';

import { Hero } from './hero';
import { DesignStudent20240925Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#423f38';
const lastChanceDate = Date.UTC(2024, 7, 26, 4); // 2024-08-26T00:00 (04:00 UTC)
const firstEndDate = Date.UTC(2024, 7, 31, 4); //  2024-08-31T00:00 (04:00 UTC)
const secondEndDate = Date.UTC(2024, 8, 7, 4); // 2024-09-07T00:00 (04:00 UTC)

type Props = {
  date: number;
};

export const DesignStudent20240925Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const endDate = useMemo(() => (date < firstEndDate ? firstEndDate : secondEndDate), [ date ]);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero />
        </div>
      </Section>
      <DesignStudent20240925Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This special offer ends soon!</span>}
        className="bg-black text-light"
      />
    </>
  );
};
