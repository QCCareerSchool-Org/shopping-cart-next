import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.css';
import KitImage from './sfx-kit-promo.jpg';

export const LuminousPlusSFXKit: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="mb-3">
      <Image src={KitImage} width="574" height="342" className="img-fluid" alt="Luminous Kit plus SFX kit" />
    </div>
    <ol className={styles.coloredList}>
      <li>17-piece professional brush set</li>
      <li>88-shade eye shadow palette</li>
      <li>32-shade lip palette</li>
      <li>28-shade blush palette</li>
      <li>20-shade conceal &amp; correct palette</li>
      <li>9-shade contour palette</li>
      <li>4-shade highlight palette</li>
      <li>5-shade eyebrow palette</li>
      <li>12-shade primary FX cream palette</li>
      <li>Stipple sponge</li>
      <li>Set of 5 latex prosthetics</li>
    </ol>
  </div>
);
