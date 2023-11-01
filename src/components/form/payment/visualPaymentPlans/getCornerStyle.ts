import type { School } from '@/domain/school';

export const getCornerStyle = (school: School): string | undefined => {
  switch (school) {
    case 'QC Makeup Academy':
      return 'makeupCorner';
    case 'QC Design School':
      return 'designCorner';
    case 'QC Event School':
      return 'eventCorner';
    case 'QC Pet Studies':
      return 'petCorner';
    case 'QC Wellness Studies':
      return 'wellnessCorner';
    case 'Winghill Writing School':
      return 'writingCorner';
  }
};
