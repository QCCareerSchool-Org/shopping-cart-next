import Script from 'next/script';
import type { FC } from 'react';

type Props = {
  id: string;
  adsId?: string;
};

export const GoogleAnalytics: FC<Props> = ({ id, adsId }) => (
  <>
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`} />
    <Script id="google-analytics" dangerouslySetInnerHTML={{ __html: getScript(id, adsId) }} />
  </>
);

const getScript = (id: string, adsId?: string): string => {
  let script = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', \`${id.replace(/`/ug, '\\`')}\`);
`;
  if (adsId) {
    script += `gtag('config', \`${adsId.replace(/`/ug, '\\`')}\`, { allow_enhanced_conversions: true });\n`;
  }
  return script;
};
