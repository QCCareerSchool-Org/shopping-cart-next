import Script from 'next/script';
import type { FC } from 'react';

interface Props {
  id: number;
}

export const TrustPulse: FC<Props> = ({ id }) => (
  <Script
    id="trustpulse"
    dangerouslySetInnerHTML={{ __html: getScript(id) }}
  />
);

const getScript = (id: number): string => `!function(w,d,s,n,r,a){(w._tpq=w._tpq||[]).push(['init',n]),(r=d.createElement(s)).type='text/javascript',r.src='https://a.trstplse.com/app/js/api.min.js',r.async=!0,(a=d.getElementsByTagName(s)[0]).parentNode.insertBefore(r,a)}(window,document,'script',${id});`;
