import type { FC, PropsWithChildren } from 'react';

export const Section: FC<PropsWithChildren> = ({ children }) => (
  <section>
    <div className="container">
      {children}
    </div>
  </section>
);
