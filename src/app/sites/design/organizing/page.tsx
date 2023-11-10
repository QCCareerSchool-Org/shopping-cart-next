import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { DesignOrganizingPromo } from './promo';
import { Form } from '@/components/form';
import type { Course } from '@/domain/course';
import type { CourseGroup } from '@/domain/courseGroup';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

/**
 * Creates a modified version of an array of CourseGroups where the PO course is moved to the first item of the first group
 * @param defaultCourseGroups the original CourseGroups
 * @returns the modified CourseGroups
 */
export const getModifiedCourseGroups = (defaultCourseGroups: CourseGroup[]): CourseGroup[] => {
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

const DesignOrganizingPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
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

export default DesignOrganizingPage;
