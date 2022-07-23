import { randomParagraphGenerator } from "@utils/randomParagraphGenerator";
import { listWords } from "@data/listWords";
import React, { FC } from "react";
import { ConfigTyping, FormValues } from "./ConfigTyping";

const ConfigTypingContainer: FC = () => {
  const handleSubmit = (data: FormValues) => {
    const parseData = {
      paragraph:
        data?.paragraph === "custom"
          ? data?.customParagraph
          : randomParagraphGenerator(listWords, Number(data?.wordsCount)),
      timerMinutes:
        data?.timerMinutes === "custom"
          ? data?.customTimerMinutes
          : data?.timerMinutes,
    };

    console.log(parseData);
  };

  return (
    <>
      <ConfigTyping onDataSubmit={handleSubmit} />
    </>
  );
};

export default ConfigTypingContainer;
