export type AgreementLinks = {
  default: string;
  custom: Array<{
    countryCodes: string[];
    link: string;
  }>;
};
