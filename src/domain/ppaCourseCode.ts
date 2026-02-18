export const ppaCourseCodes = [ 'DM', 'GD', 'GR', 'NT', 'PU', 'PG', 'TB', 'TR', 'YK' ] as const;

export type PPACourseCode = typeof ppaCourseCodes[number];
