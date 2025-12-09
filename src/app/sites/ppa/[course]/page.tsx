import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PpaCart } from '../cart';
import { getPpaCourseBySlug, ppaCourses } from '../courses';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

export const generateStaticParams = (): Array<{ course: string }> => {
  return ppaCourses.map(course => ({ course: course.slug }));
};

type Props = Parameters<PageComponent>[0] & { params?: { course?: string } };

export const generateMetadata = ({ params }: Props): Metadata => {
  const courseSlug = params?.course ?? '';
  const course = getPpaCourseBySlug(courseSlug);
  if (!course) {
    return {};
  }

  return {
    title: `${course.name} | Paw Parent Academy`,
    description: course.summaryBody,
  };
};

const PpaCoursePage: PageComponent = async ({ searchParams, params }: Props) => {
  const courseSlug = params?.course ?? '';
  const course = getPpaCourseBySlug(courseSlug);
  if (!course) {
    notFound();
  }

  const date = await getDate(searchParams?.date);

  return <PpaCart date={date} course={course} />;
};

export default PpaCoursePage;
