import {
  PulsedKeyType,
  TypingParagraph,
  TypingParagraphStatus,
} from "@molecules/TypingParagraph";
import { Keyboard } from "@organism/Keyboard";
import { FC, useState } from "react";

const testParagraph = "Lorem Ipsum es simplemente el texto";

interface TypingTest {
  timerTemplate: string;
  stopTimer: () => void;
  timeIsFinished: boolean;
  timeElapsed: {minutes: number; seconds: number}
}

const TypingTest: FC<TypingTest> = ({ timerTemplate,stopTimer,timeIsFinished,timeElapsed }) => {
  const [statusLettersList, setStatusLettersList] = useState<boolean[]>([]);
  const [pulsedKey, setPulsedKey] = useState<{ letter: string }>({
    letter: "",
  });

  const handlePulsedKey = (keyPressed: PulsedKeyType) => {
    setPulsedKey(keyPressed);
  };

  const handleOnPulseKey = (status: TypingParagraphStatus) => {
    if (status?.isLettersEnd) {
        // send context action
        return stopTimer()
    } 
    setStatusLettersList((preState) => [
      ...preState,
      status?.pulsedKeyAndPositionIsSame,
    ]);
  };

  return (
    <div className="grid  grid-cols-1 ">
      <p className="ml-10 text-xl">Tiempo: {timerTemplate} </p>
      <div className="flex justify-center h-80  items-center  ">
        <TypingParagraph
          pulsedKey={pulsedKey}
          paragraph={testParagraph}
          onPulsedKey={handleOnPulseKey}
          statusLettersList={statusLettersList}
          safeKeys={[
            "",
            "CapsLock",
            "Control",
            "Alt",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
          ]}
        />
      </div>
      <div className="flex justify-center">
        <Keyboard onPulseKey={handlePulsedKey} />
      </div>
    </div>
  );
};

export default TypingTest;
