import type { StaticImageData } from 'next/image';
import type { CSSProperties, FC, JSX } from 'react';

import { DetailsPopup } from './detailsPopup';
// import DesignBooks from './kits/design-books.png';
import MZBrush from './kits/brush-kit-luxe.jpg';
import MZMakeup from './kits/makeup-kit-white.jpg';
import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { GroomingKit } from '@/components/groomingKit';
import { LuminousKit } from '@/components/luminousKit';
import { LuxeProCollection } from '@/components/luxeProCollection';
import type { School } from '@/domain/school';

export interface KitImage {
  src?: StaticImageData;
  backgroundColor?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
  borderColor?: CSSProperties['borderColor'];
  buttonVariant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'black' | 'dark-grey';
}

type ScreenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

interface Images {
  full: KitImage;
  part: KitImage;
  height: Record<ScreenSizes, number | undefined>;
  buttonOffset: Record<ScreenSizes, number | undefined>;
  buttonBelow?: boolean;
}

export interface Kit {
  images?: Images;
  fullBullets: (string | JSX.Element)[];
  partBullets: (string | JSX.Element)[];
  details?: JSX.Element;
}

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

const tariffSwitchDate = Date.UTC(2025, 4, 10, 7);
const makeupKitDate = Date.UTC(2025, 7, 6, 12);

const getCourseKits = (date: number): CourseKit[] => [
  {
    courseCode: 'MZ',
    images: date >= tariffSwitchDate && date < makeupKitDate
      ? {
        full: { src: MZBrush },
        part: { src: MZBrush, backgroundColor: 'white' },
        height: { xs: undefined, sm: undefined, md: 168, lg: 150, xl: 180, xxl: 212 },
        buttonOffset: { xs: undefined, sm: undefined, md: 62, lg: 49, xl: 68, xxl: 0 },
        buttonBelow: true,
      }
      : {
        full: { src: MZMakeup },
        part: { src: MZMakeup, backgroundColor: 'white' },
        height: { xs: undefined, sm: undefined, md: 148, lg: 130, xl: 157, xxl: 183 },
        buttonOffset: { xs: undefined, sm: undefined, md: 62, lg: 49, xl: 68, xxl: 68 },
        buttonBelow: true,
      },
    fullBullets: date >= tariffSwitchDate && date < makeupKitDate ? [ <strong key={0}>Luxe Pro Brush Collection</strong>, ...makeupBullets ] : [ <strong key={0}>Luminous Pro Makeup Kit</strong>, ...makeupBullets ],
    partBullets: date >= tariffSwitchDate && date < makeupKitDate ? [ <strong key={0}>Luxe Pro Brush Collection</strong>, ...makeupBullets ] : [ <strong key={0}>Luminous Pro Makeup Kit</strong>, ...makeupBullets ],
    details: date >= tariffSwitchDate && date < makeupKitDate ? <MZBrushDetails /> : <MZMakeupDetails />,
  },
  // {
  //   courseCode: [ 'I2', 'ST', 'LD', 'CC' ], // exclude FD and ED, because we don't want it showing on the event carts
  //   images: {
  //     full: { src: DesignBooks },
  //     part: { src: DesignBooks },
  //     height: { xs: undefined, sm: undefined, md: 140, lg: 122, xl: 148, xxl: 173 },
  //     buttonOffset: { xs: undefined, sm: undefined, md: 51, lg: 45, xl: 55, xxl: 64 },
  //   },
  //   fullBullets: [ <strong key={0}>Printed textbooks included</strong>, ...designBullets ],
  //   partBullets: [ <strong key={0}>Printed textbooks included</strong>, ...designBullets ],
  // },
  {
    courseCode: 'DG',
    fullBullets: [ <strong key={0}>Dog Grooming Starter Kit</strong>, ...petBullets, <><strong>BONUS</strong> first-aid training</>, <><strong>BONUS</strong> business start-up training</> ],
    partBullets: [ <strong key={0}>Dog Grooming Starter Kit</strong>, ...petBullets, <><strong>BONUS</strong> first-aid training</>, <><strong>BONUS</strong> business start-up training</> ],
    details: <DGDetails />,
  },
  {
    courseCode: [ 'DT', 'DD' ],
    fullBullets: [ ...petBullets, <><strong>BONUS</strong> first-aid training</>, <><strong>BONUS</strong> business start-up training</> ],
    partBullets: [ ...petBullets, <><strong>BONUS</strong> first-aid training</>, <><strong>BONUS</strong> business start-up training</> ],
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

const MZBrushDetails: FC = () => (
  <DetailsPopup title="Luxe Pro Brush Collection" footerText={<div className="text-start"><small>Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></small></div>}>
    <p>Get the entire <strong>Luxe Pro Brush Collection</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
    <LuxeProCollection />
    <p><strong>Start today and claim your professional-grade brush set!</strong></p>
  </DetailsPopup>
);

const MZMakeupDetails: FC = () => (
  <DetailsPopup title="Luminous Collection" footerText={<div className="text-start"><small>Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></small></div>}>
    <p>Get the entire <strong>Luminous Collection</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
    <LuminousKit />
  </DetailsPopup>
);

const DGDetails: FC = () => (
  <DetailsPopup title="Dog Grooming Starter Kit" footerText={<div className="text-start"><small>The kit pictured above is included only when you enroll in the <strong>Dog Grooming</strong> course. Your kit will be automatically sent to you after you have submitted Unit B of the course in the Online Student Center. Items in the kit are subject to change.</small></div>}>
    <p>When you enroll in <strong>Dog Grooming</strong>, you'll get QC's <strong>Dog Grooming Starter Kit</strong> for free!</p>
    <GroomingKit />
  </DetailsPopup>
);
