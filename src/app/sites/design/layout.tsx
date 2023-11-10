import type { Metadata } from 'next';

import { Footer } from './footer';
import { Header } from './header';
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
};

const DesignLayout: LayoutComponent = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DesignLayout;
