import type { Metadata } from 'next';

import { Footer } from './footer';
import { Header } from './header';
import type { LayoutComponent } from '@/serverComponent';

import './style.scss';

export const metadata: Metadata = {
  title: 'Enrollment Form',
};

const InternalLayout: LayoutComponent = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default InternalLayout;
