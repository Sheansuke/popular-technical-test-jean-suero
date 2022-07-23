import { ToggleTheme } from "@atoms/ToggleTheme";
import React, { FC } from "react";

interface NavbarProps {
  title: string;
  hasToggleTheme?: boolean;
}

export const Navbar: FC<NavbarProps> = ({
  title = "",
  hasToggleTheme = false,
}) => {
  return (
    <div className="navbar bg-base-100 text-2xl">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{title}</a>
      </div>
      {hasToggleTheme && (
        <div className="flex-none mr-4">
          <ToggleTheme listTheme={["dark", "light"]} />
        </div>
      )}
    </div>
  );
};
