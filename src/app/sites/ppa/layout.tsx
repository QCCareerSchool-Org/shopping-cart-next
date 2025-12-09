import type { Metadata } from 'next';

import type { LayoutComponent } from '@/serverComponent';

import './global.scss';

export const metadata: Metadata = {
  title: 'Enroll Online - Paw Parent Academy',
  description: 'Secure your Paw Parent Academy grooming course enrollment.',
  icons: {
    shortcut: { type: 'image/x-icon', url: '/ppa/favicon.ico' },
    apple: { type: 'image/png', url: '/ppa/180-apple-favicon.png' },
  },
};

const PpaLayout: LayoutComponent = ({ children }) => (
  <div className="ppaLayout">
    <main>
      {children}
    </main>
  </div>
);

export default PpaLayout;
