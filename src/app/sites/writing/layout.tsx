import type { Metadata } from 'next';

import { Footer } from './footer';
import { Header } from './header';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { LiveChat } from '@/components/scripts/liveChat';
// import { Pardot } from '@/components/scripts/pardot';
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

const WritingLayout: LayoutComponent = ({ children }) => {
  return (
    <div>
      <GoogleAnalytics id="G-WTB6KD3MKE" adsId="AW-1071836607" />
      <Header />
      {children}
      <Footer />
      {/* <Facebook id="" /> */}
      {/* <Tiktok id="" /> */}
      {/* <Pardot accountId="" campaignId="" domain="" /> */}
      {/* <Bing id="" /> */}
      <LiveChat license={1056788} group={13} />
      {/* <Script id="perfect-audience" src="/writing/perfectAudience.js" /> */}
    </div>
  );
};

export default WritingLayout;
