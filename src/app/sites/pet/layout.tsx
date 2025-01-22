import type { Metadata } from 'next';
import Script from 'next/script';

import { Footer } from './footer';
import { Header } from './header';
import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import type { LayoutComponent } from '@/serverComponent';

import './global.scss';

export const metadata: Metadata = {
  title: 'Enroll Online - QC Pet Studies',
  icons: {
    icon: [
      { type: 'image/png', url: '/pet/favicon-16x16.png', sizes: '16x16' },
      { type: 'image/png', url: '/pet/favicon-32x32.png', sizes: '32x32' },
      { type: 'image/x-icon', url: '/pet/favicon.ico', sizes: '48x48' },
      { rel: 'mask icon', type: 'image/png', url: '/pet/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    shortcut: { type: 'image/x-icon', url: '/pet/favicon.ico' },
    apple: { type: 'image/png', url: '/pet/apple-touch-icon.png' },
  },
  manifest: '/pet/manifest.json',
  other: { 'msapplication-config': '/pet/browserconfig.xml' },
};

const PetLayout: LayoutComponent = ({ children }) => {
  return (
    <div>
      <GoogleAnalytics id="G-SBCT33RN69" adsId="AW-1071836607" />
      <Header />
      {children}
      <Footer />
      <Facebook id="3226622604235515" />
      {/* <Tiktok id="" /> */}
      <Bing id="5751420" />
      <Script src="/pet/chat.js" />
      {/* <Script id="perfect-audience" src="/pet/perfectAudience.js" /> */}
    </div>
  );
};

export default PetLayout;
