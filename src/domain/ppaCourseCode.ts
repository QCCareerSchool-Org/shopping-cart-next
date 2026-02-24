export const ppaCourseCodes = [ 'DM', 'GD', 'GR', 'NT', 'PG', 'PU', 'TB', 'TR', 'YK' ] as const;

export type PPACourseCode = typeof ppaCourseCodes[number];

export const courseName = (courseCode: PPACourseCode): string => {
  switch (courseCode) {
    case 'DM':
      return 'Deshedding Mastery';
    case 'GD':
      return 'How to Groom a Goldendoodle';
    case 'GR':
      return 'How to Groom a Golden Retriever';
    case 'NT':
      return 'Nail Trimming Made Easy';
    case 'PG':
      return 'Paws-itive Grooming';
    case 'PU':
      return 'How to Groom a Pug';
    case 'TB':
      return 'Teddy Bear Cuts';
    case 'TR':
      return 'How to Groom a Terrier';
    case 'YK':
      return 'How to Groom a Yorkie';
  }
};
