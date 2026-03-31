import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';

import AwardIcon from './award.svg';

interface Props {
  heading: string;
}

export const CourseDescription: FC<PropsWithChildren<Props>> = ({ heading, children }) => (
  <div className="d-flex gap-3 align-items-top">
    <Image src={AwardIcon} width="16" style={{ marginTop: '0.375rem' }} alt="" />
    <div>
      <div className="fw-bold">{heading}</div>
      {children}
    </div>
  </div>
);
