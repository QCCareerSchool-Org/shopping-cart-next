import type { StaticImageData } from 'next/image';
import type { CSSProperties } from 'react';

import { DetailsPopup } from './detailsPopup';
import DesignBooks from './kits/design-books.png';
import MZ from './kits/mz/deluxe-kit-white-384.jpg';
import { LuminousKit } from '@/components/luminousKit';
import type { School } from '@/domain/school';

type Image = {
  src?: StaticImageData;
  backgroundColor?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
  borderColor?: CSSProperties['borderColor'];
  buttonVariant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'black' | 'complementary';
};

type ScreenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Images = {
  full: Image;
  part: Image;
  height: Record<ScreenSizes, number | undefined>;
  buttonOffset: Record<ScreenSizes, number | undefined>;
  buttonBelow?: boolean;
};

export type CourseKit = {
  courseCode: string | string[];
  images?: Images;
  fullBullets: Array<string | JSX.Element>;
  partBullets: Array<string | JSX.Element>;
  details?: JSX.Element;
};

export type SchoolKits = Record<School, {
  images?: Images;
  bullets: Array<string | JSX.Element>;
} | undefined>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getSchoolKits = (date: number): SchoolKits => ({
  'QC Makeup Academy': {
    bullets: [
      'Personalized support',
      'Lifetime course access',
      'Vibrant student community',
    ],
  },
  'QC Design School': {
    // images: {
    //   full: {
    //     // src: require('./images/school-design.jpg'),
    //     backgroundColor: 'black',
    //     color: 'white',
    //     borderColor: '#999',
    //   },
    //   part: {
    //   },
    //   height: { xs: undefined, sm: undefined, md: 42, lg: 42, xl: 42 },
    //   buttonOffset: { xs: undefined, sm: undefined, md: undefined, lg: undefined, xl: undefined },
    // },
    bullets: [
      'Personalized support',
      'Vibrant student community',
      'Unlimited student support access',
      'VIP deals on continued learning',
      'BONUS business start-up training',
      'Professional design certification',
    ],
  },
  'QC Event School': {
    // images: {
    //   full: {
    //     // src: require('./images/school-event.jpg'),
    //     backgroundColor: 'black',
    //     color: 'white',
    //     borderColor: '#999',
    //   },
    //   part: {
    //   },
    //   height: { xs: undefined, sm: undefined, md: 42, lg: 42, xl: 42 },
    //   buttonOffset: { xs: undefined, sm: undefined, md: undefined, lg: undefined, xl: undefined },
    // },
    bullets: [
      'Personalized support',
      'Vibrant student community',
      'Unlimited student support access',
      'VIP deals on continued learning',
      'BONUS business start-up training',
      'Professional event-planning certification',
    ],
  },
  'QC Pet Studies': {
    // images: {
    //   full: {
    //     // src: require('./images/school-pet.jpg'),
    //     backgroundColor: 'black',
    //     color: 'white',
    //     borderColor: '#999',
    //   },
    //   part: {
    //   },
    //   height: { xs: undefined, sm: undefined, md: 42, lg: 42, xl: 42 },
    //   buttonOffset: { xs: undefined, sm: undefined, md: undefined, lg: undefined, xl: undefined },
    // },
    bullets: [
      'Personalized support',
      'Vibrant student community',
      'Unlimited student support access',
      'VIP deals on continued learning',
      'BONUS first-aid training',
      'BONUS business start-up training',
      'Professional pet-care certification',
    ],
  },
  'QC Wellness Studies': {
    bullets: [
      'Personalized support',
      'Vibrant student community',
      'Unlimited student support access',
      'VIP deals on continued learning',
      'BONUS business start-up training',
      'Professional wellness certification',
    ],
  },
  'Winghill Writing School': {
    bullets: [
      'Personalized support',
      <>Work with a <strong>professional author</strong></>,
      'Unlimited student support access',
      'VIP deals on continued learning',
    ],
  },
  'QC Career School': undefined,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCourseKits = (date: number): CourseKit[] => [
  {
    courseCode: 'MZ',
    images: {
      full: {
        src: MZ,
        // backgroundColor: 'black',
        // color: 'white',
        // borderColor: '#999',
        // buttonVariant: 'complementary',
      },
      part: {
        src: MZ,
        backgroundColor: 'white',
        // buttonVariant: 'complementary',
      },
      height: { xs: undefined, sm: undefined, md: 148, lg: 130, xl: 157 },
      buttonOffset: { xs: undefined, sm: undefined, md: 62, lg: 49, xl: 68 },
      buttonBelow: true,
    },
    fullBullets: [ <strong key={0}>Bonus Luminous Kit</strong> ],
    partBullets: [ <strong key={0}>Bonus Luminous Kit</strong> ],
    details: (
      <DetailsPopup
        title="Luminous Collection" footerText={(
          <div className="text-start">
            <small>Your items will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</small>
          </div>
        )}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>Get the entire <strong>Luminous Collection</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
          <LuminousKit />
        </div>
      </DetailsPopup>
    ),
  },
  {
    courseCode: [ 'I2', 'ST', 'LD', 'CC' ], // exclude FD and ED, because we don't want it showing on the event carts
    images: {
      full: { src: DesignBooks },
      part: { src: DesignBooks },
      height: { xs: undefined, sm: undefined, md: 140, lg: 122, xl: 148 },
      buttonOffset: { xs: undefined, sm: undefined, md: 51, lg: 45, xl: 55 },
    },
    fullBullets: [ <strong key={0}>Printed textbooks included</strong> ],
    partBullets: [ <strong key={0}>Printed textbooks included</strong> ],
  },
];
