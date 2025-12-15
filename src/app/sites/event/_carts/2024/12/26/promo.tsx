'use client';

import type { FC } from 'react';
import { useMemo } from 'react';

import { Hero20241226 } from './hero';
import { Event20241226Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#1b1b1b';
const extensionDate = Date.UTC(2025, 0, 4, 8); // 2024-01-04T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const Event20241226Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const [ lastChanceDate, endDate, variant ] = useMemo(() => {
    if (date < extensionDate) {
      const lcDate = Date.UTC(2025, 0, 3, 8); // 2025-01-03T03:00 (08:00 UTC);
      return [
        lcDate,
        extensionDate,
        date >= lcDate ? 'lastChance' as const : undefined,
      ];
    }
    const lcDate = Date.UTC(2025, 0, 5, 8); // 2025-01-05T03:00 (08:00 UTC);
    return [
      lcDate,
      Date.UTC(2025, 0, 6, 8), // 2024-01-04T03:00 (08:00 UTC)
      date >= lcDate ? 'lastChance' as const : 'extended' as const,
    ];
  }, [ date ]);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20241226 variant={variant} />
        </div>
      </Section>
      <Event20241226Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />
    </>
  );
};
