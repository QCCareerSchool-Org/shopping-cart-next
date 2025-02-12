'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKit } from '@/components/luminousKit';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Makeup20250206Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Makeup Career</Modal.Header>
    <Modal.Body>
      <p>For a limited time, enroll in <strong>Master Makeup Artistry</strong> and get QC's <strong>Personal Styling</strong> course FREE.</p>
      <LuminousKit />
    </Modal.Body>
    <Modal.Footer>
      <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a href={agreementLinks.default}>Ream more</a></p>
    </Modal.Footer>
  </Modal>
);
