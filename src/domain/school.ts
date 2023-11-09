export type School = 'QC Career School' | 'QC Makeup Academy' | 'QC Design School' | 'QC Event School' | 'QC Pet Studies' | 'QC Wellness Studies' | 'Winghill Writing School';

export const isSchool = (obj: unknown): obj is School => {
  return typeof obj === 'string' && [ 'QC Career School', 'QC Makeup Academy', 'QC Design School', 'QC Event School', 'QC Pet Studies', 'QC Wellness Studies', 'Winghill Writing School' ].includes(obj);
};
