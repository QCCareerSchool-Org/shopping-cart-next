/* eslint-disable @typescript-eslint/ban-types */
import type { FC, ReactNode } from 'react';

type PageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

type LayoutProps = {
  children: ReactNode;
};

export type PageComponent<P = {}> = FC<P & PageProps>;

export type LayoutComponent = FC<LayoutProps>;
