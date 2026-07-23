import Script from 'next/script';
import type { FC } from 'react';

import type { School } from '@/domain/school';
import type { UserValues } from '@/domain/userValues';
import { safeJSON } from '@/lib/safeJSON';

interface Props {
  school: School;
  license: string;
  group?: string;
  userValues?: UserValues;
}

export const LiveChat: FC<Props> = ({ school, license, group, userValues }) => (
  <>
    <Script id="livechat" dangerouslySetInnerHTML={{ __html: getScript(school, license, group, userValues) }} />
    <noscript>
      <a href={`https://www.livechat.com/chat-with/${license}/`} rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noreferrer nofollow" target="_blank">LiveChat</a>
    </noscript>
  </>
);

const getScript = (school: School, license: string, group?: string, userValues?: UserValues): string => `
window.__lc = window.__lc || {};
window.__lc.license = ${safeJSON(license)};
${group ? `window.__lc.group = ${safeJSON(group)};` : ''}
window.__lc.integration_name = "manual_onboarding";
window.__lc.product_name = "livechat";
window.__lc.chat_between_groups = false;
window.__lc.ga_version = 'gtag';
window.__lc.params = window.__lc.params || [];
window.__lc.params.push({ name: 'school', value: ${safeJSON(school)} });
${getStoredData(userValues)}
;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
`;

const getStoredData = (userValues?: UserValues): string | undefined => {
  if (!userValues) {
    return;
  }

  let customCode = Object.entries(userValues)
    .filter(([ , value ]) => value)
    .map(([ key, value ]) => `window.__lc.params.push({ name: ${safeJSON(`stored_${key}`)}, value: ${safeJSON(value)} });`)
    .join('\n');

  if (userValues.firstName || userValues.emailAddress) {
    const values = {
      ...(userValues.firstName ? { name: userValues.firstName } : undefined),
      ...(userValues.emailAddress ? { email: userValues.emailAddress } : undefined),
    };

    customCode += `
window.__lc.visitor = ${safeJSON(values)}`;
  }

  return customCode;
};
