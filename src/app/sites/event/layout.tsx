import type { Metadata } from 'next';
import Script from 'next/script';

import { Footer } from './footer';
import { Header } from './header';
import './global.scss';
import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { Pardot } from '@/components/scripts/pardot';
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
  other: { 'msapplication-config': '/event/browserconfig.xml' },
};

const EventLayout: LayoutComponent = ({ children }) => {
  return (
    <div>
      <GoogleAnalytics id="G-PZ2L57Z948" adsId="AW-1071836607" />
      <Header />
      {children}
      <Footer />
      <Facebook id="520626392908502" />
      {/* <Tiktok id="" /> */}
      <Pardot accountId="948642" campaignId="34199" domain="go.qceventplanning.com" />
      <Bing id="5105216" />
      <Script src="/event/chat.js" />
      <Script id="perfect-audience" src="/event/perfectAudience.js" />
    </div>
  );
};

export default EventLayout;
