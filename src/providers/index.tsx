import type { FC, PropsWithChildren } from 'react';

import { AddressProvider } from './addressProvider';
import { BillingAddressProvider } from './billingAddressProvider';
import { CaptchaProvider } from './captchaProvider';
import { CountriesProvider } from './countriesProvider';
import { CoursesProvider } from './coursesProvider';
import { ErrorsProvider } from './errorsProvider';
import { MetaProvider } from './metaProvider';
import { OverridesProvider } from './overridesProvider';
import { PaymentProvider } from './paymentProvider';
import { PriceProvider } from './priceProvider';
import { ScreenWidthProvider } from './screenWidthProvider';
import { ScrollPositionProvider } from './scrollPositionProvider';
import type { Country } from '@/domain/country';
import type { GeoLocation } from '@/domain/geoLocation';
import type { Province } from '@/domain/province';

interface Props {
  geoLocation: GeoLocation;
  countries: Country[];
  provinces: Province[];
}

export const Provider: FC<PropsWithChildren<Props>> = ({ geoLocation, countries, provinces, children }) => (
  <ErrorsProvider>
    <CountriesProvider countries={countries}>
      <CoursesProvider>
        <PriceProvider>
          <AddressProvider geoLocation={geoLocation} provinces={provinces}>
            <BillingAddressProvider geoLocation={geoLocation} provinces={provinces}>
              <PaymentProvider>
                <OverridesProvider>
                  <MetaProvider>
                    <ScreenWidthProvider>
                      <ScrollPositionProvider>
                        <CaptchaProvider>
                          {children}
                        </CaptchaProvider>
                      </ScrollPositionProvider>
                    </ScreenWidthProvider>
                  </MetaProvider>
                </OverridesProvider>
              </PaymentProvider>
            </BillingAddressProvider>
          </AddressProvider>
        </PriceProvider>
      </CoursesProvider>
    </CountriesProvider>
  </ErrorsProvider>
);
