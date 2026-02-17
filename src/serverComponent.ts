import type { Metadata, ResolvingMetadata } from 'next';
import type { FC, ReactNode } from 'react';

type EmptyRecord = Record<never, string>;

export interface PageProps<RouteParams extends Record<string, string> = EmptyRecord> {
  params: Promise<RouteParams>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

interface LayoutProps {
  children: ReactNode;
}

export type PageComponent<RouteParams extends Record<string, string> = EmptyRecord> = FC<PageProps<RouteParams>>;

export type LayoutComponent = FC<LayoutProps>;

export type GenerateMetadata<RouteParams extends Record<string, string> = EmptyRecord> = (props: PageProps<RouteParams>, parent: ResolvingMetadata) => Metadata | Promise<Metadata>;
