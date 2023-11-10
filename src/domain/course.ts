export type Course = {
  code: string;
  name: string;
  description?: string;
  disabledMessage?: string | JSX.Element;
  badge?: JSX.Element;
  alwaysShown?: boolean;
};
