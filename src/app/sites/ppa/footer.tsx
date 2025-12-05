import type { FC } from 'react';

import styles from './footer.module.scss';

const links = [
  { label: 'Contact Us', href: 'https://www.pawparentacademy.com/contact' },
  { label: 'Privacy Policy', href: 'https://www.pawparentacademy.com/privacy-policy' },
  { label: 'Terms & Conditions', href: 'https://www.pawparentacademy.com/terms' },
];

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>Paw Parent Academy © {new Date().getFullYear()}</p>
        <nav className={styles.nav}>
          {links.map(link => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
