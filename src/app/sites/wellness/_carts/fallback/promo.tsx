import type { FC } from 'react';

import { Hero } from './hero';
import { Banner } from '@/components/banner';
import { Section } from '@/components/section';

const backgroundColor = '#d7d8dc';

export const WellnessFallbackPromo: FC = () => {

  const handleClick = (): void => {
    //
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero />
      </Section>
      <Banner onClick={handleClick} badgeImageSrc={null} hideLink>
        You'll Also Receive <strong>50% Off Each Additional Course</strong>
      </Banner>
    </>
  );
};
