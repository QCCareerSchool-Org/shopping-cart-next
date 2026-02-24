import type { Metadata } from 'next';

import { Header } from './_components/header';
import { Footer } from './_components/xFooter';
import { Navbar } from './_components/xNavbar';
import type { LayoutComponent } from '@/serverComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

export const metadata: Metadata = {
  title: {
    template: '%s - Paw Parent Academy',
    default: 'Enroll Online - Paw Parent Academy',
  },
  icons: {
    // icon: [
    //   { type: 'image/png', url: '/wellness/favicon-16x16.png', sizes: '16x16' },
    //   { type: 'image/png', url: '/wellness/favicon-32x32.png', sizes: '32x32' },
    //   { type: 'image/x-icon', url: '/wellness/favicon.ico', sizes: '48x48' },
    //   { rel: 'mask icon', type: 'image/png', url: '/wellness/safari-pinned-tab.svg', color: '#5bbad5' },
    // ],
    shortcut: { type: 'image/x-icon', url: '/wellness/favicon.ico' },
    apple: { type: 'image/png', url: '/wellness/apple-touch-icon.png' },
  },
  // manifest: '/wellness/manifest.json',
  // other: { 'msapplication-config': '/wellness/browserconfig.xml' },
};

const PpaLayout: LayoutComponent = ({ children }) => (
  <>
    <Header>
      <Navbar />
    </Header>
    <main className="flex-shrink-0">
      {children}
    </main>
    <Footer />
  </>
);

export default PpaLayout;
