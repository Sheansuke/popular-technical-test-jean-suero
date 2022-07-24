import { tw } from "@utils/tailwindClass";
import React, { FC } from "react";

interface LetterProps {
 isCorrect?: boolean;
 letter: string;
 isCurrentPosition?: boolean;
}

export const Letter: FC<LetterProps> = ({isCorrect = undefined, letter, isCurrentPosition = undefined}) => {
  return (
    <span className="flex flex-col ">
      <span className={tw(
        "text-2xl",
        isCorrect !== undefined ? isCorrect === true ? "text-success" : "text-error" : "",
        letter === " " ? " ml-2 mr-1 " : "",
        isCurrentPosition ? "animate-bounce" : "",

      )}>{letter}</span>

    </span>
  );
};
