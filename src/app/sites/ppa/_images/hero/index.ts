import type { StaticImageData } from 'next/image';

import DM from './dm.jpg';
import GD from './gd.jpg';
import GR from './gr.jpg';
import NT from './nt.jpg';
import PG from './pg.jpg';
import PU from './pu.jpg';
import TB from './tb.jpg';
import TR from './tr.jpg';
import YK from './yk.jpg';
import type { PPACourseCode } from '@/domain/ppaCourseCode';

const heroMap: Record<PPACourseCode, StaticImageData> = { DM, GD, GR, NT, PG, PU, TB, TR, YK };

export default heroMap;
