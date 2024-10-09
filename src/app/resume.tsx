import 'server-only';

import { redirect } from 'next/navigation';
import qs from 'qs';

import type { EnrollmentResponse } from '@/lib/fetch';
import { getEnrollment } from '@/lib/fetch';
import type { PageComponent } from '@/serverComponent';

export const Resume: PageComponent = async ({ searchParams }) => {
  let location = '/';
  if ('id' in searchParams && typeof searchParams.id === 'string' && 'code' in searchParams && typeof searchParams.code === 'string') {
    const id = parseInt(searchParams.id, 10);
    if (!isNaN(id)) {
      location = await getLocation(id, searchParams.code);
    }
  }
  redirect(location);
};

const getLocation = async (id: number, code: string): Promise<string> => {
  try {
    const enrollment = await getEnrollment(id, code);
    return `${enrollment.url}?${getQueryString(enrollment)}`;
  } catch (err) {
    console.error(err);
    return '/';
  }
};

const getQueryString = (enrollmentResponse: EnrollmentResponse): string => {
  return qs.stringify({
    title: enrollmentResponse.title,
    firstName: enrollmentResponse.firstName,
    lastName: enrollmentResponse.lastName,
    emailAddress: enrollmentResponse.emailAddress,
    telephoneNumber: enrollmentResponse.telephoneNumber,
    countryCode: enrollmentResponse.countryCode,
    address1: enrollmentResponse.address1,
    address2: enrollmentResponse.address2,
    city: enrollmentResponse.city,
    provinceCode: enrollmentResponse.provinceCode,
    postalCode: enrollmentResponse.postalCode,
    paymentPlan: enrollmentResponse.paymentPlan,
    c: enrollmentResponse.courses.map(c => c.code),
  }, { arrayFormat: 'repeat' });
};
