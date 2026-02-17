import type { FC, PropsWithChildren } from 'react';

import styles from './index.module.scss';

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <header className={styles.header} role="banner">
    {children}
  </header>
);
