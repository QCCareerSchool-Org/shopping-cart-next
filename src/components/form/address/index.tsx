import type { FC } from 'react';

import { Address1 } from './fields/address1';
import { Address2 } from './fields/address2';
import { City } from './fields/city';
import { CountryCode } from './fields/countryCode';
import { EmailAddress } from './fields/emailAddress';
import { FirstName } from './fields/firstName';
import { LastName } from './fields/lastName';
import { PostalCode } from './fields/postalCode';
import { ProvinceCode } from './fields/provinceCode';
import { TelephoneNumber } from './fields/telephoneNumber';
import { Title } from './fields/title';
import { FormGroup } from '@/components/formGroup';
import { NoShippingAlert } from '@/components/noShippingAlert';
import { Section } from '@/components/section';
import { useAddressState } from '@/hooks/useAddressState';
import { usePriceState } from '@/hooks/usePriceState';
import { needsProvince } from '@/lib/needProvince';
import { needsPostal } from '@/lib/needsPostal';

export const Address: FC = () => {
  const { countryCode } = useAddressState();
  const price = usePriceState();

  const showPostal = needsPostal(countryCode);
  const showProvince = needsProvince(countryCode);

  return (
    <Section className="addressSection">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 text-center">
          <h2 className="h1">Student Address</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <FormGroup><Title /></FormGroup>
          <FormGroup><FirstName /></FormGroup>
          <FormGroup><LastName /></FormGroup>
          <FormGroup><EmailAddress /></FormGroup>
          <FormGroup><TelephoneNumber /></FormGroup>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FormGroup><CountryCode /></FormGroup>
          <FormGroup><Address1 /></FormGroup>
          <FormGroup><Address2 /></FormGroup>
          <FormGroup><City /></FormGroup>
          {showPostal
            ? showProvince
              ? (
                <div className="row">
                  <div className="col"><FormGroup><ProvinceCode /></FormGroup></div>
                  <div className="col"><FormGroup><PostalCode /></FormGroup></div>
                </div>
              )
              : <FormGroup><PostalCode /></FormGroup>
            : showProvince && <FormGroup><ProvinceCode /></FormGroup>
          }
        </div>
        {price?.noShipping && (
          <div className="col-12 col-lg-8 mt-4">
            <NoShippingAlert />
          </div>
        )}
      </div>
    </Section>
  );
};
