'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Body, Footer } from './new';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Event20260409Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide} size="xl">
    <Modal.Header closeButton>Become a Certified Expert in Less Than 3 Months!</Modal.Header>
    <Modal.Body>
      <Body />
    </Modal.Body>
    <Modal.Footer>
      <Footer />
    </Modal.Footer>
  </Modal>
);
