import Script from 'next/script';
import type { FC } from 'react';

type Props = {
  license: number;
  group: number;
};

export const LiveChat: FC<Props> = ({ license, group }) => (
  <>
    <Script id="livechat" dangerouslySetInnerHTML={{ __html: getScript(license, group) }} />
    <noscript>
      <a href={`https://www.livechat.com/chat-with/${license}/`} rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noreferrer nofollow" target="_blank">LiveChat</a>
    </noscript>
  </>
);

const getScript = (license: number, group: number): string => `
    window.__lc = window.__lc || {};
    window.__lc.license = ${license};
    window.__lc.group = ${group};
    window.__lc.chat_between_groups = false;
    window.__lc.ga_version = 'gtag';
    window.__lc.params = window.__lc.params || [];
    window.__lc.params.push({ name: 'school', value: 'QC Makeup Academy' });
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))`;
