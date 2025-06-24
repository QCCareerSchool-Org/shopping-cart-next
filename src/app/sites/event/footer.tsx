'use client';

import type { FC } from 'react';

import styles from './footer.module.scss';
import { useAddressState } from '@/hooks/useAddressState';
import { gbpCountry } from '@/lib/currencies';
import { telephoneNumber } from '@/lib/telephone';

export const Footer: FC = () => {
  const { countryCode } = useAddressState();
  const tel = telephoneNumber(countryCode);

  const termsLink = gbpCountry(countryCode) ? 'https://www.qceventplanning.com/terms-gb.html' : 'https://www.qceventplanning.com/terms.html';

  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className={styles.footerItem}>&copy; {new Date().getFullYear()} QC Event School</span>
        <span className={styles.footerItem}><a target="_blank" rel="noopener noreferrer" href={termsLink}>Privacy Policy</a></span>
        <span className={styles.footerItem}><a href={`tel:${tel}`}>{tel}</a></span>
        <span className={styles.footerItem}><a target="_blank" rel="noreferrer" href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175">BBB Accredited A+</a></span>
      </div>
      <div className="container">
        <span className={styles.footerItem}>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="link-light" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.</span>
      </div>
    </footer>
  );
};
