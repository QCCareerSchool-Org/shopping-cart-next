import type { AgreementLinks } from '@/domain/agreementLinks';

export const agreementLinks: AgreementLinks = {
  default: 'https://www.qcwellnessstudies.com/enrollment-agreement',
  custom: [
    { countryCodes: [ 'GB', 'GG', 'JE' ], link: 'https://www.qcwellnessstudies.com/enrollment-agreement-gb' },
  ],
};
