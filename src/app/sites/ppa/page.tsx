import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

import DM from './_images/thumbnails/dm.jpg';
import GD from './_images/thumbnails/gd.png';
import GR from './_images/thumbnails/gr.jpg';
import NT from './_images/thumbnails/nt.jpg';
import PG from './_images/thumbnails/pg.jpg';
import PU from './_images/thumbnails/pu.jpg';
import TB from './_images/thumbnails/tb.jpg';
import TR from './_images/thumbnails/tr.jpg';
import YK from './_images/thumbnails/yk.jpg';
import type { PPACourseCode } from '@/domain/ppaCourseCode';
import { courseName, ppaCourseCodes } from '@/domain/ppaCourseCode';
import type { PageComponent } from '@/serverComponent';

const PpaLandingPage: PageComponent = () => {
  return (
    <section>
      <div className="container text-center">
        <h1>Choose Your Course</h1>
        <div className="row g-5">
          {ppaCourseCodes.map(c => (
            <div key={c} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="mb-2">
                <Link href={c}><Image className="img-fluid" src={thumbnailMap[c]} alt={courseName(c)} /></Link>
              </div>
              <Link href={c}><h2 className="h6">{courseName(c)}</h2></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PpaLandingPage;

const thumbnailMap: Record<PPACourseCode, StaticImageData> = { DM, GD, GR, NT, PG, PU, TB, TR, YK };
