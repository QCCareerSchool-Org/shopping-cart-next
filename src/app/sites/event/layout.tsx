import type { Metadata } from 'next';
import Script from 'next/script';

import { Footer } from './footer';
import { Header } from './header';
import './global.scss';
import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { LiveChat } from '@/components/scripts/liveChat';
import { Pardot } from '@/components/scripts/pardot';
import { Tiktok } from '@/components/scripts/tiktok';
import { TrustPulse } from '@/components/scripts/trustPulse';
import { VWO } from '@/components/scripts/vwo';
import type { LayoutComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Enroll Online - QC Event School',
  icons: {
    icon: [
      { type: 'image/png', url: '/event/favicon-16x16.png', sizes: '16x16' },
      { type: 'image/png', url: '/event/favicon-32x32.png', sizes: '32x32' },
      { type: 'image/x-icon', url: '/event/favicon.ico', sizes: '48x48' },
      { rel: 'mask icon', type: 'image/png', url: '/event/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    shortcut: { type: 'image/x-icon', url: '/event/favicon.ico' },
    apple: { type: 'image/png', url: '/event/apple-touch-icon.png' },
  },
  manifest: '/event/manifest.json',
};

const EventLayout: LayoutComponent = ({ children }) => {
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
      <LiveChat license={1056788} group={1} />
      <Script id="perfect-audience" src="/event/perfectAudience.js" />
    </div>
  );
};

export default EventLayout;
