'use client';

import type { FC } from 'react';

import type { Props } from '@/components/form';
import { Form } from '@/components/form';
import type { Promo } from '@/domain/promo';
import type { School } from '@/domain/school';
import type { PriceState } from '@/state/price';

const promosOverride = (date: number, price: PriceState, school: School, student: boolean): Promo[] => {
  const promos: Promo[] = [
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'COACHING50',
      description: `Get ${price?.currency.code === 'GBP' ? '£50' : '$50'} off your course`,
      altText: `Get ${price?.currency.code === 'GBP' ? '£50' : '$50'} off your course`,
    },
  ];
  return promos.filter(p => p.schools.includes(school)
    && (p.student === 'ALLOWED' || (p.student === 'DENIED' && !student) || (p.student === 'ONLY' && student))
    && (typeof p.startDate === 'undefined' || p.startDate <= date)
    && (typeof p.endDate === 'undefined' || p.endDate > date));
};

export const Client: FC<Props> = props => <Form {...props} promosOverride={promosOverride} />;
