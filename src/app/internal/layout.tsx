import type { Metadata } from 'next';

import { Footer } from './footer';
import { Header } from './header';
import styles from './layout.module.css';
import type { LayoutComponent } from '@/serverComponent';

import './style.scss';

export const metadata: Metadata = {
  title: 'Enrollment Form',
};

const InternalLayout: LayoutComponent = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      {children}
    </main>
    <Footer />
  </div>
);

export default InternalLayout;
