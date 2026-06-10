'use client';

import type { FC } from 'react';

import { AllAccessHero } from './hero';
import { AllAccessModal } from './modal';
import { Section } from '@/components/section';
import { useAddressState } from '@/hooks/useAddressState';
import { useToggle } from '@/hooks/useToggle';
// import { audCountry, gbpCountry, nzdCountry } from '@/lib/currencies';

const backgroundColor = '#030419';

export const AllAccessPromo: FC = () => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const { countryCode, provinceCode } = useAddressState();

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
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
