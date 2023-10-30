import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC } from 'react';

import AB from './banners/ab.jpg';
import HS from './banners/hs.jpg';
import MW from './banners/mw.jpg';
import MZ from './banners/mz.jpg';
import SF from './banners/sf.jpg';
import SK from './banners/sk.jpg';

const getImage = (courseCode: string): StaticImageData | undefined => {
  switch (courseCode) {
    case 'AB':
      return AB;
    case 'HS':
      return HS;
    case 'MW':
      return MW;
    case 'MZ':
      return MZ;
    case 'SF':
      return SF;
    case 'SK':
      return SK;
  }
};

type Props = {
  courseCode: string;
};

const style: CSSProperties = {
  width: '100%',
  height: 'auto',
  // borderTopLeftRadius: '0.25rem',
  // borderTopRightRadius: '0.25rem',
};

export const Banner: FC<Props> = ({ courseCode }) => {
  const image = getImage(courseCode);
  if (image) {
    return <Image src={image} className="img-fluid mr-3" style={style} alt="certification" />;
  }
};
