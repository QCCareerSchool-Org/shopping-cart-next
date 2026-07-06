import Script from 'next/script';
import type { FC } from 'react';

import type { UserValues } from '@/domain/userValues';
import { safeJSON } from '@/lib/safeJSON';

interface Props {
  id: string;
  userValues?: UserValues;
}

export const ActiveCampaign: FC<Props> = ({ id, userValues }) => (
  <Script id="activeCampaign" dangerouslySetInnerHTML={{ __html: getScript(id, userValues) }} />
);

/**
 * Returns the text of the script we want to run
 *
 * When userValues is undefined, you'd see:
 *
 * if (undefined) { // is never true
 *   vgo('setEmail', undefined);
 * }
 *
 * @param id the ActiveCampaign id
 * @param userValues the stored user values
 * @returns the text of the script
 */
const getScript = (id: string, userValues?: UserValues): string => `
(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
vgo('setAccount', ${safeJSON(id)});
vgo('setTrackByDefault', true);
if (${safeJSON(userValues?.emailAddress)}) {
  vgo('setEmail', ${safeJSON(userValues?.emailAddress)});
}
vgo('process');
`;
