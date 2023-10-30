'use client';

import type { FC } from 'react';

import { useAddressState } from '@/hooks/useAddressState';
import { telephoneNumber } from '@/lib/telephone';

export const Footer: FC = () => {
  const { countryCode } = useAddressState();
  const tel = telephoneNumber(countryCode);
  return (
    <footer className="bg-black text-white">
      <div className="container">
        &copy;{new Date().getFullYear()} QC Makeup Academy
        <a href={`tel:${tel}`}>{tel}</a>
      </div>
    </footer>
  );
};
