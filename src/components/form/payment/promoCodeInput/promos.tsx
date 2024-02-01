import type { Promo } from '@/domain/promo';
import type { School } from '@/domain/school';
import type { PriceState } from '@/state/price';

export const getPromos = (date: number, price: PriceState, school: School, student: boolean): Promo[] => {
  const promos: Promo[] = [
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'BOGO100',
      description: <>Enroll in one course and get a second course free. You'll also get a {price?.currency.code === 'GBP' ? '£75' : '$100'} discount</>,
      altText: `BOGO + ${price?.currency.code === 'GBP' ? '£75' : '$100'} off`,
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'PROLUMINOUS',
      description: <>Enroll in <strong>Master Makeup Artistry</strong> and get the <strong>Pro Makeup Workshop</strong> and the Luminous Collection free</>,
      altText: 'Free Pro Makeup Workshop and Luminous Collection',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SKINCARE',
      description: <>Enroll in <strong>Master Makeup Artistry</strong> and get the <strong>Skincare</strong> course free</>,
      altText: 'Free Skincare',
    },

    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'EVENTFREECOURSE',
      description: <>Enroll in a <strong>Foundation</strong> course and any second course free</>,
      altText: 'Free second course',
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'SPECIALTY',
      description: <>Enroll in a <strong>Foundation</strong> course and one free <strong>Specialty</strong> course</>,
      altText: 'Free specialty course',
    },
    ...([ '2SPECIALTY', 'MCSPECIALTY', 'SSMCSPECIALTY' ].map(code => ({
      schools: [ 'QC Event School' as const ],
      student: 'DENIED' as const,
      code,
      description: <>Enroll in a <strong>Foundation</strong> course and two free <strong>Specialty</strong> courses</>,
      altText: 'Two free specialty courses',
    }))),
    ...([ 'MASTERCLASS', 'SSMASTERCLASS' ].map(code => ({
      schools: [ 'QC Design School' as const ],
      student: 'DENIED' as const,
      code,
      description: <>Enroll in <strong>Interior Decorating</strong> to get a second course of equal or lesser value free and save {price?.currency.code === 'GBP' ? '£100' : '$200'} off your tuition</>,
      altText: `Free second course and ${price?.currency.code === 'GBP' ? '£100' : '$200'} off`,
    }))),
    {
      schools: [ 'QC Event School', 'QC Design School' ],
      student: 'DENIED',
      code: 'BOGO',
      description: <>Buy any course and get any second course of equal or lesser value free</>,
      altText: 'Buy one course and get one free',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'BOGO',
      description: <>Buy any course and get any* second course of equal or lesser value free<br />* excludes Airbrush Makeup Workshop, Special FX Makeup, and Hair Styling Essentials</>,
      altText: 'Buy one course and get one free',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      altText: 'Get 50% off additional courses of equal or lesser value',
      displayEndDate: Date.UTC(2021, 5, 11),
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      altText: 'Get 50% off additional courses of equal or lesser value',
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      altText: 'Get 50% off additional courses of equal or lesser value',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ELITE',
      description: <>When you enroll in <strong>Master Makeup Artistry</strong>, get an <strong>elite makeup kit upgrade</strong> (includes a highlight palette, contour palette, eyebrow palette, 4-pack of false lashes, a makeup travel bag, and a stainless steel palette with spatula)</>,
      altText: 'Get an elite makeup kit upgrade',
      startDate: Date.UTC(2021, 6, 31, 12), // July 31 at 08:00
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'EXPERT',
      description: <>Enroll in a Foundation course and get any Specialty course free.</>,
      altText: 'Enroll in a Foundation course and get any Specialty course free',
      startDate: Date.UTC(2021, 5, 9, 13), // June 9 at 09:00
    },

    {
      schools: [ 'QC Design School', 'QC Event School' ],
      student: 'ALLOWED',
      code: 'FREEVIRTUAL',
      description: 'Get virtual training free when you enroll in any other course',
      altText: 'Get virtual training for free',
    },

    ...[ 150, 200, 300, 500 ].map((d): Promo => ({
      schools: [ 'QC Pet Studies' ],
      student: 'DENIED',
      code: `DG${d}`,
      description: <>Get {price?.currency.code === 'GBP' ? '£' : '$'}{d} off the <strong>Dog Grooming</strong> course</>,
      altText: `${price?.currency.code === 'GBP' ? '£' : '$'}${d} off the Dog Grooming course`,
    })),

    ...[ 150, 200, 300, 500 ].map((d): Promo => ({
      schools: [ 'QC Pet Studies' ],
      student: 'DENIED',
      code: `DT${d}`,
      description: <>Get {price?.currency.code === 'GBP' ? '£' : '$'}{d} off the <strong>Dog Training</strong> course</>,
      altText: `${price?.currency.code === 'GBP' ? '£' : '$'}${d} off the Dog Training course`,
    })),

    ...[ 50, 100, 150 ].map((d): Promo => {
      return {
        schools: [ 'QC Wellness Studies' ],
        student: 'DENIED',
        code: `${d}OFF`,
        description: <>Get {price?.currency.code === 'GBP' ? '£' : '$'}{d} off your total tuition</>,
        altText: `${price?.currency.code === 'GBP' ? '£' : '$'}${d} off your tuition`,
      };
    }),
  ];
  return promos.filter(p => p.schools.includes(school)
    && (p.student === 'ALLOWED' || (p.student === 'DENIED' && !student) || (p.student === 'ONLY' && student))
    && (typeof p.startDate === 'undefined' || p.startDate <= date)
    && (typeof p.endDate === 'undefined' || p.endDate > date));
};
