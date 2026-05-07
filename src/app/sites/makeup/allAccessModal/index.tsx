'use client';

import type { FC } from 'react';

import { AllAccessModalContent } from './content';
import { PromoModalFrame } from '@/components/promoModal';
import { useAddressState } from '@/hooks/useAddressState';
import { useCoursesDispatch } from '@/hooks/useCoursesDispatch';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const AllAccessModal: FC<Props> = props => {
  const coursesDispatch = useCoursesDispatch();
  const { countryCode, provinceCode } = useAddressState();

  const handleClick = () => {
    coursesDispatch({ type: 'CLEAR_COURSES', payload: { countryCode, provinceCode } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { countryCode, provinceCode, courseCode: 'AM' } });
    props.onHide();
  };

  return (
    <PromoModalFrame show={props.show} onHide={props.onHide}>
      <AllAccessModalContent onHide={props.onHide} onPrimaryClick={handleClick} />
    </PromoModalFrame>
  );
};
