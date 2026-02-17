import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PpaCart } from '../cart';
import { getPpaCourseBySlug } from '../courses';
import { getDate } from '@/lib/getDate';
import type { GenerateMetadata, PageComponent } from '@/serverComponent';

// export const generateStaticParams = (): { course: string }[] => {
//   return ppaCourses.map(course => ({ course: course.slug }));
// };

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type RouteParams = {
  course: string;
};

export const generateMetadata: GenerateMetadata<RouteParams> = async (props): Promise<Metadata> => {
  const params = await props.params;
  const courseSlug = params.course;
  const course = getPpaCourseBySlug(courseSlug);
  if (!course) {
    return {};
  }

  return {
    title: course.name,
    description: course.summaryBody,
  };
};

const PpaCoursePage: PageComponent<RouteParams> = async props => {
  const [ searchParams, params ] = await Promise.all([
    props.searchParams,
    props.params,
  ]);

  const date = await getDate(searchParams.date);
  const courseSlug = params.course;
  const course = getPpaCourseBySlug(courseSlug);
  if (!course) {
    notFound();
  }

  return <PpaCart date={date} course={course} />;
};

export default PpaCoursePage;
