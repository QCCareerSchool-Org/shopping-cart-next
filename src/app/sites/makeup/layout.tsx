import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import type { ServerComponent } from '@/serverComponent';

import './global.scss';

export const metadata: Metadata = {
  title: 'QC Makeup Academy',
};

const MakeupLayout: ServerComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MakeupLayout;
