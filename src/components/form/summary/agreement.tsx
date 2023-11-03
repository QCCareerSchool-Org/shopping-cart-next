import type { FC } from 'react';

import type { AgreementLinks } from '@/domain/agreementLinks';
import { useAddressState } from '@/hooks/useAddressState';

type Props = {
  agreementLinks: AgreementLinks;
};

export const Agreement: FC<Props> = ({ agreementLinks }) => {
  const { countryCode } = useAddressState();

  const href = getHref(agreementLinks, countryCode);
  return <p>By clicking &quot;Proceed to Payment&quot; below, you agree to the terms of the <a rel="noopener noreferrer" target="_blank" href={href}>Enrollment Agreement</a>.</p>;
};

const getHref = (agreementLinks: AgreementLinks, countryCode: string): string => {
  for (const c of agreementLinks.custom) {
    if (c.countryCodes.includes(countryCode)) {
      return c.link;
    }
  }
  return agreementLinks.default;
};
