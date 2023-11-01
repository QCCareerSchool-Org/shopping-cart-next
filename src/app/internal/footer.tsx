import type { FC } from 'react';

import styles from './footer.module.css';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className="container">
      &copy;{new Date().getFullYear()} QC Career School
    </div>
  </footer>
);
