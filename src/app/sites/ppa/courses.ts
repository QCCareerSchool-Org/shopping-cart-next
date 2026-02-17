import type { StaticImageData } from 'next/image';

import desheddingHeroImage from './images/deshedding-mastery/banner-deshed.jpg';
import desheddingThumb from './images/deshedding-mastery/deshedding--thumb.jpg';
import goldenHeroImage from './images/golden-retriever/banner-beta.jpg';
import goldenThumb from './images/golden-retriever/golden-thumb-no-bg.jpg';
import goldendoodleHeroImage from './images/goldendoodle/banner-doodle.jpg';
import doodleThumb from './images/goldendoodle/doodle-cart-thumb.png';
import nailTrimmingHeroImage from './images/nail-trimming/banner-nails.jpg';
import nailTrimmingThumb from './images/nail-trimming/nail-trimming-thumb.jpg';
import pawsitiveHeroImage from './images/pawsitive-grooming/banner-pawsitive.jpg';
import pawsitiveThumb from './images/pawsitive-grooming/pawsitive-thumb-no-bg.jpg';
import pugHeroImage from './images/pug/banner-pug.jpg';
import pugThumb from './images/pug/pug-thumb-no-bg.jpg';
import teddyBearHeroImage from './images/teddy-bear/banner-plush.jpg';
import teddyBearThumb from './images/teddy-bear/teddy-bear-cart-thumb.jpg';
import terrierHeroImage from './images/terrier/banner-terrier.jpg';
import terrierThumb from './images/terrier/terrier-thumb-no-bg.jpg';
import moneyBackImage from './images/trust-2.jpg';
import yorkieHeroImage from './images/yorkie/banner-yorkie.jpg';
import yorkieThumb from './images/yorkie/yorkie-2-thumb.jpg';
import { resolveTestimonials, type Testimonial, type TestimonialId } from './testimonials';

export type PpaCourse = {
  slug: string;
  name: string;
  /** temporary course code placeholder until backend provides final values */
  code: string;
  heroImage: string | StaticImageData;
  heroImageAlt: string;
  productImage: string | StaticImageData;
  summaryHeading: string;
  summaryBody: string;
  tuitionLabel: string;
  tuitionSubLabel: string;
  ctaLabel: string;
  highlights: string[];
  includesHeading: string;
  includes: string[];
  benefitsHeading: string;
  benefits: string[];
  testimonials: Testimonial[];
  trustBadge?: { src: string | StaticImageData; alt: string; width?: number; height?: number };
};

const createHighlights = (courseName: string): string[] => [
  'Step-by-step video tutorials',
  'Lifetime access to every lesson',
  `Printable checklists tailored to ${courseName}`,
];

const createDefaultBenefits = (courseName: string): string[] => [
  `Save time and money on professional ${courseName.toLowerCase()} appointments`,
  'Build a calm routine your dog actually enjoys',
  'Grow your grooming confidence at home',
];

type CourseOverrides = Partial<Omit<PpaCourse, 'slug' | 'name' | 'code' | 'summaryBody'>> & {
  summaryBody?: string;
};

type CourseConfig = {
  name: string;
  slug: string;
  code: string;
  summaryBody: string;
  testimonialIds?: TestimonialId[];
} & CourseOverrides;

