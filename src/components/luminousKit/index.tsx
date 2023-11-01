import Image from 'next/image';
import type { FC } from 'react';

import LuminousKitImage from './deluxe-kit-numbers-no-description.jpg';

import styles from './index.module.css';

export const LuminousKit: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div>
      <Image src={LuminousKitImage} width="650" height="1056" className="img-fluid" alt="Luminous Kit" />
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
      <li>4 sets of faux lashes</li>
      <li>Pro palette &amp; spatula</li>
    </ol>
  </div>
);
