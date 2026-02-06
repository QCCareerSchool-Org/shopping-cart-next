import Script from 'next/script';
import type { FC } from 'react';

import type { UserValues } from '@/domain/userValues';
import type { UETUserData } from '@/lib/uet';
import { uetStandardizeEmailAddress } from '@/lib/uet';

interface Props {
  id: string;
  userValues?: UserValues;
}

export const Bing: FC<Props> = ({ id, userValues }) => (
  <>
    <Script id="bing-uet" dangerouslySetInnerHTML={{ __html: getScript(id) }} />
    {userValues && <Script id="bing-uet-enhanced" dangerouslySetInnerHTML={{ __html: getEnchancedScript(userValues) }} />}
  </>
);

const getScript = (id: string): string => `
(function(w,d,t,r,u) {
  var f,n,i;
  w[u]=w[u]||[],f=function() {
    var o={ti:\`${id.replace(/`/ug, '\\`')}\`, enableAutoSpaTracking: true};
    o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
  },
  n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function() {
    var s=this.readyState;
    s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
  },
  i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
})(window,document,"script","//bat.bing.com/bat.js","uetq");
`;

const getEnchancedScript = (userValues: UserValues) => {
  const enhancedData: UETUserData = {};
  if (userValues.emailAddress) {
    enhancedData.em = uetStandardizeEmailAddress(userValues.emailAddress);
  }
  if (userValues.telephoneNumber) {
    enhancedData.ph = userValues.telephoneNumber;
  }
  return `
window.uetq = window.uetq || [];
window.uetq.push('set', {
  pid: ${JSON.stringify(enhancedData)},
});
`;
};
