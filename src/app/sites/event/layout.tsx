import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Script from 'next/script';

import { Footer } from './footer';
import { Header } from './header';
import './global.scss';
import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { isUserValues } from '@/domain/userValues';
import { decodeJwt } from '@/lib/jwt';
import { UserValuesProvider } from '@/providers/userValuesProvider';
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

const EventLayout: LayoutComponent = async ({ children }) => {
  const jwt = (await cookies()).get('user')?.value;
  const result = jwt ? await decodeJwt(jwt, 'QC Design School') : undefined;
  const raw = result?.success ? result.value : undefined;
  const userValues = raw && isUserValues(raw) ? raw : undefined;

  return (
    <div>
      <GoogleAnalytics id="G-PZ2L57Z948" adsId="AW-1071836607" userValues={userValues} />
      <Facebook id="520626392908502" userValues={userValues} />
      <Bing id="5105216" />
      <UserValuesProvider {...userValues}>
        <Header />
        {children}
        <Footer />
      </UserValuesProvider>
      {/* <Tiktok id="" /> */}
      <Script src="/event/chat.js" />
    </div>
  );
};

export default EventLayout;
