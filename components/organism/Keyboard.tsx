import { KeyType } from "@interfaces/KeyType";
import { KeyButtonsRow } from "@molecules/KeyButtonsRow";
import React, { FC, useState, useEffect } from "react";

interface KeyboardProps {
  // name?: string;
}

export const Keyboard: FC<KeyboardProps> = () => {
  const [keyPressed, setKeyPressed] = useState<string>();
  const [capsLockActive, setCapsLockActive] = useState<boolean>(false);

  // this function clear keyPressed after pressing
  const handleOnKeyDown = (event: KeyType) => {
    setKeyPressed("");
  };

  // Allow detect if CAPS LOCK is active
  useEffect(() => {
    document.onkeydown = function (e) {
      const capsIsOn = e.getModifierState("CapsLock");
      setCapsLockActive(capsIsOn);
      setKeyPressed(e?.key);
    };
  }, []);

  return (
    <div className="card w-1/2 shadow-xl flex flex-col justify-center items-center p-8 rounded-lg border-2 border-primary border-b-4">
      {/* ROW 1 */}
      <KeyButtonsRow
        listKeys={["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]}
        isCapsLock={capsLockActive}
        keyPressed={keyPressed}
        onKeyDown={handleOnKeyDown}
      />

      {/* ROW 2 */}
      <KeyButtonsRow
        listKeys={["a", "s", "d", "f", "g", "h", "j", "k", "l"]}
        isCapsLock={capsLockActive}
        keyPressed={keyPressed}
        onKeyDown={handleOnKeyDown}
      />

      {/* ROW 3 */}
      <KeyButtonsRow
        listKeys={["z", "x", "c", "v", "b", "n", "m", ",", "."]}
        isCapsLock={capsLockActive}
        keyPressed={keyPressed}
        onKeyDown={handleOnKeyDown}
      />

      {/* SPACE */}
      <KeyButtonsRow
        listKeys={[" "]}
        isCapsLock={capsLockActive}
        keyPressed={keyPressed}
        onKeyDown={handleOnKeyDown}
        tailwindClass="w-80 flex"
        buttonTailwindClass="flex-1"
      />
    </div>
  );
};
