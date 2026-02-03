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

const PetLayout: LayoutComponent = async ({ children }) => {
  const jwt = (await cookies()).get('user')?.value;
  const result = jwt ? await decodeJwt(jwt, 'QC Pet Studies') : undefined;
  if (result) {
    if (!result.success) {
      console.error(result.error);
    }
  }
  const raw = result?.success ? result.value : undefined;
  const userValues = raw && isUserValues(raw) ? raw : undefined;

  return (
    <div>
      <GoogleAnalytics id="G-SBCT33RN69" adsId="AW-1071836607" userValues={userValues} />
      <Facebook id="3226622604235515" userValues={userValues} />
      <Bing id="5751420" />
      <UserValuesProvider {...userValues}>
        <Header />
        {children}
        <Footer />
      </UserValuesProvider>
      <Script src="/pet/chat.js" />
    </div>
  );
};

export default PetLayout;
