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
        "btn btn-primary text-xl m-1 border-b-4  border-primary-focus ",
        isCapsLock ? "uppercase" : "lowercase",
        keyPressed === keyAlphabet ? "btn-secondary" : " ",

        tailwindClass
      )}
    >
      {keyAlphabet}
    </button>
  );
};
