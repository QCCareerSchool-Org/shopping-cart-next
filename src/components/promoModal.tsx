'use client';

import type { FC, ReactNode } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './promoModal.module.css';

interface Props {
  show: boolean;
  onHide: () => void;
  onPrimaryClick?: () => void;
  heading: ReactNode;
  left: ReactNode;
  right: ReactNode;
  standardPrice?: ReactNode;
  price?: ReactNode;
  deposit?: ReactNode;
  fullSavings?: ReactNode;
  headerAside?: ReactNode;
  footerDisclaimer?: ReactNode;
  footerMessage?: ReactNode;
  primaryText?: ReactNode;
}

export const PromoModal: FC<Props> = props => (
  <Modal animation={false} show={props.show} onHide={props.onHide} size="xl" contentClassName="bg-white rounded-4">
    <div onClick={props.onHide} className={styles.closeButtonWrapper}>
      <div className={styles.closeButtonCircle}>
        <button type="button" className={`btn-close ${styles.closeButton}`} aria-label="Close" />
      </div>
    </div>

    <div className="bg-light w-100 d-flex flex-column overflow-hidden rounded-5 position-relative">
      <div className="bg-white border-bottom p-4 px-xl-5 d-flex flex-column flex-lg-row align-items-md-center justify-content-between gap-4 position-relative overflow-hidden flex-shrink-0">
        {props.heading}

        {props.headerAside ?? (props.price && props.fullSavings
          ? <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 260 }}>
            {props.standardPrice && <div className="small text-secondary mb-1">
              Standard Value <span className={styles.crossedOut}>{props.standardPrice}</span>
            </div>}
            <div className="d-flex align-items-top justify-content-center justify-content-lg-end mb-2">
              <span className={`fs-1 fw-bold ${styles['text-dark-blue']}`} style={{ lineHeight: 1.1 }}>{props.price}</span>
              <span className="small fw-medium text-secondary">*</span>
            </div>
            <div className="small">Save an additional <strong className="text-primary fw-medium">{props.fullSavings}</strong> if you pay in full today.</div>
          </div>
          : null)}
      </div>

      <div className="p-4 p-xl-5 flex-grow-1">
        <div className="row g-5">
          <div className={`col-lg-6 d-flex flex-column gap-5 justify-content-between ${styles.colLeft}`}>
            {props.left}
          </div>

          <div className={`d-none d-lg-block col-lg-1 position-relative ${styles.colCenter}`}>
            <div className="position-absolute top-0 bottom-0 start-50 border-start border-secondary-subtle" />
          </div>

          <div className={`${styles.colRight} col-lg-6 d-flex flex-column gap-5 justify-content-between`}>
            {props.right}
          </div>
        </div>
      </div>

      <div className="bg-white border-top p-4 px-xl-5 flex-shrink-0 d-flex flex-column flex-lg-row align-items-center justify-content-between w-100 z-1 gap-4">
        <div className={`text-center text-sm-start mb-sm-0 ${styles.footerCopy}`}>
          <p className="small mb-1 text-secondary">{props.footerDisclaimer ?? '* Flexible payment plans available.'}</p>
          <p className={`${styles['text-dark-blue']} fw-bold mb-0`}>
            {props.footerMessage ?? <>Start your journey today for only <span className="text-primary">{props.deposit}</span>.</>}
          </p>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-3">
          <button onClick={props.onHide} className={`btn bg-white fw-bold ${styles['text-dark-blue']}`} style={{ border: '1px solid #e2e8f0', padding: '0.6rem 1.5rem', borderRadius: '0.5rem' }}>Close</button>
          {props.onPrimaryClick && <button onClick={props.onPrimaryClick} className="btn btn-primary fw-bold" style={{ padding: '0.6rem 1.5rem', borderRadius: '0.5rem' }}>{props.primaryText ?? 'Enroll Now'}</button>}
        </div>
      </div>
    </div>
  </Modal>
);

interface DarkBlueBoxProps {
  children: ReactNode;
}

export const PromoModalDarkBlueBox: FC<DarkBlueBoxProps> = ({ children }) => (
  <div className={`position-relative overflow-hidden rounded-4 ${styles['bg-dark-blue']} text-white p-4 shadow`}>
    <div className="position-absolute rounded-circle bg-primary opacity-25 pointer-events-none" style={{ top: '-20px', right: '-20px', width: '100px', height: '100px', filter: 'blur(30px)' }} />
    <div className="position-relative z-1">
      {children}
    </div>
  </div>
);