const createCourse = (config: CourseConfig): PpaCourse => {
  const { name, slug, code, summaryBody, testimonialIds, ...rest } = config;
  const overrides: CourseOverrides = rest;
  const baseCourse: PpaCourse = {
    slug,
    name,
    code,
    heroImage: goldendoodleHeroImage,
    heroImageAlt: `${name} hero image placeholder`,
    productImage: doodleThumb,
    summaryHeading: `Why enroll in ${name}?`,
    summaryBody,
    tuitionLabel: 'Tuition shown at checkout',
    tuitionSubLabel: '',
    ctaLabel: 'Complete my purchase',
    highlights: createHighlights(name),
    includesHeading: 'What\'s Included',
    includes: createHighlights(name),
    benefitsHeading: 'Why Join?',
    benefits: createDefaultBenefits(name),
    testimonials: resolveTestimonials(testimonialIds),
    trustBadge: { src: moneyBackImage, alt: 'Paw Parent Academy trust badge', width: 500, height: 180 },
  };

  return {
    ...baseCourse,
    ...overrides,
    summaryBody: overrides.summaryBody ?? baseCourse.summaryBody,
    highlights: overrides.highlights ?? baseCourse.highlights,
    includes: overrides.includes ?? baseCourse.includes,
    includesHeading: overrides.includesHeading ?? baseCourse.includesHeading,
    benefits: overrides.benefits ?? baseCourse.benefits,
    benefitsHeading: overrides.benefitsHeading ?? baseCourse.benefitsHeading,
    testimonials: overrides.testimonials ?? baseCourse.testimonials,
    trustBadge: overrides.trustBadge ?? baseCourse.trustBadge,
  };
};

