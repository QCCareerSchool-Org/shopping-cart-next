import type { Metadata } from 'next';
import Script from 'next/script';

import { Footer } from './footer';
import { Header } from './header';
import './global.scss';
import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { Pardot } from '@/components/scripts/pardot';
import { Tiktok } from '@/components/scripts/tiktok';
import type { LayoutComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Enroll Online - QC Makeup Academy',
  icons: {
    icon: [
      { type: 'image/png', url: '/makeup/favicon-16x16.png', sizes: '16x16' },
      { type: 'image/png', url: '/makeup/favicon-32x32.png', sizes: '32x32' },
      { type: 'image/x-icon', url: '/makeup/favicon.ico', sizes: '48x48' },
      { rel: 'mask icon', type: 'image/png', url: '/makeup/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    shortcut: { type: 'image/x-icon', url: '/makeup/favicon.ico' },
    apple: { type: 'image/png', url: '/makeup/apple-touch-icon.png' },
  },
  manifest: '/makeup/manifest.json',
  other: { 'msapplication-config': '/makeup/browserconfig.xml' },
};

const MakeupLayout: LayoutComponent = ({ children }) => {
  return (
    <div>
      <GoogleAnalytics id="G-BS7XJJLV0G" adsId="AW-1071836607" />
      <Header />
      {children}
      <Footer />
      <Facebook id="1531219047676834" />
      <Tiktok id="CJ6H6NBC77UC1837TT70" />
      <Pardot accountId="948642" campaignId="34199" domain="go.qcmakeupacademy.com" />
      <Bing id="5105215" />
      <Script src="/makeup/chat.js" />
      <Script id="perfect-audience" src="/makeup/perfectAudience.js" />
    </div>
  );
};

export default MakeupLayout;
