import type { AgreementLinks } from '@/domain/agreementLinks';

export const agreementLinks: AgreementLinks = {
  default: 'https://www.qcpetstudies.com/enrollment-agreement',
  custom: [
    { countryCodes: [ 'GB', 'GG', 'JE' ], link: 'https://www.qcpetstudies.com/enrollment-agreement-gb' },
  ],
};
