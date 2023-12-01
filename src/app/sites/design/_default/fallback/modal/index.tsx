import Image from 'next/image';
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

import DesignFilesImage from './design-files.jpg';
import DownloadsImage from './downloads.jpg';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const DesignFallbackModal: React.FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <ModalHeader closeButton>Course Bonuses Included</ModalHeader>
    <ModalBody>
      <p className="lead">Career Essentials Collection</p>
      <p>Enroll in any design course to receive free design software as well as our brand new Career Essentials Collection filled with business &amp; social media templates!</p>
      <figure>
        <Image src={DesignFilesImage} alt="Design Files software" className="img-fluid mb-1" sizes="50vw" />
        <figcaption className="fw-bold">4 Months of <i>Design Files</i> Software FREE</figcaption>
      </figure>
      <figure className="mb-0">
        <Image src={DownloadsImage} alt="template downloads" className="img-fluid mb-1" sizes="50vw" />
        <figcaption className="fw-bold">Career Essentials Kit With Business Templates</figcaption>
      </figure>
    </ModalBody>
  </Modal>
);
