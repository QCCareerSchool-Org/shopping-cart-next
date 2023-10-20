export type Price = {
  currency: {
    code: string;
  };
};

export const isPrice = (obj: unknown): obj is Price => {
  return true;
};
