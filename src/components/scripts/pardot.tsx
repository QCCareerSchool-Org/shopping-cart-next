import Script from 'next/script';
import type { FC } from 'react';

type Props = {
  accountId: string;
  campaignId: string;
};

export const Pardot: FC<Props> = ({ accountId, campaignId }) => (
  <Script id="pardot" dangerouslySetInnerHTML={{ __html: getScript(accountId, campaignId) }} />
);

const getScript = (accountId: string, campaignId: string): string => `
piAId = \`${accountId.replace(/`/ug, '\\`')}\`;
picampaignId = \`${campaignId.replace(/`/ug, '\\`')}\`;
piHostname = 'go.qcmakeupacademy.com';

(function() {
  function async_load(){
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
    var c = document.getElementsByTagName('script')[0];
    c.parentNode.insertBefore(s, c);
  }
  if (window.attachEvent) {
    window.attachEvent('onload', async_load);
  }
  else {
    window.addEventListener('load', async_load, false);
  }
})();
`;
