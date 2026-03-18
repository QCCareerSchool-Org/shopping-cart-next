import Link from 'next/link';

import { CourseCard } from './_components/courseCard';
import { ppaCourseCodes } from '@/domain/ppaCourseCode';
import type { PageComponent } from '@/serverComponent';

const PpaLandingPage: PageComponent = () => {
  return (
    <section>
      <div className="container text-center">
        <h1>Choose Your Course</h1>
        <div className="row g-4">
          {ppaCourseCodes.map(c => (
            <div key={c} className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex">
              <Link href={c} className="d-flex" style={{ textDecoration: 'none' }}>
                <CourseCard courseCode={c} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PpaLandingPage;
