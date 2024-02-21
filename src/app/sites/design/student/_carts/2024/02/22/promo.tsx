'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { DesignStudent20240222Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#000';
const lastChanceDate = Date.UTC(2024, 1, 26, 5); // 2024-02-26T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 2, 1, 5); // 2024-03-01T00:00 (05:00 UTC)

type Props = {
  date: number;
};

export const DesignStudent20240222Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

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
      <DesignStudent20240222Modal show={showPopup} onHide={handleClick} />
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
