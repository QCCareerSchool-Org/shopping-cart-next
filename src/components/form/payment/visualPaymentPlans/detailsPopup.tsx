import type { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';

import { useToggle } from '@/hooks/useToggle';

type Props = {
  anchor?: string | JSX.Element;
  title: string;
  footerText?: string | JSX.Element;
};

export const DetailsPopup: FC<PropsWithChildren<Props>> = ({ anchor, title, footerText, children }) => {
  const [ popup, togglePopup ] = useToggle(false);

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    togglePopup();
  };

  const handleHide = (): void => {
    togglePopup();
  };

  return (
    <>
      <div className="text-center">
        <a href="#" onClick={handleClick}>{anchor ?? 'View Kit Details'}</a>
      </div>
      <Modal show={popup} onHide={handleHide}>
        <ModalHeader closeButton><strong>{title}</strong></ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        {footerText && <ModalFooter>{footerText}</ModalFooter>}
      </Modal>
    </>
  );
};
