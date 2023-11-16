import type { Metadata } from 'next';
import Script from 'next/script';

import { Footer } from './footer';
import { Header } from './header';
import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { LiveChat } from '@/components/scripts/liveChat';
import { Pardot } from '@/components/scripts/pardot';
import { Tiktok } from '@/components/scripts/tiktok';
import { TrustPulse } from '@/components/scripts/trustPulse';
import { VWO } from '@/components/scripts/vwo';
import type { LayoutComponent } from '@/serverComponent';

import './global.scss';

export const metadata: Metadata = {
  title: 'Enroll Online - Winghill Writing School',
  icons: {
    icon: [
      { type: 'image/png', url: '/writing/favicon-16x16.png', sizes: '16x16' },
      { type: 'image/png', url: '/writing/favicon-32x32.png', sizes: '32x32' },
      { type: 'image/x-icon', url: '/writing/favicon.ico', sizes: '48x48' },
      { rel: 'mask icon', type: 'image/png', url: '/writing/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    shortcut: { type: 'image/x-icon', url: '/writing/favicon.ico' },
    apple: { type: 'image/png', url: '/writing/apple-touch-icon.png' },
  },
  manifest: '/writing/manifest.json',
  other: { 'msapplication-config': '/writing/browserconfig.xml' },
};

const PetLayout: LayoutComponent = ({ children }) => {
  return (
    <div>
      {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} />}
      {process.env.VWO_ID && <VWO id={parseInt(process.env.VWO_ID, 10)} />}
      <Header />
      {children}
      <Footer />
      {process.env.FACEBOOK_ID && <Facebook id={process.env.FACEBOOK_ID} />}
      {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
      {process.env.PARDOT_ACCOUNT_ID && process.env.PARDOT_CAMPAIGN_ID && <Pardot accountId={process.env.PARDOT_ACCOUNT_ID} campaignId={process.env.PARDOT_CAMPAIGN_ID} />}
      {process.env.BING_ID && <Bing id={process.env.BING_ID} />}
      {process.env.TRUSTPULSE_ID && <TrustPulse id={parseInt(process.env.TRUSTPULSE_ID, 10)} />}
      <LiveChat license={1056788} group={13} />
      <Script id="perfect-audience" src="/makeup/perfectAudience.js" />
    </div>
  );
};

export default PetLayout;
