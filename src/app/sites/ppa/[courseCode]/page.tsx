import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PpaCart } from '../cart';
import { metadataMap } from '../metadata';
import type { PPACourseCode } from '@/domain/ppaCourseCode';
import { getDate } from '@/lib/getDate';
import type { GenerateMetadata, PageComponent } from '@/serverComponent';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type RouteParams = {
  courseCode: PPACourseCode;
};

export const generateMetadata: GenerateMetadata<RouteParams> = async (props): Promise<Metadata> => {
  const params = await props.params;
  const courseCode = params.courseCode;

  const metadata = metadataMap[courseCode];
  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
};

const PpaCoursePage: PageComponent<RouteParams> = async props => {
  const [ params, searchParams ] = await Promise.all([
    props.params,
    props.searchParams,
  ]);
  const date = await getDate(searchParams.date);

  const courseCode = params.courseCode;

  const metadata = metadataMap[courseCode];
  if (!metadata) {
    notFound();
  }

  return <PpaCart date={date} courseCode={courseCode} />;
};

export default PpaCoursePage;
