import { createContext, useContext } from 'react';

export type FormStyleVariant = 'default' | 'ppa';

const FormStyleVariantContext = createContext<FormStyleVariant>('default');

export const FormStyleVariantProvider = FormStyleVariantContext.Provider;

export const useFormStyleVariant = (): FormStyleVariant => {
  return useContext(FormStyleVariantContext);
};
