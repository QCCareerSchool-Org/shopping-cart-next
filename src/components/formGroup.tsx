import type { FC, PropsWithChildren } from 'react';

export const FormGroup: FC<PropsWithChildren> = ({ children }) => (
  <div className="mb-2">{children}</div>
);
