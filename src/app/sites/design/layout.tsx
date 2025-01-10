import type { Metadata } from 'next';
import Script from 'next/script';

import { Footer } from './footer';
import { Header } from './header';
import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { Pardot } from '@/components/scripts/pardot';
import type { LayoutComponent } from '@/serverComponent';

import './global.scss';

export const metadata: Metadata = {
  title: 'Enroll Online - QC Design School',
  icons: {
    icon: [
      { type: 'image/png', url: '/design/favicon-16x16.png', sizes: '16x16' },
      { type: 'image/png', url: '/design/favicon-32x32.png', sizes: '32x32' },
      { type: 'image/x-icon', url: '/design/favicon.ico', sizes: '48x48' },
      { rel: 'mask icon', type: 'image/png', url: '/design/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    shortcut: { type: 'image/x-icon', url: '/design/favicon.ico' },
    apple: { type: 'image/png', url: '/design/apple-touch-icon.png' },
  },
  manifest: '/design/manifest.json',
  other: { 'msapplication-config': '/design/browserconfig.xml' },
};

const DesignLayout: LayoutComponent = ({ children }) => {
  return (
    <div>
      <GoogleAnalytics id="G-DV480L9S3Y" adsId="AW-1071836607" />
      <Header />
      {children}
      <Footer />
      <Facebook id="5372705592757225" />
      {/* <Tiktok id="" /> */}
      <Pardot accountId="948642" campaignId="34199" domain="go.qcdesignschool.com" />
      <Bing id="5105217" />
      <Script src="/design/chat.js" />
      <Script id="perfect-audience" src="/design/perfectAudience.js" />
    </div>
  );
};

export default DesignLayout;
