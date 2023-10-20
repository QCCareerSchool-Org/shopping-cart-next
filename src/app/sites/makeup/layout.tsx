import { FC, PropsWithChildren } from "react";
import { Metadata } from "next";

import { Header } from "./header";
import { Footer } from "./footer";

import "./global.scss";

export const metadata: Metadata = {
  title: 'QC Makeup Academy',
}

const MakeupLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MakeupLayout;
