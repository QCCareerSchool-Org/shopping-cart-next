import type { Metadata } from 'next';

import { PpaCart } from '@/app/sites/ppa/cart';
import { getPpaCourseBySlug } from '@/app/sites/ppa/courses';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const courseSlug = 'paws-itive-grooming';
const course = getPpaCourseBySlug(courseSlug);

if (!course) {
  throw Error(`Course configuration missing for slug: ${courseSlug}`);
}

export const metadata: Metadata = {
  title: `${course.name} | Paw Parent Academy`,
  description: course.summaryBody,
};

const PawsitiveGroomingCheckoutPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams?.date);
  return <PpaCart date={date} course={course} />;
};

export default PawsitiveGroomingCheckoutPage;
