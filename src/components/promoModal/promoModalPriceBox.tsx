import type { FC, ReactNode } from 'react';

import styles from './promoModal.module.css';

interface Props {
  standardValue?: ReactNode;
  price: ReactNode;
  fullSavings: ReactNode;
}

export const PromoModalPriceBox: FC<Props> = props => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border ms-auto" style={{ maxWidth: 260 }}>
    {props.standardValue && <div className="small text-secondary mb-1">
      Standard Value <span className={styles.crossedOut}>{props.standardValue}</span>
    </div>}
    <div className="d-flex align-items-top justify-content-center justify-content-lg-end mb-2">
      <span className={`fs-1 fw-bold ${styles['text-dark-blue']}`} style={{ lineHeight: 1.1 }}>{props.price}</span>
      <span className="small fw-medium text-secondary">*</span>
    </div>
    <div className="small">Save an additional <strong className="text-primary fw-medium">{props.fullSavings}</strong> if you pay in full today.</div>
  </div>
);
