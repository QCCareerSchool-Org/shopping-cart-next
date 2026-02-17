import Link from 'next/link';

import { ppaCourses } from './courses';
import type { PageComponent } from '@/serverComponent';

const PpaLandingPage: PageComponent = () => {
  return (
    <div className="ppaCourseList">
      {ppaCourses.map(course => (
        <Link key={course.slug} href={`/${course.slug}`}>
          {course.name}
        </Link>
      ))}
    </div>
  );
};

export default PpaLandingPage;
