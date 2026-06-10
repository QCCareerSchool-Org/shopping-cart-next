'use client';

import type { FC } from 'react';

// import { AllAccessHero } from './hero';
import HeroMobile from './hero-mobile.jpg';
import HeroDesktop from './hero.jpg';
import { AllAccessModal } from './modal';
import { BackgroundImage } from '@/components/backgroundImage';
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
          { /* <AllAccessHero /> */ }
          <section className="bg-navy text-white text-center">
            <BackgroundImage src={HeroDesktop} mobile={{ src: HeroMobile, breakpoint: 'lg' }} priority />
            <div className="container">
              <div className="eyebrow text-shadow mb-3"><strong>Best Value:</strong> Earn Your Elite Design Professional Certification</div>
              <h1 className="text-shadow mb-4">Join the All-Access Program</h1>
              <p className="lead fw-medium text-shadow mb-5">Save 68% or More on Tuition &amp; Maximize Your Earning Potential</p>
              <div className="d-flex justify-content-center gap-4">
                <a className="btn btn-primary shadow">Become an Elite Design Professional</a>
                <a href="#included" className="btn btn-outline-light shadow">See 9 Included Courses</a>
              </div>
            </div>
          </section>
        </div>
      </Section>
      <Section className="text-center">
        <h2>Enroll in the All-Access Program</h2>
      </Section>
      <AllAccessModal show={showPopup} onHide={handleClick} countryCode={countryCode} provinceCode={provinceCode} />
    </>
  );
};
