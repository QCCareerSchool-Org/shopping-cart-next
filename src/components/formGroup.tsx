import type { FC, PropsWithChildren } from 'react';

export const FormGroup: FC<PropsWithChildren> = ({ children }) => (
  <div className="mb-3">{children}</div>
);
