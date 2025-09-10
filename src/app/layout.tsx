import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Open_Sans, Playfair_Display } from 'next/font/google';
import { headers } from 'next/headers';
import Script from 'next/script';

import type { GeoLocation } from '@/domain/geoLocation';
import { defaultGeoLocation } from '@/domain/geoLocation';
import { neueHaasDisplay, neueHaasText } from '@/fonts';
import { fetchCountries, fetchProvinces } from '@/lib/fetch';
import { needsProvince } from '@/lib/needProvince';
import { Provider } from '@/providers';
import type { LayoutComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Enroll Online - QC Career School',
};

const playfairDisplay = Playfair_Display({
  display: 'swap',
  weight: [ '700' ],
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
  const headerList = headers();

  const countryCodeHeader = headerList.get('x-vercel-ip-country') ?? 'US';
  const provinceCodeHeader = headerList.get('x-vercel-ip-country-region');

  const geoLocation: GeoLocation = countryCodeHeader ? { countryCode: countryCodeHeader, provinceCode: provinceCodeHeader } : defaultGeoLocation;

  const provinceRequired = needsProvince(geoLocation.countryCode);

  const [ countries, provinces ] = await Promise.all([
    fetchCountries(),
    provinceRequired ? fetchProvinces(geoLocation.countryCode) : Promise.resolve([]),
  ]);

  if (!countries) {
    throw Error('Couldn\'t fetch countries');
  }

  if (!provinces || (provinceRequired && provinces.length === 0)) {
    throw Error('Couldn\'t fetch provinces');
  }

  // replace invalid province code
  if (provinceRequired) {
    if (!provinces.some(p => p.code === geoLocation.provinceCode)) {
      geoLocation.provinceCode = provinces[0].code;
    }
  } else {
    geoLocation.provinceCode = null;
  }

  return (
    <Provider geoLocation={geoLocation} countries={countries} provinces={provinces}>
      <html lang="en" className={`${openSans.variable} ${playfairDisplay.variable} ${neueHaasText.variable} ${neueHaasDisplay.variable}`}>
        <head>
          {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
          <Script id="paysafe" src="https://hosted.paysafe.com/js/v1/latest/paysafe.min.js" strategy="beforeInteractive" />
        </head>
        <body>{children}</body>
      </html>
    </Provider>
  );
};

export default RootLayout;
