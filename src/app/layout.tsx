import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Open_Sans, Playfair_Display } from 'next/font/google';
import Script from 'next/script';

import { defaultGeoLocation } from '@/domain/geoLocation';
import type { Province } from '@/domain/province';
import { fetchCountries, fetchGeoLocation, fetchProvinces } from '@/lib/fetch';
import { needsProvince } from '@/lib/needProvince';
import { Provider } from '@/providers';
import type { LayoutComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Enroll Online - QC Career School',
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

const RootLayout: LayoutComponent = async ({ children }) => {
  const [ detectedGeoLocation, countries ] = await Promise.all([
    fetchGeoLocation(),
    fetchCountries(),
  ]);

  const geoLocation = detectedGeoLocation ?? defaultGeoLocation;

  if (!countries) {
    throw Error('Couldn\'t fetch countries');
  }

  let provinces: Province[];

  if (needsProvince(geoLocation.countryCode)) {
    const provincesResult = await fetchProvinces(geoLocation.countryCode);
    if (!provincesResult || provincesResult.length === 0) {
      throw Error('Couldn\'t fetch provinces');
    }

    provinces = provincesResult;

    // replace invalid province code
    if (!provinces.some(p => p.code === geoLocation.provinceCode)) {
      geoLocation.provinceCode = provinces[0].code;
    }
  } else {
    geoLocation.provinceCode = null;
    provinces = [];
  }

  return (
    <Provider geoLocation={geoLocation} countries={countries} provinces={provinces}>
      <html lang="en" className={`${openSans.variable} ${playfairDisplay.variable}`}>
        <head>
          {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
          <Script id="paysafe" src="https://hosted.paysafe.com/js/v1/latest/paysafe.min.js" strategy="beforeInteractive" />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          {/* <script id="paysafe" src="https://hosted.paysafe.com/js/v1/latest/paysafe.min.js" /> */}
        </head>
        <body>{children}</body>
      </html>
    </Provider>
  );
};

export default RootLayout;
