'use client';

import { type FC, useMemo } from 'react';

import { Hero20250305 } from './hero';
import { Wellness20250305Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#d7d8dc';
const extensionDate = Date.UTC(2025, 1, 20, 4); // 2025-02-20T00:00 (04:00 UTC)

type Props = {
  date: number;
};

export const Wellness20250305Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const [ lastChanceDate, endDate ] = useMemo(() => {
    if (date >= extensionDate) {
      return [
        Date.UTC(2025, 1, 21, 8), // 2025-02-21T03:00 (08:00 UTC)
        Date.UTC(2025, 1, 22, 8), // 2025-02-22T03:00 (08:00 UTC)
      ];
    }
    return [
      Date.UTC(2025, 1, 19, 8), // 2025-02-19T03:00 (08:00 UTC)
      Date.UTC(2025, 1, 20, 4), // 2025-02-20T00:00 (08:00 UTC)
    ];
  }, [ date ]);

  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250305 variant={variant} />
        </div>
      </Section>
      <Wellness20250305Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};
