import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';
import whiteLogoIcon from './logo.webp';
import { socialLinks } from './socialLinks';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-4 text-start">
            <Link href="/" aria-label="Paw Parent Academy home">
              <Image src={whiteLogoIcon} alt="Paw Parent Academy" width={52} height={52} />
            </Link>
          </div>

          <div className="col-4 text-center">
            <nav aria-label="Footer links">
              <Link href="/contact" className={styles.link}>Contact Us</Link>
              <span aria-hidden="true" className={styles.separator}>|</span>
              <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
            </nav>
            <p className={styles.copy}>© {new Date().getFullYear()} Paw Parent Academy</p>
          </div>

          <div className="col-4 text-end">
            <nav aria-label="Social media" className={styles.social}>
              {socialLinks.map(link => (
                <Link key={link.name} href={link.href} className={styles.socialLink} aria-label={`Visit Paw Parent Academy on ${link.name}`} target="_blank" rel="noreferrer">
                  {link.icon}
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
};
