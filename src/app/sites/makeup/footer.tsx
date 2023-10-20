import type { FC } from 'react';

export const Footer: FC = () => (
  <footer className="bg-black text-white">
    <div className="container">
      &copy;{new Date().getFullYear()} QC Makeup Academy
    </div>
  </footer>
);
