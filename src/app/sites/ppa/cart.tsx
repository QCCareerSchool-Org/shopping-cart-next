import type { FC } from 'react';

import { agreementLinks } from './agreementLinks';
import { courseGroups } from './courseGroups';
import type { PPACourse } from './ppaCourse';
import { Form } from '@/components/form';
import type { PPACourseCode } from '@/domain/ppaCourseCode';

interface Props {
  date: number;
  courseCode: PPACourseCode;
}

export const PpaCart: FC<Props> = ({ date, courseCode }) => (
  <Form
    date={date}
    courseGroups={courseGroups}
    coursesOverride={[ courseCode ]}
    hideCourseSelection
    hideCourseTable
    school="Paw Parent Academy"
    successLink="https://www.pawparentacademy.com/welcome-to-the-school"
    agreementLinks={agreementLinks}
    guarantee={null}
    showPromoCodeInput
    visualPaymentPlans={false}
  />
);
