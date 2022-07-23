import { KeyType } from "@interfaces/KeyType";
import { tw } from "@utils/tailwindClass";
import React, { FC, useEffect } from "react";

interface KeyButtonProps {
  keyAlphabet: KeyType;
  keyPressed?: string | undefined;
  tailwindClass?: string | undefined;
  isCapsLock: boolean;
  onKeyDown?: (keyAlphabet: KeyType) => void;
}

export const KeyButton: FC<KeyButtonProps> = ({
  keyAlphabet = "a",
  keyPressed,
  tailwindClass = "",
  isCapsLock = false,
  onKeyDown,
}) => {
  // Detect keyPress and execute a function
  useEffect(() => {
    const changeStyle = setTimeout(function () {
      onKeyDown && onKeyDown(keyAlphabet);
    }, 100);

    return () => clearTimeout(changeStyle);
  }, [keyPressed]);

  return (
    <button
      className={tw(
        " text-xl m-1  kbd",
        isCapsLock ? "uppercase" : "lowercase",
        keyPressed === keyAlphabet ? "btn-primary" : " ",

        tailwindClass
      )}
    >
      {keyAlphabet}
    </button>
  );
};
