import Link from 'next/link';
import type { FC } from 'react';

import styles from './header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/sites/ppa">Paw Parent Academy</Link>
        <div className={styles.tagline}>At-home grooming made simple</div>
      </div>
    </header>
  );
};
