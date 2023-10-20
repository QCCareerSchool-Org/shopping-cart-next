import type { FC } from 'react';

import { CountryCode } from './fields/countryCode';
import { FirstName } from './fields/firstName';
import { LastName } from './fields/lastName';
import { ProvinceCode } from './fields/provinceCode';
import { FormGroup } from '@/components/formGroup';
import { Section } from '@/components/section';

export const Address: FC = () => {
  return (
    <Section>
      <h2 className="h1 text-center">Student Address</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-5 col-xxl-4">
          <FormGroup><FirstName /></FormGroup>
          <FormGroup><LastName /></FormGroup>
          <FormGroup><CountryCode /></FormGroup>
          <FormGroup><ProvinceCode /></FormGroup>
        </div>
        <div className="col-12 col-md-6 col-lg-5 col-xxl-4">
          <FormGroup><FirstName /></FormGroup>
          <FormGroup><LastName /></FormGroup>
        </div>
      </div>
    </Section>
  );
};
