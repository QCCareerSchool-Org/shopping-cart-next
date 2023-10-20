import type { FC, PropsWithChildren } from 'react';

export const FormGroup: FC<PropsWithChildren> = ({ children }) => (
  <div className="mt-2">{children}</div>
);
