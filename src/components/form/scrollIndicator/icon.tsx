import type { FC } from 'react';

import styles from './index.module.scss';

export const Icon: FC = () => (
  <div className={styles.container}>
    <div className={styles.arrow} />
    <div className={styles.arrow} />
  </div>
);
