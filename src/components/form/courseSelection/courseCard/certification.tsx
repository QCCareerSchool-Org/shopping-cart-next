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
      return AB as StaticImageData;
    case 'AP':
      return AP as StaticImageData;
    case 'CC':
      return CC as StaticImageData;
    case 'DB':
      return DB as StaticImageData;
    case 'DC':
      return DC as StaticImageData;
    case 'DD':
      return DD as StaticImageData;
    case 'DG':
      return DG as StaticImageData;
    case 'DT':
      return DT as StaticImageData;
    case 'GT':
      return GT as StaticImageData;
    case 'ED':
      return ED as StaticImageData;
    case 'FD':
      return FD as StaticImageData;
    case 'FS':
      return FS as StaticImageData;
    case 'GB':
      return GB as StaticImageData;
    case 'HS':
      return HS as StaticImageData;
    case 'I2':
      return I2 as StaticImageData;
    case 'LD':
      return LD as StaticImageData;
    case 'MK':
      return MK as StaticImageData;
    case 'MS':
      return MS as StaticImageData;
    case 'MW':
      return MW as StaticImageData;
    case 'MZ':
      return MZ as StaticImageData;
    case 'PF':
      return PF as StaticImageData;
    case 'PO':
      return PO as StaticImageData;
    case 'PW':
      return PW as StaticImageData;
    case 'SF':
      return SF as StaticImageData;
    case 'SK':
      return SK as StaticImageData;
    case 'ST':
      return ST as StaticImageData;
    case 'VD':
      return VD as StaticImageData;
    case 'VM':
      return VM as StaticImageData;
  }
};

type Props = {
  courseCode: string;
};

export const Certification: FC<Props> = ({ courseCode }) => {
  const image = getImage(courseCode);
  if (image) {
    return <Image src={image} className="img-fluid" style={{ position: 'relative', left: '-0.25rem', marginRight: '0.25rem', width: 110, height: 'auto' }} alt="certification logo" />;
  }
};
