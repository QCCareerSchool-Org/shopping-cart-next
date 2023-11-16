'use client';

import type { FC } from 'react';

import styles from './footer.module.scss';
import { useAddressState } from '@/hooks/useAddressState';
import { gbpCountry } from '@/lib/currencies';
import { telephoneNumber } from '@/lib/telephone';

export const Footer: FC = () => {
  const { countryCode } = useAddressState();
  const tel = telephoneNumber(countryCode);

  const termsLink = gbpCountry(countryCode) ? 'https://www.qcwellnessstudies.com/terms-gb' : 'https://www.qcwellnessstudies.com/terms';

  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className={styles.footerItem}>&copy; {new Date().getFullYear()} QC Wellness Studies</span>
        <span className={styles.footerItem}><a target="_blank" rel="noopener noreferrer" href={termsLink}>Privacy Policy</a></span>
        <span className={styles.footerItem}><a href={`tel:${tel}`}>{tel}</a></span>
        <span className={styles.footerItem}><a target="_blank" rel="noreferrer" href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175">BBB Accredited A+</a></span>
      </div>
    </footer>
  );
};
