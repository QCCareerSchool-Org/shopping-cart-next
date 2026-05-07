import type { FC, PropsWithChildren } from 'react';

import styles from './promoModal.module.css';

export const PromoModalDarkBlueBox: FC<PropsWithChildren> = ({ children }) => (
  <div className={`position-relative overflow-hidden rounded-4 ${styles['bg-dark-blue']} text-white p-4 shadow`}>
    <div className="position-absolute rounded-circle bg-primary opacity-25 pointer-events-none" style={{ top: '-20px', right: '-20px', width: '100px', height: '100px', filter: 'blur(30px)' }} />
    <div className="position-relative">
      {children}
    </div>
  </div>
);
