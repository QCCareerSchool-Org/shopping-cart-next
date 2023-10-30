import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

// import AB from './kits/ab.jpg';
import AP from './kits/ap.jpg';
import CC from './kits/cc.jpg';
import DB from './kits/db.jpg';
import DG from './kits/dg.jpg';
import ED from './kits/ed.jpg';
import FD from './kits/fd.jpg';
import FS from './kits/fs.jpg';
import HS from './kits/hs.jpg';
import I2 from './kits/i2.jpg';
import LD from './kits/ld.jpg';
import MS from './kits/ms.jpg';
import PO from './kits/po.jpg';
import SF from './kits/sf.jpg';
import ST from './kits/st.jpg';
import VD from './kits/vd.jpg';

const getImage = (courseCode: string): StaticImageData | undefined => {
  switch (courseCode) {
    // case 'AB':
    //   return AB;
    case 'AP':
      return AP;
    case 'CC':
      return CC;
    case 'DB':
      return DB;
    case 'DG':
      return DG;
    case 'ED':
      return ED;
    case 'FD':
      return FD;
    case 'FS':
      return FS;
    case 'HS':
      return HS;
    case 'I2':
      return I2;
    case 'LD':
      return LD;
    case 'MS':
      return MS;
    case 'PO':
      return PO;
    case 'SF':
      return SF;
    case 'ST':
      return ST;
    case 'VD':
      return VD;
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
        <Image src={image} className="img-fluid" alt="course kit" />
      </div>
    );
  }
};
