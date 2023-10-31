import type { FC, PropsWithChildren } from 'react';

import styles from './promoCode.module.css';

export const PromoCode: FC<PropsWithChildren> = ({ children }) => <span className={styles.promoCode}>{children}</span>;
