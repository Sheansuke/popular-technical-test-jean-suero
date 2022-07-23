import React, { FC, ReactNode } from "react";
import { Navbar } from "../components/molecules/Navbar";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar title="Popular Technical Test - Jean Suero" hasToggleTheme={true} />
      <main>{children}</main>
    </>
  );
};
