'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import type { FC } from 'react';

import type { UserValues } from '@/domain/userValues';
import type { GAUserData } from '@/lib/gtag';

interface Props {
  id: string;
  adsId?: string;
  userValues?: UserValues;
}

export const GoogleAnalytics: FC<Props> = ({ id, adsId, userValues }) => (
  <>
    <NextGoogleAnalytics gaId={id} />
    {adsId && <Script id="google-analytics-google-ads" dangerouslySetInnerHTML={{ __html: getAdsScript(adsId) }} />}
    {userValues && <Script id="google-analytics-set" dangerouslySetInnerHTML={{ __html: getSetScript(userValues) }} />}
  </>
);

const getAdsScript = (adsId: string): string => {
  return `gtag('config', \`${adsId.replace(/`/ug, '\\`')}\`, { allow_enhanced_conversions: true });\n`;
};

const getSetScript = (userValues: UserValues): string => {
  if (!userValues.emailAddress) {
    return '';
  }
  const params: GAUserData = {
    email: userValues.emailAddress,
  };

  if (userValues.telephoneNumber) {
    // eslint-disable-next-line camelcase
    params.phone_number = userValues.telephoneNumber.replace(/\D/gu, '');
  }

  if (userValues.firstName || userValues.lastName || userValues.city || userValues.provinceCode || userValues.countryCode) {
    params.address = {};
    if (userValues.firstName) {
      // eslint-disable-next-line camelcase
      params.address.first_name = userValues.firstName.toLowerCase();
    }
    if (userValues.lastName) {
      // eslint-disable-next-line camelcase
      params.address.last_name = userValues.lastName.toLowerCase();
    }
    if (userValues.city) {
      params.address.city = userValues.city.toLowerCase();
    }
    if (userValues.provinceCode) {
      params.address.region = userValues.provinceCode.toLowerCase();
    }
    if (userValues.countryCode) {
      params.address.country = userValues.countryCode.toLowerCase();
    }
  }

  return `gtag('set', 'user_data', ${JSON.stringify(params)})`;
};
