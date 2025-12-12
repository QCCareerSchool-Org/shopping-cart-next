import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import AB from './certifications/ab.svg';
import AP from './certifications/ap.svg';
import CC from './certifications/cc.svg';
import DB from './certifications/db.svg';
import DC from './certifications/dc.svg';
import DD from './certifications/dd.svg';
import DG from './certifications/dg.svg';
import DT from './certifications/dt.svg';
import ED from './certifications/ed.svg';
import FD from './certifications/fd.svg';
import FS from './certifications/fs.svg';
import GB from './certifications/gb.svg';
import GT from './certifications/gt.svg';
import HS from './certifications/hs.svg';
import I2 from './certifications/i2.svg';
import LD from './certifications/ld.svg';
import MK from './certifications/mk.svg';
import MS from './certifications/ms.svg';
import MW from './certifications/mw.svg';
import MZ from './certifications/mz.svg';
import PF from './certifications/pf.svg';
import PO from './certifications/po.svg';
import PW from './certifications/pw.svg';
import SF from './certifications/sf.svg';
import SK from './certifications/sk.svg';
import ST from './certifications/st.svg';
import VD from './certifications/vd.svg';
import VM from './certifications/vm.svg';

const getImage = (courseCode: string): StaticImageData | undefined => {
  switch (courseCode) {
    case 'AB':
      return AB;
    case 'AP':
      return AP;
    case 'CC':
      return CC;
    case 'DB':
      return DB;
    case 'DC':
      return DC;
    case 'DD':
      return DD;
    case 'DG':
      return DG;
    case 'DT':
      return DT;
    case 'GT':
      return GT;
    case 'ED':
      return ED;
    case 'FD':
      return FD;
    case 'FS':
      return FS;
    case 'GB':
      return GB;
    case 'HS':
      return HS;
    case 'I2':
      return I2;
    case 'LD':
      return LD;
    case 'MK':
      return MK;
    case 'MS':
      return MS;
    case 'MW':
      return MW;
    case 'MZ':
      return MZ;
    case 'PF':
      return PF;
    case 'PO':
      return PO;
    case 'PW':
      return PW;
    case 'SF':
      return SF;
    case 'SK':
      return SK;
    case 'ST':
      return ST;
    case 'VD':
      return VD;
    case 'VM':
      return VM;
  }
};

interface Props {
  courseCode: string;
}

export const Certification: FC<Props> = ({ courseCode }) => {
  const image = getImage(courseCode);
  if (image) {
    return <Image src={image} className="img-fluid" style={{ position: 'relative', left: '-0.25rem', marginRight: '0.25rem', width: 110, height: 'auto' }} alt="certification logo" />;
  }
};
