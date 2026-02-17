import type { Metadata } from 'next';
import { Abel, Lato } from 'next/font/google';

import { Header } from './_components/header';
import { Navbar } from './_components/Navbar';
import type { LayoutComponent } from '@/serverComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

const lato = Lato({
  weight: [ '300', '400', '700', '900' ],
  subsets: [ 'latin' ],
  display: 'swap',
  variable: '--qc-font-lato',
});

const abel = Abel({
  weight: [ '400' ],
  subsets: [ 'latin' ],
  display: 'swap',
  variable: '--qc-font-able',
});

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
  <div className={`${lato.variable} ${abel.variable}`}>
    <Header>
      <Navbar />
    </Header>
    <main>
      {children}
    </main>
  </div>
);

export default PpaLayout;
