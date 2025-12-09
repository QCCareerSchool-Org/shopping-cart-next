'use client';

import type { FC } from 'react';

import styles from './guarantee.module.scss';

export const Guarantee: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h3>14-Day Money-Back Guarantee</h3>
      <p>
        Test drive your course for two full weeks. If it is not the right fit, email <a href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a> within 14 days of enrolling and
        we will process a full refund once your completion request is reviewed.
      </p>
    </div>
  );
};
