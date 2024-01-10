export const getCertificationName = (courseCode: string): string | undefined => {
  switch (courseCode) {
    case 'DC':
      return 'International Dog Behavior Specialist';
    case 'DG':
      return 'International Dog Grooming Professional';
    case 'DT':
      return 'International Dog Training Professional';
    case 'DD':
      return 'International Dog Care Professional';
    case 'I2':
      return 'International Design and Decorating Professional';
    case 'ST':
    case 'MS':
      return 'International Staging and Redesign Professional';
    case 'LD':
      return 'International Landscape Design Professional';
    case 'PO':
      return 'Advanced International Organizing Professional';
    case 'FS':
      return 'Advanced Feng Shui Design Professional';
    case 'CC':
      return 'International Color Consulting Professional';
    case 'FD':
      return 'International Floral Design Professional';
    case 'ED':
      return 'International Event Decor Professional';
    case 'AP':
      return 'Aging in Place Design Professional';
  }
};
