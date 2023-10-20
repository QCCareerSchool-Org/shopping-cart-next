import type { FC } from 'react';

export const Footer: FC = () => (
  <footer>
    <div className="container">
      &copy;{new Date().getFullYear()} QC Career School
    </div>
  </footer>
);
