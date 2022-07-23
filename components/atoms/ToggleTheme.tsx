import Image from "next/image";
import React, { FC, useState } from "react";

interface ToggleThemeProps {
  listTheme: string[];
}

export const ToggleTheme: FC<ToggleThemeProps> = ({ listTheme }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleOnClick = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme == "light") return setIsChecked(true);
    setIsChecked(false);
  };
  return (
    <>
      <button
        data-toggle-theme={listTheme?.join(",")}
        data-act-class="ACTIVECLASS"
        onClick={handleOnClick}
      >
         <Image src="/static/assets/images/luna.png" alt="sol" width="25" height="25" />
        <input readOnly type="checkbox" className="toggle ml-1 mr-1" defaultChecked={isChecked} checked={isChecked} />
        <Image src="/static/assets/images/sol.png" alt="sol" width="25" height="25" />
      </button>
    </>
  );
};
