'use client';

import type { FC } from 'react';
import { useEffect } from 'react';

import { Address } from './address';
import { CourseSelection } from './courseSelection';
import type { CourseGroup } from '@/domain/courses';
import { useGlobalState } from '@/hooks/useGlobalState';
import { fetchPrice } from '@/lib/fetch';

type Props = {
  courseGroups: CourseGroup[];
  defaultPromoCode?: string;
};

export const Form: FC<Props> = props => {
  const [ globalState, setGlobalState ] = useGlobalState();

  useEffect(() => {
    const controller = new AbortController();
    fetchPrice(globalState.countryCode, globalState.provinceCode, globalState.courses, globalState.promoCode ?? props.defaultPromoCode, controller).then(p => {
      if (!p) {
        throw Error('Unable to fetch price');
      }
      setGlobalState(s => ({ ...s, price: p }));
    }).catch(err => {
      console.error(err);
    });
    return () => controller.abort();
  }, [ setGlobalState, globalState.countryCode, globalState.provinceCode, globalState.courses, globalState.promoCode, props.defaultPromoCode ]);

  return (
    <div>
      <CourseSelection courseGroups={props.courseGroups} />
      <Address />
    </div>
  );
};
