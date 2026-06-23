'use client';

import type { FC } from 'react';

import { agreementLinks } from '../agreementLinks';
import { Guarantee } from '../guarantee';
import { Form } from '@/components/form';
import type { CourseGroup } from '@/domain/courseGroup';

interface Props {
  date: number;
}

const coursesOverride = [ 'AD' ];
const courseGroups: CourseGroup[] = [
  {
    items: [ { name: 'All-Access Program', code: 'AD' } ],
  },
];

export const AllAccessForm: FC<Props> = ({ date }) => {
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
