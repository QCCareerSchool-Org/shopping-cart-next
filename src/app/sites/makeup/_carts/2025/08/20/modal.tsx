'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKit } from '@/components/luminousKit';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20250820Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Today and Receive These Bonuses</Modal.Header>
    <Modal.Body>
      <p>Enroll in Master Makeup Artistry and get QC's Portfolio Development Course FREE!</p>
      <p>This course helps you create a stunning, professional portfolio that showcases your artistry and attracts clients. You'll learn to:</p>
      <ul>
        <li>Plan, style, and photograph shoots to capture flawless images of your work</li>
        <li>Build targeted portfolios—online and in print—to appeal to different audiences</li>
        <li>Present your portfolio to impress clients, reflect your brand, and secure publications</li>
      </ul>
      <p>Plus, you'll receive QC's Luminous Makeup Kit, expertly designed to help professional makeup artists achieve flawless, polished results for every client.</p>
      <LuminousKit />
    </Modal.Body>
    <Modal.Footer>
      <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
    </Modal.Footer>
  </Modal>
);
