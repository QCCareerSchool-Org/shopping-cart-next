import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import type { ServerComponent } from '@/serverComponent';

import './style.scss';

export const metadata: Metadata = {
  title: 'Enrollment Form',
};

const InternalLayout: ServerComponent<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default InternalLayout;