export const ppaCourses: PpaCourse[] = [
  createCourse({
    name: 'How to Groom a Goldendoodle',
    slug: 'how-to-groom-a-goldendoodle',
    code: 'GD',
    summaryBody: 'Learn how to groom your doodle or other curly-coat breed!',
    heroImage: goldendoodleHeroImage,
    productImage: doodleThumb,
    tuitionLabel: 'Tuition shown at checkout',
    tuitionSubLabel: '',
    includes: [
      'Step-by-step video tutorials',
      'Lifetime access',
      'Essential grooming printables',
    ],
    benefits: [
      'Save time and money',
      'Reduce grooming stress',
      'Bond more with your pet',
    ],
    testimonialIds: [ 'lucie', 'jason', 'meaghan' ],
  }),
  createCourse({
    name: 'Teddy Bear Cuts',
    slug: 'teddy-bear-cuts',
    code: 'TB',
    summaryBody: 'Give your pup the picture-perfect teddy bear finish with pro tips for face, feet, and body.',
    heroImage: teddyBearHeroImage,
    productImage: teddyBearThumb,
    tuitionLabel: 'Tuition shown at checkout',
    tuitionSubLabel: '',
    includes: [
      'Step-by-step video tutorials',
      'Lifetime access',
      'Essential grooming printables',
    ],
    benefits: [
      'Save time and money',
      'Reduce grooming stress',
      'Bond more with your pet',
    ],
    testimonialIds: [ 'lucie', 'jason', 'meaghan' ],
  }),
  createCourse({
    name: 'How to Groom a Yorkie',
    slug: 'how-to-groom-a-yorkie',
    code: 'YK',
    summaryBody: 'Keep silky coats shiny and healthy with layered lessons built just for Yorkies.',
    heroImage: yorkieHeroImage,
    productImage: yorkieThumb,
    tuitionLabel: 'Tuition shown at checkout',
    tuitionSubLabel: '',
    includes: [
      'Step-by-step video tutorials',
      'Lifetime access',
      'Essential grooming printables',
    ],
    benefits: [
      'Save time and money',
      'Reduce grooming stress',
      'Bond more with your pet',
    ],
    testimonialIds: [ 'lucie', 'jason', 'meaghan' ],
  }),
  createCourse({
    name: 'How to Groom a Terrier',
    slug: 'how-to-groom-a-terrier',
    code: 'TR',
    summaryBody: 'Learn hand-stripping basics, blending, and maintenance that keeps energetic terriers comfortable.',
    heroImage: terrierHeroImage,
    productImage: terrierThumb,
    tuitionLabel: 'Tuition shown at checkout',
    tuitionSubLabel: '',
    includes: [
      'Step-by-step video tutorials',
      'Lifetime access',
      'Essential grooming printables',
    ],
    benefits: [
      'Save time and money',
      'Reduce grooming stress',
      'Bond more with your pet',
    ],
    testimonialIds: [ 'lucie', 'jason', 'meaghan' ],
  }),
  createCourse({
    name: 'How to Groom a Golden Retriever',
    slug: 'how-to-groom-a-golden-retriever',
    code: 'GR',
    summaryBody: 'Maintain feathering, manage shedding seasons, and leave every golden looking show-ready.',
    heroImage: goldenHeroImage,
    productImage: goldenThumb,
    tuitionLabel: 'Tuition shown at checkout',
    tuitionSubLabel: '',
    includes: [
      'Step-by-step video tutorials',
      'Lifetime access',
      'Essential grooming printables',
    ],
    benefits: [
      'Save time and money',
      'Reduce grooming stress',
      'Bond more with your pet',
    ],
    testimonialIds: [ 'jason', 'meaghan', 'lucie' ],
  }),
  createCourse({
    name: 'How to Groom a Pug',
    slug: 'how-to-groom-a-pug',
    code: 'PG',
    summaryBody: 'Focus on skin folds, paw care, and coat upkeep tailored to sensitive pugs.',
    heroImage: pugHeroImage,
    productImage: pugThumb,
    tuitionLabel: 'Tuition shown at checkout',
    tuitionSubLabel: '',
    includes: [
      'Step-by-step video tutorials',
      'Lifetime access',
      'Essential grooming printables',
    ],
    benefits: [
      'Save time and money',
      'Reduce grooming stress',
      'Bond more with your pet',
    ],
    testimonialIds: [ 'lucie', 'jason', 'meaghan' ],
  }),
  createCourse({
    name: 'Nail Trimming Made Easy',
    slug: 'nail-trimming-made-easy',
    code: 'NT',
    summaryBody: 'Overcome the stress of nail trims with confidence-building techniques and tool demos.',
    heroImage: nailTrimmingHeroImage,
    productImage: nailTrimmingThumb,
    tuitionLabel: 'Tuition shown at checkout',
    tuitionSubLabel: '',
    includes: [
      'Step-by-step video tutorials',
      'Lifetime access',
      'Essential grooming printables',
    ],
    benefits: [
      'Save time and money',
      'Reduce grooming stress',
      'Bond more with your pet',
    ],
    testimonialIds: [ 'lucie', 'jason', 'meaghan' ],
  }),
  createCourse({
    name: 'Deshedding Mastery',
    slug: 'deshedding-mastery',
    code: 'DS',
    summaryBody: 'Build a routine that keeps heavy shedders comfortable and your home fur-free.',
    heroImage: desheddingHeroImage,
    productImage: desheddingThumb,
    tuitionLabel: 'Tuition shown at checkout',
    tuitionSubLabel: '',
    includes: [
      'Step-by-step video tutorials',
      'Lifetime access',
      'Essential grooming printables',
    ],
    benefits: [
      'Save time and money',
      'Reduce grooming stress',
      'Bond more with your pet',
    ],
    testimonialIds: [ 'lucie', 'jason', 'meaghan' ],
  }),
  createCourse({
    name: 'Paws-itive Grooming',
    slug: 'paws-itive-grooming',
    code: 'PW',
    summaryBody: 'Create calm, positive grooming sessions that strengthen the bond with your pet.',
    heroImage: pawsitiveHeroImage,
    productImage: pawsitiveThumb,
    tuitionLabel: 'Tuition shown at checkout',
    tuitionSubLabel: '',
    includes: [
      'Step-by-step video tutorials',
      'Lifetime access',
      'Essential grooming printables',
    ],
    benefits: [
      'Save time and money',
      'Reduce grooming stress',
      'Bond more with your pet',
    ],
    testimonialIds: [ 'lucie', 'jason', 'meaghan' ],
  }),
];

export const getPpaCourseBySlug = (slug: string): PpaCourse | undefined => {
  return ppaCourses.find(course => course.slug === slug);
};
