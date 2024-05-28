import type { AgreementLinks } from '@/domain/agreementLinks';

export const agreementLinks: AgreementLinks = {
  default: 'https://www.qceventplanning.com/enrollment-agreement',
  custom: [
    { countryCodes: [ 'GB', 'GG', 'JE' ], link: 'https://www.qceventplanning.com/enrollment-agreement-gb' },
  ],
};
