'use client';

import { redirect } from 'next/navigation';
import type { FC } from 'react';

import { agreementLinks } from '../agreementLinks';
import { Guarantee } from '../guarantee';
import { Form } from '@/components/form';
import type { GeoLocationFunction } from '@/domain/course';
import type { CourseGroup } from '@/domain/courseGroup';
import { useAddressState } from '@/hooks/useAddressState';

interface Props {
  date: number;
}

const isOntario: GeoLocationFunction<boolean> = g => g.countryCode === 'CA' && g.provinceCode === 'ON';

const coursesOverride = [ 'AD' ];
const courseGroups: CourseGroup[] = [
  {
    items: [ { name: 'All-Access Program', code: 'AD', hidden: isOntario } ],
  },
];

export const AllAccessForm: FC<Props> = ({ date }) => {
  const { countryCode, provinceCode } = useAddressState();
  if (isOntario({ countryCode, provinceCode })) {
    redirect('/');
  }
  return (
    <Form
      date={date}
      courseGroups={courseGroups}
      school="QC Design School"
      guarantee={Guarantee}
      successLink="https://www.qcdesignschool.com/welcome-to-the-school"
      agreementLinks={agreementLinks}
      coursesOverride={coursesOverride}
      hideCourseSelection
      dynamicCourseDescriptions="HIDE"
      visualPaymentPlans
    />
  );
};
