/* eslint-disable @typescript-eslint/ban-types */
import type { FC } from 'react';

type NextProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export type ServerComponent<P = {}> = FC<P & NextProps>;
