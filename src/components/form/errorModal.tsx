import type { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

import { useErrorsDispatch } from '@/hooks/useErrorsDispatch';
import { useErrorsState } from '@/hooks/useErrorsState';

export const ErrorModal: FC = () => {
  const errorState = useErrorsState();
  const errorDispatch = useErrorsDispatch();

  const handleHide = (): void => {
    errorDispatch({ type: 'HIDE_POPUP' });
  };

  return (
    <Modal show={errorState.showPopup} onHide={handleHide}>
      <ModalHeader closeButton>{errorState.popupTitle}</ModalHeader>
      <ModalBody>
        {errorState.popupMessage}
        <pre>{JSON.stringify(errorState.errors)}</pre>
      </ModalBody>
    </Modal>
  );
};
