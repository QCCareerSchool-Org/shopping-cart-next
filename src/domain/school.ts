export const schools = [ 'QC Career School', 'QC Makeup Academy', 'QC Design School', 'QC Event School', 'QC Pet Studies', 'QC Wellness Studies', 'Winghill Writing School', 'Paw Parent Academy' ] as const;

export type School = typeof schools[number];

const schoolSet = new Set<School>(schools);

export const isSchool = (obj: unknown): obj is School => {
  return typeof obj === 'string' && schoolSet.has(obj as School);
};

export type SchoolVariant = 'EarthWise Pet';

export const validVariant = (school: School, variant?: SchoolVariant): boolean => {
  if (school === 'QC Pet Studies') {
    return typeof variant === 'undefined' || variant === 'EarthWise Pet';
  }
  return typeof variant === 'undefined';
};
