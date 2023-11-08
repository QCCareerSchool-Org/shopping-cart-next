import type { AgreementLinks } from '@/domain/agreementLinks';

export const agreementLinks: AgreementLinks = {
  default: 'https://www.qcmakeupacademy.com/enrollment-agreement.html',
  custom: [
    { countryCodes: [ 'GB', 'GG', 'JE' ], link: 'https://www.qcmakeupacademy.com/enrollment-agreement-gb.html' },
  ],
};
