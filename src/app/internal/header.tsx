import Image from 'next/image';
import type { FC } from 'react';

import styles from './header.module.css';
import Logo from './logo.png';

export const Header: FC = () => (
  <header className={styles.header}>
    <div className="container">
      <a href="/"><Image src={Logo} alt="QC Career School" /></a>
    </div>
  </header>
);
