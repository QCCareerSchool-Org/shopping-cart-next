import type { FC } from 'react';

import { DetailsModal } from './detailsModal';
import type { CourseGroup } from '@/domain/courseGroup';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  courseGroups: CourseGroup[];
}

export const Details: FC<Props> = ({ courseGroups }) => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

  if (!priceState) {
    return;
  }

  const handleClick = (): void => {
    togglePopup();
  };

  const handleHide = (): void => {
    togglePopup();
  };

  if (priceState.courses.length >= 2) {
    return (
      <>
        <p><button type="button" className="btn btn-link p-0 btn-no-hover-shadow" onClick={handleClick}>Detailed Payment Breakdown</button></p>
        <DetailsModal show={showPopup} onHide={handleHide} courseGroups={courseGroups} />
      </>
    );
  }
};
