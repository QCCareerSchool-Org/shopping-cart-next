import Image from 'next/image';
import type { FC } from 'react';

import LuxeProCollectionImage from './brush-kit-luxe.jpg';
import styles from './index.module.css';

export const LuxeProCollection: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="mb-3">
      <Image src={LuxeProCollectionImage} width="650" height="1056" className="img-fluid" alt="Luminous Kit" />
    </div>
    <ul className={styles.coloredList}>
      <li>16 essential brushes for face, eyes, lips, and brows</li>
      <li>100% vegan, cruelty-free, and ultra-soft synthetic bristles</li>
      <li>Designed for smooth, streak-free application of cream, liquid &amp; powder products</li>
      <li>Durable wooden handles for professional control</li>
      <li>Easy to clean and bacteria-resistant</li>
      <li>Premium roll-up vegan leather case</li>
    </ul>
  </div>
);
