import { Letter } from "@atoms/Letter";
import React, { FC, useEffect, useState } from "react";

export type PulsedKeyType = {letter: string}
export type TypingParagraphStatus = {
  pulsedKeyAndPositionIsSame: boolean,
  isLettersEnd: boolean

}

interface TypingParagraphProps {
  paragraph?: string;
  statusLettersList?: boolean[];
  currentLetterPosition?: number;
  pulsedKey?: PulsedKeyType ;
  onPulsedKey?: (status: TypingParagraphStatus) => void;

  //** List of keys that aren't considered typing */
  safeKeys: string[];
}

export const TypingParagraph: FC<TypingParagraphProps> = ({
  paragraph = "",
  statusLettersList = [],
  safeKeys = [],
  pulsedKey = {letter: ""},
  onPulsedKey,
}) => {
  const [paragraphArray, setParagraphArray] = useState<string[]>([]);
  const [currentLetterPosition, setCurrentLetterPosition] = useState<number>(0);

  useEffect(() => {
    const parseParagraphToList = paragraph.split("");
    setParagraphArray(parseParagraphToList);
  }, [paragraph]);

  useEffect(() => {
    if (safeKeys.includes(pulsedKey?.letter)) return;
  
    const isSame = pulsedKey?.letter === paragraphArray[currentLetterPosition];
    onPulsedKey &&
      onPulsedKey({
        pulsedKeyAndPositionIsSame: isSame,
        isLettersEnd: currentLetterPosition === paragraphArray.length -1
      });
      setCurrentLetterPosition(currentLetterPosition + 1);
  }, [pulsedKey]);

  return (
    <div className=" max-w-2xl flex flex-wrap">
      {paragraphArray?.map((letter, index) => {
        const isCorrect = statusLettersList[index];
        return (
          <Letter
            key={index}
            isCorrect={isCorrect}
            letter={letter}
            isCurrentPosition={currentLetterPosition === index}
          />
        );
      })}
    </div>
  );
};
