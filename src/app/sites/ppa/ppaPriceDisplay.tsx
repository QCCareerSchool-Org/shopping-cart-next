'use client';

import type { FC } from 'react';

import { usePriceState } from '@/hooks/usePriceState';
import { formatCurrency } from '@/lib/formatCurrency';

type Props = {
  className?: string;
};

export const PpaPriceDisplay: FC<Props> = ({ className }) => {
  const priceState = usePriceState();

  const rootClassName = [ 'ppa-dynamic-price', className ].filter(Boolean).join(' ');

  if (!priceState || !priceState.plans.full) {
    return null;
  }

  const { currency, plans } = priceState;
  const fullPlan = plans.full;
  const partPlan = plans.part;

  return (
    <div className={rootClassName}>
      <span className="ppa-dynamic-price__primary">
        {currency.symbol}{formatCurrency(fullPlan.total)} {currency.code}
      </span>
      {partPlan && (
        <span className="ppa-dynamic-price__secondary">
          {currency.symbol}{formatCurrency(partPlan.deposit)} today
          <span aria-hidden="true">·</span>
          <span className="visually-hidden">followed by</span>
          {' '}{partPlan.installments} × {currency.symbol}{formatCurrency(partPlan.installmentSize)}
        </span>
      )}
    </div>
  );
};
