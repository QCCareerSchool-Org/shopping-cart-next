import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';

import styles from './canadaTaxCredits.module.css';
import MapleLeaf from './maple-leaf-red.svg';
import { useToggle } from '@/hooks/useToggle';

export const CanadaTaxCredits: FC = () => {
  const [ popup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <div>
        <h5 className="mb-1"><Image src={MapleLeaf as StaticImageData} height="20" alt="maple leaf" /> Canadian Students Save!</h5>
        <p className="mb-0">You could save more than 50% on your course fees. <a onClick={handleClick} style={{ whiteSpace: 'nowrap' }} href="#">Learn more</a></p>
      </div>
      <Modal show={popup} onHide={handleClick}>
        <ModalHeader closeButton><Image src={MapleLeaf as StaticImageData} height="18" style={{ position: 'relative', top: 1, marginRight: '0.375rem' }} alt="maple leaf" />Canadian, Eh?</ModalHeader>
        <ModalBody>
          <p>QC is a <strong>certified educational institution</strong> with Employment and Social Development Canada (ESDC). At the end of the year, we&apos;ll be sending you a T2202 tax receipt for the course fees you paid during the year. You can use the receipt to get a tax refund.</p>
          <p>You&apos;ll be able to claim:</p>
          <ul className="mb-0">
            <li><span className={styles.red}>The Canada Training Credit</span> and</li>
            <li><span className={styles.red}>The Tuition Tax Credit</span></li>
          </ul>
        </ModalBody>
        <ModalFooter><small>Rules for the way the credits work reflect your personal tax situation. Please reach out to your personal accountant for further guidance.</small></ModalFooter>
      </Modal>
    </>
  );
};
