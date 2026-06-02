'use client';

import type { FC, ReactNode } from 'react';

import styles from './promoModal.module.css';

export interface PromoModalContentProps {
  onHide: () => void;
  onPrimaryClick?: () => void;
  heading: ReactNode;
  left: ReactNode;
  right: ReactNode;
  headerAside?: ReactNode;
  footerDisclaimer?: ReactNode;
  footerMessage?: ReactNode;
  primaryText?: ReactNode;
  bodyClassName?: string;
  footerClassName?: string;
}

export const PromoModalContent: FC<PromoModalContentProps> = props => (
  <div className="bg-light w-100 d-flex flex-column overflow-hidden rounded-5 position-relative">
    {props.headerAside ? (
      <div className="bg-white border-bottom p-4 px-xl-5 d-flex flex-column flex-lg-row align-items-md-center justify-content-between gap-4 position-relative overflow-hidden flex-shrink-0">
        {props.heading}
        {props.headerAside}
      </div>
    ) : (props.heading)}

    <div className={`p-4 p-xl-5 flex-grow-1 ${props.bodyClassName}`}>
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

    <div className={`border-top p-4 px-xl-5 flex-shrink-0 d-flex flex-column flex-lg-row align-items-center justify-content-between w-100 z-1 gap-4 ${props.footerClassName ?? 'bg-white'}`}>
      <div className={`text-center text-sm-start mb-sm-0 ${styles.footerCopy}`}>
        <p className="small mb-1 text-secondary">{props.footerDisclaimer ?? '* Flexible payment plans available.'}</p>
        {props.footerMessage && <p className={`${styles['text-dark-blue']} fw-bold mb-0`}>{props.footerMessage}</p>}
      </div>

      <div className="d-flex flex-column flex-sm-row gap-3">
        <button onClick={props.onHide} className={`btn bg-white fw-bold ${styles['text-dark-blue']}`} style={{ border: '1px solid #e2e8f0', padding: '0.6rem 1.5rem', borderRadius: '0.5rem' }}>Close</button>
        {props.onPrimaryClick && <button onClick={props.onPrimaryClick} className="btn btn-primary fw-bold" style={{ padding: '0.6rem 1.5rem', borderRadius: '0.5rem' }}>{props.primaryText ?? 'Enroll Now'}</button>}
      </div>
    </div>
  </div>
);
