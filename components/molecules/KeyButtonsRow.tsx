import { KeyButton } from "@atoms/KeyButton";
import { KeyType } from "@interfaces/KeyType";
import React, { FC } from "react";

interface KeyButtonsRowProps {
  listKeys: KeyType[];
  keyPressed?: string | undefined;
  tailwindClass?: string | undefined;
  buttonTailwindClass?: string | undefined;
  isCapsLock: boolean;
  onKeyDown?: (keyAlphabet: KeyType) => void;
}

export const KeyButtonsRow: FC<KeyButtonsRowProps> = ({
  listKeys = [],
  keyPressed,
  onKeyDown,
  isCapsLock,
  tailwindClass = "",
  buttonTailwindClass = "",
}) => {
  return (
    <div className={tailwindClass}>
      {listKeys?.map((keyAlphabet) => (
        <KeyButton
          key={keyAlphabet}
          keyAlphabet={keyAlphabet}
          tailwindClass={buttonTailwindClass}
          keyPressed={keyPressed}
          isCapsLock={isCapsLock}
          onKeyDown={onKeyDown}
        />
      ))}
    </div>
  );
};
