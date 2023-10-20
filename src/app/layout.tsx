import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Open_Sans, Playfair_Display } from 'next/font/google';
import type { FC, PropsWithChildren } from 'react';

import { defaultGeoLocation } from '@/domain/geoLocation';
import { fetchCountries, fetchGeoLocation, fetchProvinces } from '@/lib/fetch';
import { StateProvider } from '@/providers/stateProvider';

export const metadata: Metadata = {
  title: 'QC Career School',
};

const playfairDisplay = Playfair_Display({
  display: 'swap',
  weight: [ '500' ],
  subsets: [ 'latin' ],
  variable: '--qc-playfair-display',
});

const openSans = Open_Sans({
  display: 'swap',
  weight: [ '300', '400', '500' ],
  subsets: [ 'latin' ],
  variable: '--qc-open-sans',
});

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const [ detectedGeoLocation, countries ] = await Promise.all([
    fetchGeoLocation(),
    fetchCountries(),
  ]);
  const geoLocation = detectedGeoLocation ?? defaultGeoLocation;
  if (!countries) {
    throw Error('Couldn\'t fetch countries');
  }
  const provinces = await fetchProvinces(geoLocation.countryCode);
  if (!provinces) {
    throw Error('Couldn\'t fetch provinces');
  }
  return (
    <StateProvider geoLocation={geoLocation} countries={countries} provinces={provinces}>
      <html lang="en" className={`${openSans.variable} ${playfairDisplay.variable}`}>
        <body>{children}</body>
      </html>
    </StateProvider>
  );
};

export default RootLayout;
