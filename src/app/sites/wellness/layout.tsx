import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Script from 'next/script';

import { Footer } from './footer';
import { Header } from './header';
import { isUserValues } from '@/domain/userValues';
import { decodeJwt } from '@/lib/jwt';
import { UserValuesProvider } from '@/providers/userValuesProvider';
import { Bing } from '@/scripts/bing';
import { Facebook } from '@/scripts/facebook';
import { GoogleAnalytics } from '@/scripts/googleAnalytics';
import type { LayoutComponent } from '@/serverComponent';

import './global.scss';

export const metadata: Metadata = {
  title: {
    template: '%s - QC Wellness Studies',
    default: 'Enroll Online - QC Wellness Studies',
  },
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

const WellnessLayout: LayoutComponent = async ({ children }) => {
  const jwt = (await cookies()).get('user')?.value;
  const result = jwt ? await decodeJwt(jwt, 'QC Design School') : undefined;
  if (result) {
    if (!result.success) {
      console.error(result.error);
    }
  }
  const raw = result?.success ? result.value : undefined;
  const userValues = raw && isUserValues(raw) ? raw : undefined;

  return (
    <div>
      <GoogleAnalytics id="G-6SYYDWV4WE" adsId="AW-1071836607" userValues={userValues} />
      <Facebook id="1725004270923176" userValues={userValues} />
      <Bing id="28484716" userValues={userValues} />
      <UserValuesProvider {...userValues}>
        <Header />
        {children}
        <Footer />
      </UserValuesProvider>
      <Script src="/wellness/chat.js" />
    </div>
  );
};

export default WellnessLayout;
