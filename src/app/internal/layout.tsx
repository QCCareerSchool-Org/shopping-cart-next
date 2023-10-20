import type { PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import type { ServerComponent } from '@/serverComponent';

import './style.scss';

const InternalLayout: ServerComponent<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default InternalLayout;
