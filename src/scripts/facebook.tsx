import Script from 'next/script';
import type { FC } from 'react';

import type { UserValues } from '@/domain/userValues';
import type { InitParams } from '@/lib/fbq';
import { normalizeCity, normalizeEmailAddress, normalizeName, normalizeState, normalizeTelephoneNumber } from '@/lib/hash';

interface Props {
  id: string;
  userValues?: UserValues;
}

export const Facebook: FC<Props> = ({ id, userValues }) => (
  <>
    <Script id="facebook" dangerouslySetInnerHTML={{ __html: getScript(id, userValues) }} />
    <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${encodeURIComponent(id)}&ev=PageView&noscript=1" alt="" />` }} />
  </>
);

const getScript = (id: string, userValues?: UserValues): string => {
  const params: InitParams = {};
  if (userValues?.emailAddress) {
    params.em = normalizeEmailAddress(userValues.emailAddress);
  }
  if (userValues?.firstName) {
    params.fn = normalizeName(userValues.firstName);
  }
  if (userValues?.lastName) {
    params.ln = normalizeName(userValues.lastName);
  }
  if (userValues?.city) {
    params.ct = normalizeCity(userValues.city);
  }
  if (userValues?.provinceCode) {
    params.st = normalizeState(userValues.provinceCode);
  }
  if (userValues?.countryCode) {
    params.country = userValues.countryCode.toLowerCase();
  }
  if (userValues?.telephoneNumber) {
    params.ph = normalizeTelephoneNumber(userValues.telephoneNumber);
  }

  return `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', \`${id.replace(/`/ug, '\\`')}\`, ${JSON.stringify(params)});
fbq('track', 'PageView');
`;
};
