import type { Metadata } from 'next';

import { Footer } from './footer';
import { Header } from './header';
import type { LayoutComponent } from '@/serverComponent';

import './global.scss';

export const metadata: Metadata = {
  title: 'QC Makeup Academy',
  icons: {
    icon: [
      { type: 'image/png', url: '/makeup/favicon-16x16.png', sizes: '16x16' },
      { type: 'image/png', url: '/makeup/favicon-32x32.png', sizes: '32x32' },
      { type: 'image/x-icon', url: '/makeup/favicon.ico', sizes: '48x48' },
      { rel: 'mask icon', type: 'image/png', url: '/makeup/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    shortcut: { type: 'image/x-icon', url: '/makeup/favicon.ico' },
    apple: { type: 'image/png', url: '/makeup/apple-touch-icon.png' },
  },
  manifest: '/makeup/manifest.json',
};

const MakeupLayout: LayoutComponent = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MakeupLayout;
