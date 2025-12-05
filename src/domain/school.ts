export type School = 'QC Career School' | 'QC Makeup Academy' | 'QC Design School' | 'QC Event School' | 'QC Pet Studies' | 'QC Wellness Studies' | 'Winghill Writing School' | 'Paw Parent Academy';

export const isSchool = (obj: unknown): obj is School => {
  return typeof obj === 'string' && [ 'QC Career School', 'QC Makeup Academy', 'QC Design School', 'QC Event School', 'QC Pet Studies', 'QC Wellness Studies', 'Winghill Writing School', 'Paw Parent Academy' ].includes(obj);
};

export type SchoolVariant = 'EarthWise Pet';

export const validVariant = (school: School, variant?: SchoolVariant): boolean => {
  if (school === 'QC Pet Studies') {
    return typeof variant === 'undefined' || variant === 'EarthWise Pet';
  }
  return typeof variant === 'undefined';
};
