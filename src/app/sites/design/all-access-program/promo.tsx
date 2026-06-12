'use client';

import type { FC } from 'react';

import { AllAccessHero } from './hero';
import { AllAccessModal } from './modal';
import { Section } from '@/components/section';
import { useAddressState } from '@/hooks/useAddressState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#25231F';

export const AllAccessPromo: FC = () => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const { countryCode, provinceCode } = useAddressState();

  if (countryCode === 'CA' && provinceCode === 'ON') {
    return null;
  }

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      {countryCode}{provinceCode}
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <AllAccessHero />
        </div>
      </Section>
      <Section className="text-center">
        <h2>Enroll in the All-Access Program</h2>
      </Section>
      <AllAccessModal show={showPopup} onHide={handleClick} countryCode={countryCode} provinceCode={provinceCode} />
    </>
  );
};
