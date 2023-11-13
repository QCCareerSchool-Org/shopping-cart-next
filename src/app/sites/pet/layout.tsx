import type { Metadata } from 'next';

import { Footer } from './footer';
import { Header } from './header';
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
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PetLayout;
