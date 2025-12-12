'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import type { FC } from 'react';

interface Props {
  id: string;
  adsId?: string;
}

// export const GoogleAnalytics: FC<Props> = ({ id, adsId }) => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const url = pathname + searchParams.toString();
//     gaPageview(id, url);
//   }, [ pathname, searchParams, id ]);

//   return (
//     <>
//       <Script async src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`} />
//       <Script id="google-analytics" dangerouslySetInnerHTML={{ __html: getScript(id, adsId) }} />
//     </>
//   );
// };

// const getScript = (id: string, adsId?: string): string => {
//   let script = `
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date(), {
//   page_path: window.location.pathname,
// });

// gtag('config', \`${id.replace(/`/ug, '\\`')}\`);
// `;
//   if (adsId) {
//     script += `gtag('config', \`${adsId.replace(/`/ug, '\\`')}\`, { allow_enhanced_conversions: true });\n`;
//   }
//   return script;
// };

export const GoogleAnalytics: FC<Props> = ({ id, adsId }) => (
  <>
    <NextGoogleAnalytics gaId={id} />
    {adsId && <Script id="google-analytics-google-ads" dangerouslySetInnerHTML={{ __html: getScript(adsId) }} />}
  </>
);

const getScript = (adsId: string): string => {
  return `gtag('config', \`${adsId.replace(/`/ug, '\\`')}\`, { allow_enhanced_conversions: true });\n`;
};
