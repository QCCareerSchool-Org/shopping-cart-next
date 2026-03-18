import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import Logo from './logo.webp';

export const Navbar: FC = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link href="https://www.pawparentacademy.com" aria-label="Paw Parent Academy home" className="navbar-brand">
        <Image src={Logo} alt="Paw Parent Academy" width={150} height={40} priority />
      </Link>
    </div>
  </nav>
);
