import Script from 'next/script';
import type { FC } from 'react';

interface Props {
  id: string;
}

export const Facebook: FC<Props> = ({ id }) => (
  <>
    <Script id="facebook" dangerouslySetInnerHTML={{ __html: getScript(id) }} />
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <noscript><img height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=${encodeURIComponent(id)}&ev=PageView&noscript=1`} alt="" /></noscript>
  </>
);

const getScript = (id: string): string => `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', \`${id.replace(/`/ug, '\\`')}\`);
fbq('track', 'PageView');
`;
