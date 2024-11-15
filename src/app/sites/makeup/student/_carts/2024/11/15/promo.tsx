'use client';

import type { FC } from 'react';

import { Hero20241115 } from './hero';
import { MakeupStudent20241115Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#130f0e';
const lastChanceDate = Date.UTC(2024, 10, 10, 5); // 2024-11-10T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 10, 13, 5); // 2024-11-13T00:00 (05:00 UTC)

type Props = {
  date: number;
};

export const MakeupStudent20241115Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20241115 />
        </div>
      </Section>
      <MakeupStudent20241115Modal show={showPopup} onHide={handleClick} />
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
