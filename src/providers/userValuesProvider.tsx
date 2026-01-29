'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

import type { UserValues } from '@/domain/userValues';

export const UserValuesContext = createContext<UserValues | undefined>(undefined);

export const UserValuesProvider: FC<PropsWithChildren<UserValues>> = ({ children, ...userValues }) => {
  const [ state ] = useState<UserValues>(userValues);

  return (
    <UserValuesContext.Provider value={state}>
      {children}
    </UserValuesContext.Provider>
  );
};
