'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';

import Kit from './grooming-kit-details.webp';
import Tag from './kit-included-tag.svg';
import { useToggle } from '@/hooks/useToggle';

export const DogGroomingKitTag: FC = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleTagClick: MouseEventHandler = e => {
    e.preventDefault();
    togglePopup();
  };

  const handleClose = (): void => {
    togglePopup();
  };

  return (
    <>
      <a onClick={handleTagClick} href="#"><Image src={Tag as StaticImageData} style={{ position: 'absolute', height: 32, marginTop: -4, marginLeft: 6 }} alt="dog grooming kit included" /></a>
      <Modal show={showPopup} onHide={handleClose}>
        <ModalHeader closeButton><strong>Dog Grooming Starter Kit</strong></ModalHeader>
        <ModalBody>
          <p>When you enroll in <strong>Dog Grooming</strong>, you'll get QC's <strong>Dog Grooming Starter Kit</strong> for free!</p>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '-1rem' }}><Image src={Kit} className="img-fluid" alt="dog grooming starter kit" /></div>
        </ModalBody>
        <ModalFooter>
          <div>The kit pictured above is included only when you enroll in the <strong>Dog Grooming</strong> course. Your kit will be automatically sent to you after you have submitted Unit B of the course in the Online Student Center. Items in the kit are subject to change.</div>
        </ModalFooter>
      </Modal>
    </>
  );
};
