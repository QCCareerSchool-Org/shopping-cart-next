'use client';

/**
 * We need to run this cart as a client component because of the courseGroup filtering
 */

import type { FC } from 'react';

import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { DesignOrganizingPromo } from './promo';
import { Form } from '@/components/form';
import type { Course } from '@/domain/course';
import type { CourseGroup } from '@/domain/courseGroup';

/**
 * Creates a modified version of an array of CourseGroups where the PO course is moved to the first item of the first group
 */
const getModifiedCourseGroups = (defaultCourseGroups: CourseGroup[]): CourseGroup[] => {
  const isPOCourse = (i: Course): boolean => i.code === 'PO';

  // make a copy of the default course groups, where the PO course is filtered out of the items of each of them
  const modifiedCourseGroups: CourseGroup[] = defaultCourseGroups.map(c => ({ ...c, items: c.items.filter(i => !isPOCourse(i)) }));

  // find the PO course from the default course groups
  const PO = defaultCourseGroups.find(c => c.items.find(isPOCourse))?.items.find(isPOCourse);
  if (!PO) {
    throw Error('can\'t find PO course');
  }

  // re-add the PO course to the first group of our modified course groups
  if (modifiedCourseGroups.length) {
    modifiedCourseGroups[0].items.unshift(PO);
  }

  return modifiedCourseGroups;
};

const orderedCourseGroups = getModifiedCourseGroups(courseGroups);

type Props = {
  date: number;
};

export const DesignOrganizingInner: FC<Props> = ({ date }) => {
  return (
    <>
      <DesignOrganizingPromo date={date} />
      <Form
        date={date}
        courseGroups={orderedCourseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="DESIGN100OFF"
      />
    </>
  );
};
