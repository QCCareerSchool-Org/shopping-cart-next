import Link from 'next/link';

import { ppaCourseCodes } from '@/domain/ppaCourseCode';
import type { PageComponent } from '@/serverComponent';

const PpaLandingPage: PageComponent = () => {
  return (
    <div className="ppaCourseList">
      {ppaCourseCodes.map(c => (
        <Link key={c} href={`/${c}`}>
          xxx
        </Link>
      ))}
    </div>
  );
};

export default PpaLandingPage;
