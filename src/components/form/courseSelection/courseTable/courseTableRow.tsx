'use client';

import type { MouseEventHandler } from 'react';
import { type FC, useState } from 'react';
import { Modal } from 'react-bootstrap';

import type { Course } from '@/domain/course';
import type { CoursePrice } from '@/domain/price';
import { useAddressState } from '@/hooks/useAddressState';
import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  coursePrice: CoursePrice;
  course: Course;
}

export const CourseTableRow: FC<Props> = ({ coursePrice, course }) => {
  const { countryCode, provinceCode } = useAddressState();
  const priceState = usePriceState();
  const [ expanded, setExpanded ] = useState(false);

  const handleClick: MouseEventHandler = ev => {
    ev.preventDefault();
    setExpanded(e => !e);
  };

  const handleHide = () => {
    setExpanded(false);
  };

  if (!priceState) {
    return null;
  }

  const name = typeof course.name === 'function' ? course.name({ countryCode, provinceCode }) : course.name;

  const multiCourseDiscountPercentage = !coursePrice.free && coursePrice.multiCourseDiscount > 0 && Math.round(coursePrice.multiCourseDiscount / coursePrice.cost * 100);
  return (
    <>
      <tr>
        <td>{name}</td>
        <td className="text-end text-nowrap align-bottom">{coursePrice.free ? <strong className="text-primary">FREE!</strong> : <>{priceState.currency.symbol}{coursePrice.cost.toFixed(2)}</>}</td>
      </tr>
      {multiCourseDiscountPercentage && (
        <tr className="text-primary">
          <td>{coursePrice.discountMessage ?? <>{multiCourseDiscountPercentage}% Discount</>}</td>
          <td className="text-end text-nowrap align-bottom">&minus; {priceState.currency.symbol}{coursePrice.multiCourseDiscount.toFixed(2)}</td>
        </tr>
      )}
      {course.contents && (
        <tr>
          <td colSpan={2}>
            <a href="#" onClick={handleClick} className="small" style={{ textDecoration: 'none' }}>See What's Included</a>
            <Modal show={expanded} onHide={handleHide}>
              <Modal.Header closeButton>{course.contents.heading}</Modal.Header>
              <Modal.Body>
                {course.contents.body}
              </Modal.Body>
            </Modal>
          </td>
        </tr>
      )}
    </>
  );
};
