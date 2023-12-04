import type { Metadata } from 'next';

import { Footer } from './footer';
import { Header } from './header';
import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { LiveChat } from '@/components/scripts/liveChat';
import { Pardot } from '@/components/scripts/pardot';
import type { LayoutComponent } from '@/serverComponent';

import './global.scss';

export const metadata: Metadata = {
  title: 'Enroll Online - QC Wellness Studies',
  icons: {
    icon: [
      { type: 'image/png', url: '/wellness/favicon-16x16.png', sizes: '16x16' },
      { type: 'image/png', url: '/wellness/favicon-32x32.png', sizes: '32x32' },
      { type: 'image/x-icon', url: '/wellness/favicon.ico', sizes: '48x48' },
      { rel: 'mask icon', type: 'image/png', url: '/wellness/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    shortcut: { type: 'image/x-icon', url: '/wellness/favicon.ico' },
    apple: { type: 'image/png', url: '/wellness/apple-touch-icon.png' },
  },
  manifest: '/wellness/manifest.json',
  other: { 'msapplication-config': '/wellness/browserconfig.xml' },
};

const WellnessLayout: LayoutComponent = ({ children }) => {
  return (
    <div>
      <GoogleAnalytics id="G-6SYYDWV4WE" adsId="AW-1071836607" />
      <Header />
      {children}
      <Footer />
      <Facebook id="1725004270923176" />
      {/* <Tiktok id="" /> */}
      <Pardot accountId="948642" campaignId="" domain="go.qcwellnessstudies.com" />
      <Bing id="28484716" />
      <LiveChat license={1056788} group={19} />
      {/* <Script id="perfect-audience" src="/wellness/perfectAudience.js" /> */}
    </div>
  );
};

export default WellnessLayout;
