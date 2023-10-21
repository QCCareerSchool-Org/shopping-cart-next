export type Title = 'Mrs.' | 'Miss' | 'Ms.' | 'Mr.';

export const isTitle = (obj: unknown): obj is Title => {
  return obj === 'Mrs.' || obj === 'Miss' || obj === 'Ms.' || obj === 'Mr.';
};

export const titles: Title[] = [ 'Mrs.', 'Miss', 'Ms.', 'Mr.' ];
