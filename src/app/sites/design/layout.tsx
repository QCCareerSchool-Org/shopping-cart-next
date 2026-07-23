import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import { Footer } from './footer';
import { Header } from './header';
import { isUserValues } from '@/domain/userValues';
import { decodeJwt } from '@/lib/jwt';
import { UserValuesProvider } from '@/providers/userValuesProvider';
import { ActiveCampaign } from '@/scripts/activeCampaign';
import { Bing } from '@/scripts/bing';
import { Facebook } from '@/scripts/facebook';
import { GoogleAnalytics } from '@/scripts/googleAnalytics';
import { LiveChat } from '@/scripts/liveChat';
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

const DesignLayout: LayoutComponent = async ({ children }) => {
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
      <GoogleAnalytics id="G-DV480L9S3Y" adsId="AW-1071836607" userValues={userValues} />
      <Facebook id="5372705592757225" userValues={userValues} />
      <Bing id="5105217" userValues={userValues} />
      {process.env.ACTIVE_CAMPAIGN_ID && <ActiveCampaign id={process.env.ACTIVE_CAMPAIGN_ID} userValues={userValues} />}
      <UserValuesProvider {...userValues}>
        <Header />
        {children}
        <Footer />
      </UserValuesProvider>
      {process.env.LIVECHAT_LICENSE && <LiveChat school="QC Design School" license={process.env.LIVECHAT_LICENSE} group="2" userValues={userValues} />}
    </div>
  );
};

export default DesignLayout;
