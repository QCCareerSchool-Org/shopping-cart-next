import type { FC, MouseEventHandler } from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { FaTag } from 'react-icons/fa';

import { PromoCode } from '@/components/promoCode';
import type { Promo } from '@/domain/promo';
import { useScreenWidth } from '@/hooks/useScreenWidth';

interface Props {
  date: number;
  promo: Promo;
  onApplyButtonClick: MouseEventHandler<HTMLButtonElement>;
  expanded: boolean;
  onExpandTogle: (value: boolean) => void;
}

const getEndOfMonth = (date: number): number => {
  const endOfMonth = new Date(date);
  endOfMonth.setMonth(endOfMonth.getMonth() + 1);
  endOfMonth.setDate(0);
  endOfMonth.setHours(23, 59, 59, 999);
  return endOfMonth.getTime();
};

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

const formatDate = (date: number): string => {
  const d = new Date(date);
  return `${months[d.getMonth()]} ${d.getDate()}`;
};

export const Ticket: FC<Props> = props => {
  const screenWidth = useScreenWidth();

  const desktop = screenWidth >= 450;

  let endDate: number;
  if (props.promo.displayEndDate && props.promo.displayEndDate > props.date) {
    endDate = new Date(props.promo.displayEndDate).setHours(23, 59, 59, 999);
  } else if (props.promo.endDate) {
    endDate = props.promo.endDate;
  } else {
    endDate = getEndOfMonth(props.date);
  }

  const endsSoon = endDate - props.date < 1000 * 60 * 60 * 24 * 3; // less than 3 days remaining
  const lastChance = endDate - props.date < 1000 * 60 * 60 * 36; // less than 36 hours remaining

  return (
    <>
      <Card className="mt-3">
        <CardBody className="">
          <div className="d-flex align-items-stretch justify-content-between">
            <div className="d-flex flex-column justify-content-center">
              {desktop
                ? <h5 className="m-0"><PromoCode>{props.promo.code}</PromoCode></h5>
                : <small className="m-0"><PromoCode>{props.promo.code}</PromoCode></small>
              }
              <div className={desktop ? '' : 'mt-2'} style={{ lineHeight: '1rem' }}>
                <button onClick={() => props.onExpandTogle(true)} className="btn btn-link p-0 border-0 btn-no-hover-shadow" style={{ lineHeight: 'inherit', textDecoration: 'none' }}><small>details</small></button>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-around px-2">
              <div className="text-center">
                <button className={`btn btn-secondary ${!desktop && 'btn-sm'}`} onClick={props.onApplyButtonClick}><FaTag /> Apply {desktop && 'Code'}</button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      {props.expanded && (
        <div className="alert alert-info alert-dismissible mb-0">
          {/* <div className="me-2"><FaChevronUp /></div>{' '} */}
          {props.promo.description}
          <hr />
          <strong>Expires:</strong>{' '}{formatDate(endDate)}{' '}{lastChance ? <strong className="text-danger">Last chance!</strong> : endsSoon && <strong className="text-danger">Ends soon!</strong>}
          <button onClick={() => props.onExpandTogle(false)} type="button" className="btn-close" aria-label="Close" />
        </div>
      )}
    </>
  );
};
