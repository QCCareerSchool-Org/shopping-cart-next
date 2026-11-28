import Script from 'next/script';
import type { FC } from 'react';

import type { UserValues } from '@/domain/userValues';
import type { GAUserData } from '@/lib/gtag';
import { isE164 } from '@/lib/gtag';
import { safeJSON } from '@/lib/safeJSON';

interface Props {
  id: string;
  adsId?: string;
  userValues?: UserValues;
}

export const GoogleAnalytics: FC<Props> = ({ id, adsId, userValues }) => (
  <>
    <Script id="google-tag-init" dangerouslySetInnerHTML={{ __html: getInitScript(id, adsId, userValues) }} />
    <Script id="google-tag" src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`} />
  </>
);

/**
 * Commands are queued in order, so user_data must be set before the config
 * commands or the initial page_view hits will be sent without it.
 */
const getInitScript = (id: string, adsId?: string, userValues?: UserValues): string => {
  let script = 'window.dataLayer = window.dataLayer || [];\n'
    + 'function gtag(){dataLayer.push(arguments);}\n'
    + 'gtag(\'js\', new Date());\n';

  if (userValues) {
    script += getSetScript(userValues);
  }

  script += `gtag('config', ${safeJSON(id)});\n`;

  if (adsId) {
    script += `gtag('config', ${safeJSON(adsId)}, { allow_enhanced_conversions: true });\n`;
  }

  return script;
};

const getSetScript = (userValues: UserValues): string => {
  if (!userValues.emailAddress) {
    return '';
  }

  const address: NonNullable<GAUserData['address']> = {
    ...(userValues.firstName ? { first_name: userValues.firstName.toLowerCase() } : undefined), // eslint-disable-line camelcase
    ...(userValues.lastName ? { last_name: userValues.lastName.toLowerCase() } : undefined), // eslint-disable-line camelcase
    ...(userValues.city ? { city: userValues.city.toLowerCase() } : undefined),
    ...(userValues.provinceCode ? { region: userValues.provinceCode.toLowerCase() } : undefined),
    ...(userValues.countryCode ? { country: userValues.countryCode.toLowerCase() } : undefined),
  };

  const params: GAUserData = {
    email: userValues.emailAddress,
    // phone numbers are normalized before being stored in the cookie, but older cookies may contain free-form values
    ...(userValues.telephoneNumber && isE164(userValues.telephoneNumber) ? { phone_number: userValues.telephoneNumber } : undefined), // eslint-disable-line camelcase
    ...(Object.keys(address).length ? { address } : undefined),
  };

  return `gtag('set', 'user_data', ${safeJSON(params)});\n`;
};
