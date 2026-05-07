'use client';

import type { FC, PropsWithChildren } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './promoModal.module.css';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const PromoModalFrame: FC<PropsWithChildren<Props>> = props => (
  <Modal animation={false} show={props.show} onHide={props.onHide} size="xl" contentClassName="bg-white rounded-4">
    <div onClick={props.onHide} className={styles.closeButtonWrapper}>
      <div className={styles.closeButtonCircle}>
        <button type="button" className={`btn-close ${styles.closeButton}`} aria-label="Close" />
      </div>
    </div>

    {props.children}
  </Modal>
);
