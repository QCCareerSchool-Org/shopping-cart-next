import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { Section } from '../section';
import { useMetaDispatch } from '@/hooks/useMetaDispatch';
import { useMetaState } from '@/hooks/useMetaState';

export const Internal: FC = () => {
  const id = useId();
  const metaState = useMetaState();
  const metaDispatch = useMetaDispatch();

  const handleExistingStudentChange: ChangeEventHandler<HTMLInputElement> = e => {
    metaDispatch({ type: 'SET_STUDENT', payload: e.target.checked });
  };

  const handleStudentDiscountChange: ChangeEventHandler<HTMLInputElement> = e => {
    metaDispatch({ type: 'SET_STUDENT_DISCOUNT', payload: e.target.checked });
  };

  return (
    <Section className="pt-0">
      <div className="row">
        <div className="col-12 col-lg-7 col-xl-8 mb-4 mb-lg-0">
          Use this form to enroll someone in one or more courses from the same school. If the person is already a student, check the &ldquo;Existing Student&rdquo; checkbox to add the multiple-course discount to all courses.
        </div>
        <div className="col-12 col-lg-5 col-xl-4">
          <div className="form-check">
            <input onChange={handleExistingStudentChange} checked={metaState.student} type="checkbox" className="form-check-input" id={`${id}discountAll`} />
            <label className="form-check-label" htmlFor={`${id}discountAll`}>Existing Student</label>
          </div>
          <div className="form-check">
            <input onChange={handleStudentDiscountChange} checked={metaState.studentDiscount} type="checkbox" className="form-check-input" id={`${id}additionalDiscount`} />
            <label className="form-check-label" htmlFor={`${id}additionalDiscount`}>Extra $50 (or £25) Discount per Course</label>
          </div>
        </div>
      </div>
    </Section>
  );
};
