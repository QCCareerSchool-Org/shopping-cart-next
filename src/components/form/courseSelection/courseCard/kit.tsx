import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import DG from './kits/dg.jpg';
import GT from './kits/gt.jpg';
import MZ from './kits/mz.jpg';

const getImage = (courseCode: string): StaticImageData | undefined => {
  switch (courseCode) {
    case 'MZ':
      if (new Date().getTime() >= Date.UTC(2025, 4, 10, 7)) {
        return MZ;
      }
      return;
    case 'DG':
      return DG;
    case 'GT':
      return GT;
  }
};

type Props = {
  courseCode: string;
};

export const Kit: FC<Props> = ({ courseCode }) => {
  const image = getImage(courseCode);
  if (image) {
    return (
      <div className="mt-4">
        <Image src={image} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="course kit" />
      </div>
    );
  }
};
