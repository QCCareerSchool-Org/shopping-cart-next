import { FC } from "react";

type NextProps = {
  params: {};
  searchParams:  { [key: string]: string | string[] | undefined };
};

export type ServerComponent<P = {}> = FC<P & NextProps>;
