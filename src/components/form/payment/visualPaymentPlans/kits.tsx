import type { StaticImageData } from 'next/image';
import type { CSSProperties, FC } from 'react';

import { DetailsPopup } from './detailsPopup';
import DesignBooks from './kits/design-books.png';
import MZ from './kits/mz/deluxe-kit-white-384.jpg';
import { LuminousKit } from '@/components/luminousKit';
import type { School } from '@/domain/school';

export type KitImage = {
  src?: StaticImageData;
  backgroundColor?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
  borderColor?: CSSProperties['borderColor'];
  buttonVariant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'black' | 'dark-grey';
};

type ScreenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Images = {
  full: KitImage;
  part: KitImage;
  height: Record<ScreenSizes, number | undefined>;
  buttonOffset: Record<ScreenSizes, number | undefined>;
  buttonBelow?: boolean;
};

export type Kit = {
  images?: Images;
  fullBullets: Array<string | JSX.Element>;
  partBullets: Array<string | JSX.Element>;
  details?: JSX.Element;
};

export type CourseKit = {
  courseCode: string | string[];
} & Kit;

export type SchoolKits = Record<School, Kit | undefined>;

const makeupBullets = [
  'Personalized support',
  'Lifetime course access',
  'Vibrant student community',
];

const designBullets = [
  'Personalized support',
  'Vibrant student community',
  'Unlimited student support access',
  'VIP deals on continued learning',
  'BONUS business start-up training',
  'Professional design certification',
];

const eventBullets = [
  'Personalized support',
  'Vibrant student community',
  'Unlimited student support access',
  'VIP deals on continued learning',
  'BONUS business start-up training',
  'Professional event-planning certification',
];

const petBullets = [
  'Personalized support',
  'Vibrant student community',
  'Unlimited student support access',
  'VIP deals on continued learning',
  'BONUS first-aid training',
  'BONUS business start-up training',
  'Professional pet-care certification',
];

const wellnessBullets = [
  'Personalized support',
  'Vibrant student community',
  'Unlimited student support access',
  'VIP deals on continued learning',
  'BONUS business start-up training',
  'Professional wellness certification',
];

const writingBullets = [
  'Personalized support',
  <>Work with a <strong>professional author</strong></>,
  'Unlimited student support access',
  'VIP deals on continued learning',
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSchoolKits = (date: number): SchoolKits => ({
  'QC Makeup Academy': {
    fullBullets: makeupBullets,
    partBullets: makeupBullets,
  },
  'QC Design School': {
    fullBullets: designBullets,
    partBullets: designBullets,
  },
  'QC Event School': {
    fullBullets: eventBullets,
    partBullets: eventBullets,
  },
  'QC Pet Studies': {
    fullBullets: petBullets,
    partBullets: petBullets,
  },
  'QC Wellness Studies': {
    fullBullets: wellnessBullets,
    partBullets: wellnessBullets,
  },
  'Winghill Writing School': {
    fullBullets: writingBullets,
    partBullets: writingBullets,
  },
  'QC Career School': undefined,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCourseKits = (date: number): CourseKit[] => [
  {
    courseCode: 'MZ',
    images: {
      full: { src: MZ },
      part: { src: MZ, backgroundColor: 'white' },
      height: { xs: undefined, sm: undefined, md: 148, lg: 130, xl: 157, xxl: 183 },
      buttonOffset: { xs: undefined, sm: undefined, md: 62, lg: 49, xl: 68, xxl: 68 },
      buttonBelow: true,
    },
    fullBullets: [ <strong key={0}>Bonus Luminous Kit</strong>, ...makeupBullets ],
    partBullets: [ <strong key={0}>Bonus Luminous Kit</strong>, ...makeupBullets ],
    details: <MZDetails />,
  },
  {
    courseCode: [ 'I2', 'ST', 'LD', 'CC' ], // exclude FD and ED, because we don't want it showing on the event carts
    images: {
      full: { src: DesignBooks },
      part: { src: DesignBooks },
      height: { xs: undefined, sm: undefined, md: 140, lg: 122, xl: 148, xxl: 173 },
      buttonOffset: { xs: undefined, sm: undefined, md: 51, lg: 45, xl: 55, xxl: 64 },
    },
    fullBullets: [ <strong key={0}>Printed textbooks included</strong>, ...designBullets ],
    partBullets: [ <strong key={0}>Printed textbooks included</strong>, ...designBullets ],
  },
];

export const getKit = (date: number, courses: string[], school: School): Kit | undefined => {
  for (const c of getCourseKits(date)) {
    if ((Array.isArray(c.courseCode) && c.courseCode.some(f => courses.includes(f))) || (typeof c.courseCode === 'string' && courses.includes(c.courseCode))) {
      return {
        images: c.images,
        fullBullets: c.fullBullets,
        partBullets: c.partBullets,
        details: c.details,
      };
    }
  }
  return getSchoolKits(date)[school];
};

const MZDetails: FC = () => (
  <DetailsPopup title="Luminous Collection" footerText={<div className="text-start"><small>Your items will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</small></div>}>
    <p>Get the entire <strong>Luminous Collection</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
    <LuminousKit />
  </DetailsPopup>
);
