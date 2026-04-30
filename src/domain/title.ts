export const titles = [ 'Mrs.', 'Miss', 'Ms.', 'Mr.' ] as const;

export type Title = typeof titles[number];

const titleSet = new Set<Title>(titles);

export const isTitle = (obj: unknown): obj is Title => {
  return typeof obj === 'string' && titleSet.has(obj as Title);
};
