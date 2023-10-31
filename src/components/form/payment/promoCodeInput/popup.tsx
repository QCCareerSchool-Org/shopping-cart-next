import type { FC } from 'react';
import { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';

import { Ticket } from './ticket';
import type { Promo } from '@/domain/promo';

type Props = {
  date: number;
  popup: boolean;
  onHide: () => void;
  apply: (code: string) => void;
  promos: Promo[];
};

export const Popup: FC<Props> = props => {
  const [ allExpanded, setAllExpanded ] = useState(Array(props.promos.length).fill(undefined).map(() => false));

  const handleExpandClick = (index: number, value: boolean): void => {
    setAllExpanded(expanded => expanded.map((e, i) => (i === index ? value : false)));
  };

  const handleApplyButtonClick = (code: string): void => {
    props.apply(code);
    props.onHide();
  };

  return (
    <Modal show={props.popup} onHide={props.onHide}>
      <ModalHeader closeButton>Current Promo Codes</ModalHeader>
      <ModalBody className="pt-0">
        {props.promos.map((p, i) => (
          <Ticket
            key={p.code}
            date={props.date}
            promo={p}
            onApplyButtonClick={() => handleApplyButtonClick(p.code)}
            expanded={allExpanded[i]}
            onExpandTogle={value => handleExpandClick(i, value)}
          />
        ))}
      </ModalBody>
      <ModalFooter className="justify-content-start">
        <p><strong>Please note:</strong> Promo codes can not be combined</p>
      </ModalFooter>
    </Modal>
  );
};
