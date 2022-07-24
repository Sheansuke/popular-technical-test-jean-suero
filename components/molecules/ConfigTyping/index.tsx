import { randomParagraphGenerator } from "@utils/randomParagraphGenerator";
import { listWords } from "@data/listWords";
import React, { FC, useContext } from "react";
import { ConfigTyping, FormValues } from "./ConfigTyping";
import { ConfigContext } from "@context/TypingConfigs";
import Router from "next/router";

const ConfigTypingContainer: FC = () => {
  const { setConfigs } = useContext(ConfigContext);
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

    setConfigs(parseData);
    Router.push("/typing");
  };

  return (
    <>
      <ConfigTyping onDataSubmit={handleSubmit} />
    </>
  );
};

export default ConfigTypingContainer;
