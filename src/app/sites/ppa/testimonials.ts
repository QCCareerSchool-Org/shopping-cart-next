import type { StaticImageData } from 'next/image';

import jasonMoore from './images/testimonials/jason-moore.jpg';
import lucieMichaels from './images/testimonials/lucie-michaels.jpg';
import meaghanAubin from './images/testimonials/meaghan-aubin.jpg';

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  avatar: string | StaticImageData;
};

const testimonialLibrary = {
  lucie: {
    id: 'lucie',
    quote: 'The Nail Trims Made Easy course by Paw Parent Academy gave me all the advice and guidance I needed to confidently approach grooming my dog.',
    author: 'Lucie Michaels',
    avatar: lucieMichaels,
  },
  jason: {
    id: 'jason',
    quote: 'I especially liked learning about the right tools to use and how to make sure my dog is comfortable around those tools. I feel a lot more confident grooming my dog.',
    author: 'Jason Moore',
    avatar: jasonMoore,
  },
  meaghan: {
    id: 'meaghan',
    quote: 'I feel confident and equipped to give my dogs the care they need. I highly recommend this course!',
    author: 'Meaghan Aubin',
    avatar: meaghanAubin,
  },
} as const satisfies Record<string, Testimonial>;

export type TestimonialId = keyof typeof testimonialLibrary;

const defaultTestimonialIds: TestimonialId[] = [ 'lucie', 'jason', 'meaghan' ];

export const resolveTestimonials = (ids?: TestimonialId[]): Testimonial[] => {
  const order = ids?.length ? ids : defaultTestimonialIds;
  return order.map(id => testimonialLibrary[id]);
};
