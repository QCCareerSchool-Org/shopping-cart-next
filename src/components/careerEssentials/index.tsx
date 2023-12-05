import Image from 'next/image';
import type { FC } from 'react';

import DesignFilesImage from './design-files.jpg';
import DownloadsImage from './downloads.jpg';

export const CareerEssentials: FC = () => (
  <>
    <figure>
      <Image src={DesignFilesImage} alt="Design Files software" className="img-fluid mb-1" sizes="50vw" />
      <figcaption className="small">4 Months of <i>Design Files</i> Software FREE</figcaption>
    </figure>
    <figure className="mb-0">
      <Image src={DownloadsImage} alt="template downloads" className="img-fluid mb-1" sizes="50vw" />
      <figcaption className="small">Career Essentials Kit With Business Templates</figcaption>
    </figure>
  </>
);
